document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('three-canvas-container');
    const homeSection = document.getElementById('home');
    if (!container || !homeSection) return;

    // Wait until THREE is available
    if (typeof THREE === 'undefined') {
        console.error("Three.js not loaded!");
        return;
    }

    const scene = new THREE.Scene();

    let height = homeSection.offsetHeight;
    if (height < 100) height = window.innerHeight * 0.8;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / height, 0.1, 1000);
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Explicitly transparent
    container.appendChild(renderer.domElement);

    // Configuration
    const particleCount = window.innerWidth < 768 ? 150 : 350;
    const maxDistance = 45;
    const particlesData = [];

    // Geometries & Materials
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    
    // Initialize positions and velocities
    for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 600;
        const y = (Math.random() - 0.5) * 400;
        const z = (Math.random() - 0.5) * 200;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        particlesData.push({
            velocity: new THREE.Vector3(-0.2 + Math.random() * 0.4, -0.2 + Math.random() * 0.4, -0.2 + Math.random() * 0.4),
            numConnections: 0
        });
    }

    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const pMaterial = new THREE.PointsMaterial({
        color: 0xD9B08C, // Copper/Peach
        size: 2,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });

    const particleSystem = new THREE.Points(particles, pMaterial);
    scene.add(particleSystem);

    // Lines configuration
    const linesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * particleCount * 3);
    const colors = new Float32Array(particleCount * particleCount * 3);

    linesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage));

    const linesMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.35
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // Mouse interaction
    const mouse = new THREE.Vector2(-9999, -9999);
    const targetMouse = new THREE.Vector2(-9999, -9999);
    
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const pointOfIntersection = new THREE.Vector3();

    window.addEventListener('mousemove', (event) => {
        // Calculate mouse position in normalized device coordinates (-1 to +1)
        targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        
        // Use hero section's bounding rect to calculate y
        const rect = homeSection.getBoundingClientRect();
        const y = event.clientY - rect.top;
        
        // Only react if mouse is within hero section roughly
        if (y >= 0 && y <= rect.height) {
            targetMouse.y = -(y / rect.height) * 2 + 1;
        } else {
            targetMouse.x = -9999;
            targetMouse.y = -9999;
        }
    });

    window.addEventListener('mouseleave', () => {
        targetMouse.x = -9999;
        targetMouse.y = -9999;
    });

    // Resize handler
    window.addEventListener('resize', () => {
        const height = homeSection.offsetHeight;
        camera.aspect = window.innerWidth / height;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, height);
    });

    // Animation loop
    const baseColor = new THREE.Color(0x116466); // Deep Teal
    const highlightColor = new THREE.Color(0xD9B08C); // Copper

    function animate() {
        requestAnimationFrame(animate);

        let vertexpos = 0;
        let colorpos = 0;
        let numConnected = 0;

        for (let i = 0; i < particleCount; i++) {
            particlesData[i].numConnections = 0;
        }

        // Mouse easing
        mouse.lerp(targetMouse, 0.05);
        let activeMouse = false;
        if (mouse.x > -9990) {
            activeMouse = true;
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(plane, pointOfIntersection);
        }

        for (let i = 0; i < particleCount; i++) {
            const particleData = particlesData[i];

            // Drift
            particlePositions[i * 3] += particleData.velocity.x;
            particlePositions[i * 3 + 1] += particleData.velocity.y;
            particlePositions[i * 3 + 2] += particleData.velocity.z;

            // Bounce off boundaries
            if (particlePositions[i * 3] < -350 || particlePositions[i * 3] > 350) particleData.velocity.x *= -1;
            if (particlePositions[i * 3 + 1] < -250 || particlePositions[i * 3 + 1] > 250) particleData.velocity.y *= -1;
            if (particlePositions[i * 3 + 2] < -150 || particlePositions[i * 3 + 2] > 150) particleData.velocity.z *= -1;

            // Mouse Repulsion
            if (activeMouse) {
                const dx = pointOfIntersection.x - particlePositions[i * 3];
                const dy = pointOfIntersection.y - particlePositions[i * 3 + 1];
                const distToMouse = Math.sqrt(dx * dx + dy * dy);
                
                if (distToMouse < 60) {
                    const force = (60 - distToMouse) / 60;
                    particlePositions[i * 3] -= (dx / distToMouse) * force * 1.5;
                    particlePositions[i * 3 + 1] -= (dy / distToMouse) * force * 1.5;
                }
            }

            // Check connections
            for (let j = i + 1; j < particleCount; j++) {
                const dx = particlePositions[i * 3] - particlePositions[j * 3];
                const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
                const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < maxDistance) {
                    particlesData[i].numConnections++;
                    particlesData[j].numConnections++;

                    positions[vertexpos++] = particlePositions[i * 3];
                    positions[vertexpos++] = particlePositions[i * 3 + 1];
                    positions[vertexpos++] = particlePositions[i * 3 + 2];

                    positions[vertexpos++] = particlePositions[j * 3];
                    positions[vertexpos++] = particlePositions[j * 3 + 1];
                    positions[vertexpos++] = particlePositions[j * 3 + 2];

                    // Highlight lines near the mouse
                    let lineColor = baseColor;
                    if (activeMouse) {
                        const mdx = pointOfIntersection.x - ((particlePositions[i * 3] + particlePositions[j * 3]) / 2);
                        const mdy = pointOfIntersection.y - ((particlePositions[i * 3 + 1] + particlePositions[j * 3 + 1]) / 2);
                        const distToMouseStrand = Math.sqrt(mdx * mdx + mdy * mdy);
                        if (distToMouseStrand < 80) {
                            lineColor = highlightColor;
                        }
                    }

                    colors[colorpos++] = lineColor.r;
                    colors[colorpos++] = lineColor.g;
                    colors[colorpos++] = lineColor.b;

                    colors[colorpos++] = lineColor.r;
                    colors[colorpos++] = lineColor.g;
                    colors[colorpos++] = lineColor.b;

                    numConnected++;
                }
            }
        }

        linesMesh.geometry.setDrawRange(0, numConnected * 2);
        linesMesh.geometry.attributes.position.needsUpdate = true;
        linesMesh.geometry.attributes.color.needsUpdate = true;
        particleSystem.geometry.attributes.position.needsUpdate = true;

        // Slow rotation of entire scene
        scene.rotation.y += 0.001;
        scene.rotation.x += 0.0005;

        renderer.render(scene, camera);
    }

    animate();
});
