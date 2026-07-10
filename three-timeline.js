document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('three-canvas-container');
    const homeSection = document.getElementById('home');
    if (!container || !homeSection) return;

    if (typeof THREE === 'undefined') {
        console.error("Three.js not loaded!");
        return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1a2422, 0.002);

    let height = homeSection.offsetHeight;
    if (height < 100) height = window.innerHeight * 0.8;

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / height, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create the winding path
    const points = [];
    const numPoints = 80;
    const pathLength = 3000;
    
    for (let i = 0; i < numPoints; i++) {
        const y = - (i / (numPoints - 1)) * pathLength;
        const x = Math.sin(i * 0.4) * 45;
        const z = Math.cos(i * 0.3) * 45;
        points.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(points);
    curve.closed = false;

    // Create Tube Geometry
    const tubeGeometry = new THREE.TubeGeometry(curve, 200, 4, 12, false);
    
    // Glowing material
    const tubeMaterial = new THREE.MeshBasicMaterial({
        color: 0x116466, // Deep Teal
        wireframe: true,
        transparent: true,
        opacity: 0.12
    });

    const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
    scene.add(tube);

    // Particles along the tube
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 800;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
        // Random point along curve
        const t = Math.random();
        const pt = curve.getPointAt(t);
        
        // Add spread
        const spread = 20;
        particlePositions[i * 3] = pt.x + (Math.random() - 0.5) * spread;
        particlePositions[i * 3 + 1] = pt.y + (Math.random() - 0.5) * spread;
        particlePositions[i * 3 + 2] = pt.z + (Math.random() - 0.5) * spread;
        
        particleSpeeds[i] = Math.random() * 0.02;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        color: 0xD9B08C, // Copper
        size: 2,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Scroll handling
    let scrollPercent = 0;
    let targetScrollPercent = 0;

    function onScroll() {
        const h = document.documentElement; 
        const b = document.body;
        const st = 'scrollTop';
        const sh = 'scrollHeight';
        const totalScroll = (h[sh]||b[sh]) - h.clientHeight;
        if (totalScroll > 0) {
            targetScrollPercent = (h[st]||b[st]) / totalScroll;
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initialize
    onScroll();

    // Resize handler
    window.addEventListener('resize', () => {
        let height = homeSection.offsetHeight;
        if (height < 100) height = window.innerHeight * 0.8;
        camera.aspect = window.innerWidth / height;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, height);
    });

    // Animation loop
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;

        // Smooth scroll
        scrollPercent += (targetScrollPercent - scrollPercent) * 0.08;

        // Ensure we don't hit 1 exactly to avoid lookAt errors at the very end of curve
        const t = Math.max(0.001, Math.min(0.99, scrollPercent));
        
        // Position camera
        const camPos = curve.getPointAt(t);
        camera.position.copy(camPos);
        
        // Look ahead
        const lookAtT = Math.min(1.0, t + 0.03);
        const lookAtPos = curve.getPointAt(lookAtT);
        camera.lookAt(lookAtPos);

        // Add a slight roll/tilt based on scroll to make it dynamic
        camera.rotation.z += Math.sin(time) * 0.1;

        // Make particles drift slightly
        const positions = particleSystem.geometry.attributes.position.array;
        for(let i=0; i<particleCount; i++) {
            positions[i*3 + 1] += particleSpeeds[i];
            // If they drift too high, loop them back down
            if (positions[i*3 + 1] > 100) {
                 positions[i*3 + 1] -= pathLength;
            }
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();
});
