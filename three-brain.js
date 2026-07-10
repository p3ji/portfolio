document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById('brain-canvas-container');
    const section = document.getElementById('digital-brain');
    const statText = document.getElementById('brain-stat-text');
    const slider = document.getElementById('brain-slider');
    const playBtn = document.getElementById('brain-play-btn');
    const uiControls = document.getElementById('brain-ui-controls');

    if (!container || !section) return;

    if (typeof THREE === 'undefined') {
        console.error("Three.js not loaded!");
        return;
    }

    // Initialize ThreeJS
    const scene = new THREE.Scene();
    let width = container.offsetWidth;
    let height = container.offsetHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Fetch history
    let history = [];
    if (statText && slider && uiControls && playBtn) {
        try {
            const response = await fetch('brain_stats_history.json?v=' + new Date().getTime());
            const rawHistory = await response.json();
            history = Object.keys(rawHistory)
                .sort((a, b) => new Date(a) - new Date(b))
                .map(date => ({ date, count: rawHistory[date] }));
        } catch (e) {
            console.error("Failed to load brain history", e);
        }
    }

    let particleCount = window.innerWidth < 768 ? 400 : 800;
    if (history.length > 0) {
        particleCount = history[history.length - 1].count;
        uiControls.style.display = 'flex';
    }

    // Brain Lobe & Convolutions Configuration
    const brainRadius = 75;
    const targetPositions = new Float32Array(particleCount * 3);
    const currentPositions = new Float32Array(particleCount * 3);
    
    // Generate organic brain target coordinates
    for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        // Add gyri/sulci brain surface convolutions
        let r = brainRadius;
        r += Math.sin(theta * 6) * Math.cos(phi * 6) * 5.5;
        r += (Math.random() - 0.5) * 5; // surface noise

        let x = r * Math.sin(phi) * Math.cos(theta);
        let y = r * Math.sin(phi) * Math.sin(theta);
        let z = r * Math.cos(phi);

        // Reshape into elongated double lobes (hemispheres)
        z *= 1.22; // front-back elongation
        y *= 0.85; // vertical compression
        
        // Sagittal fissure separation
        const gap = 5;
        if (x > 0) x += gap;
        else x -= gap;

        targetPositions[i * 3] = x;
        targetPositions[i * 3 + 1] = y;
        targetPositions[i * 3 + 2] = z;

        // Initialize particles at a randomized center core
        currentPositions[i * 3] = (Math.random() - 0.5) * 6;
        currentPositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
        currentPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    const particles = new THREE.BufferGeometry();
    particles.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));

    const pMaterial = new THREE.PointsMaterial({
        color: 0x116466, // Deep Teal
        size: 3.8,
        transparent: true,
        opacity: 0.85
    });

    const particleSystem = new THREE.Points(particles, pMaterial);

    // Dynamic Lines connection map
    const maxDist = 34;
    const linePairs = []; // Flat array of [p1Idx, p2Idx, ...]
    const lineCounts = [];
    let totalLines = 0;

    for (let i = 0; i < particleCount; i++) {
        const p1 = new THREE.Vector3(targetPositions[i * 3], targetPositions[i * 3 + 1], targetPositions[i * 3 + 2]);
        let connections = 0;
        for (let j = 0; j < i; j++) {
            const p2 = new THREE.Vector3(targetPositions[j * 3], targetPositions[j * 3 + 1], targetPositions[j * 3 + 2]);
            if (p1.distanceTo(p2) < maxDist && connections < 4) {
                linePairs.push(i, j);
                connections++;
                totalLines += 2;
            }
        }
        lineCounts[i] = totalLines;
    }

    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(linePairs.length * 3);
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
        color: 0xD9B08C, // Copper
        transparent: true,
        opacity: 0.16
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);

    const brainGroup = new THREE.Group();
    brainGroup.add(particleSystem);
    brainGroup.add(linesMesh);
    scene.add(brainGroup);

    // Animation & Slider State
    let activeNodes = particleCount;

    // UI Logic
    if (particleCount > 0) {
        slider.min = 1;
        slider.max = particleCount;
        slider.value = particleCount;

        function updateVisuals(index) {
            activeNodes = Math.min(index, particleCount);
            const sliderLabel = document.getElementById('brain-slider-label');
            if (sliderLabel) {
                sliderLabel.innerHTML = `Nodes: <span style="color: var(--accent-primary); font-weight: bold;">${activeNodes}</span> / ${particleCount}`;
            }

            let lineIdx = Math.max(0, activeNodes - 1);
            let activeLines = lineCounts[lineIdx] || 0;

            particles.setDrawRange(0, activeNodes);
            linesGeometry.setDrawRange(0, activeLines);
        }

        slider.addEventListener('input', (e) => {
            updateVisuals(parseInt(e.target.value));
        });

        let playInterval = null;
        playBtn.addEventListener('click', () => {
            if (playInterval) {
                clearInterval(playInterval);
                playInterval = null;
                playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            } else {
                if (parseInt(slider.value) === history.length - 1) {
                    slider.value = 0;
                }
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                const frameTime = 3000 / Math.max(1, history.length); // 3 seconds total
                playInterval = setInterval(() => {
                    let val = parseInt(slider.value);
                    if (val < history.length - 1) {
                        val++;
                        slider.value = val;
                        updateVisuals(val);
                    } else {
                        clearInterval(playInterval);
                        playInterval = null;
                        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                    }
                }, frameTime);
            }
        });

        // Initialize UI
        updateVisuals(history.length - 1);
    }

    // Mouse Interaction
    let targetScale = 1;
    let currentScale = 1;

    section.addEventListener('mouseenter', () => {
        targetScale = 1.08;
        linesMaterial.opacity = 0.38;
        pMaterial.color.setHex(0xD9B08C);
    });

    section.addEventListener('mouseleave', () => {
        targetScale = 1;
        linesMaterial.opacity = 0.16;
        pMaterial.color.setHex(0x116466);
    });

    // Resize handler
    window.addEventListener('resize', () => {
        width = container.offsetWidth;
        height = container.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    // Animation loop
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.016;

        brainGroup.rotation.y += 0.0025;
        brainGroup.rotation.x = Math.sin(time * 0.4) * 0.08;

        currentScale += (targetScale - currentScale) * 0.1;
        brainGroup.scale.set(currentScale, currentScale, currentScale);

        // Update particle positions organically (Floating + Growth LERP)
        const posAttr = particles.getAttribute('position');
        const posArray = posAttr.array;

        for (let i = 0; i < particleCount; i++) {
            const idx = i * 3;
            
            // Get original target coords
            const tx = targetPositions[idx];
            const ty = targetPositions[idx + 1];
            const tz = targetPositions[idx + 2];

            if (i < activeNodes) {
                // Organic floating oscillation waves
                const waveX = Math.sin(time * 1.5 + i * 0.1) * 1.6;
                const waveY = Math.cos(time * 1.6 + i * 0.1) * 1.6;
                const waveZ = Math.sin(time * 1.7 + i * 0.1) * 1.6;

                // LERP from current to target + wave offset
                posArray[idx] += (tx + waveX - posArray[idx]) * 0.08;
                posArray[idx + 1] += (ty + waveY - posArray[idx + 1]) * 0.08;
                posArray[idx + 2] += (tz + waveZ - posArray[idx + 2]) * 0.08;
            } else {
                // Return to center core when inactive
                posArray[idx] += (0 - posArray[idx]) * 0.12;
                posArray[idx + 1] += (0 - posArray[idx + 1]) * 0.12;
                posArray[idx + 2] += (0 - posArray[idx + 2]) * 0.12;
            }
        }
        posAttr.needsUpdate = true;

        // Update Line Segment positions to follow particles
        const linePosAttr = linesGeometry.getAttribute('position');
        const linePosArray = linePosAttr.array;
        
        for (let k = 0; k < linePairs.length / 2; k++) {
            const i = linePairs[k * 2];
            const j = linePairs[k * 2 + 1];

            const idxI = i * 3;
            const idxJ = j * 3;

            const lIdx = k * 6;

            linePosArray[lIdx] = posArray[idxI];
            linePosArray[lIdx + 1] = posArray[idxI + 1];
            linePosArray[lIdx + 2] = posArray[idxI + 2];

            linePosArray[lIdx + 3] = posArray[idxJ];
            linePosArray[lIdx + 4] = posArray[idxJ + 1];
            linePosArray[lIdx + 5] = posArray[idxJ + 2];
        }
        linePosAttr.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();
});
