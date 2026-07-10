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
            // Convert dict to sorted array
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
        uiControls.style.display = 'flex'; // show UI
    }

    // Geometry Generation
    const brainRadius = 80;
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    
    // Generate points on a sphere (Fibonacci lattice)
    for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        const r = brainRadius + (Math.random() - 0.5) * 15;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const pMaterial = new THREE.PointsMaterial({
        color: 0x116466, // Deep Teal
        size: 3.5, 
        transparent: true,
        opacity: 0.8
    });

    const particleSystem = new THREE.Points(particles, pMaterial);

    // Lines configuration
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineCounts = []; 
    
    const maxDist = 30; 
    
    let totalLines = 0;
    for (let i = 0; i < particleCount; i++) {
        const p1 = new THREE.Vector3(particlePositions[i*3], particlePositions[i*3+1], particlePositions[i*3+2]);
        let connections = 0;
        // We only connect to previous nodes (j < i) so that as 'i' grows, it connects back to existing structure
        for (let j = 0; j < i; j++) {
            const p2 = new THREE.Vector3(particlePositions[j*3], particlePositions[j*3+1], particlePositions[j*3+2]);
            if (p1.distanceTo(p2) < maxDist && connections < 5) {
                linePositions.push(p1.x, p1.y, p1.z);
                linePositions.push(p2.x, p2.y, p2.z);
                connections++;
                totalLines += 2;
            }
        }
        lineCounts[i] = totalLines;
    }
    
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    
    const linesMaterial = new THREE.LineBasicMaterial({
        color: 0xD9B08C, // Copper
        transparent: true,
        opacity: 0.15
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);

    const brainGroup = new THREE.Group();
    brainGroup.add(particleSystem);
    brainGroup.add(linesMesh);
    scene.add(brainGroup);

    // UI Logic
    if (particleCount > 0) {
        slider.min = 1;
        slider.max = particleCount;
        slider.value = particleCount;

        function updateVisuals(index) {
            const sliderLabel = document.getElementById('brain-slider-label');
            if (sliderLabel) {
                sliderLabel.innerHTML = `Nodes: <span style="color: var(--accent-primary); font-weight: bold;">${index}</span> / ${particleCount}`;
            }
            
            let activeNodes = Math.min(index, particleCount);
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
                if (parseInt(slider.value) === particleCount) {
                    slider.value = 1;
                }
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                
                const step = Math.max(1, Math.ceil(particleCount / 120));
                
                playInterval = setInterval(() => {
                    let val = parseInt(slider.value);
                    if (val < particleCount) {
                        val = Math.min(val + step, particleCount);
                        slider.value = val;
                        updateVisuals(val);
                    } else {
                        clearInterval(playInterval);
                        playInterval = null;
                        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                    }
                }, 16);
            }
        });

        // Initialize UI
        updateVisuals(particleCount);
    }

    // Mouse Interaction
    let targetScale = 1;
    let currentScale = 1;

    section.addEventListener('mouseenter', () => {
        targetScale = 1.1; 
        linesMaterial.opacity = 0.35;
        pMaterial.color.setHex(0xD9B08C); // Switch dots to copper
    });

    section.addEventListener('mouseleave', () => {
        targetScale = 1;
        linesMaterial.opacity = 0.15;
        pMaterial.color.setHex(0x116466); // Back to teal
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
        time += 0.02;

        brainGroup.rotation.y += 0.002;
        brainGroup.rotation.x = Math.sin(time * 0.5) * 0.1;

        currentScale += (targetScale - currentScale) * 0.1;
        brainGroup.scale.set(currentScale, currentScale, currentScale);

        renderer.render(scene, camera);
    }

    animate();
});
