import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const RobotHead = () => {
  const group = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates to [-1, 1] standard ThreeJS space
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Smoother and wider gaze range mapped directly to screen coordinates
    const targetY = mouse.current.x * (Math.PI / 3); // Turn left/right
    const targetX = mouse.current.y * (Math.PI / 4); // Tilt up/down
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetX, 0.1);
  });

  return (
    <group ref={group}>
      <Float speed={3} rotationIntensity={0.2} floatIntensity={1.5}>
        {/* Main Head - Dark Theme but Cute Round Shape */}
        <Sphere args={[1.5, 64, 64]}>
          <meshStandardMaterial color="#111827" roughness={0.2} metalness={0.8} />
        </Sphere>
        
        {/* Visor Area / Screen */}
        <Sphere args={[1.3, 64, 64]} position={[0, 0.1, 0.5]} scale={[1, 0.6, 0.8]}>
          <meshPhysicalMaterial color="#000000" roughness={0.1} metalness={0.8} />
        </Sphere>

        {/* Big Glowing Cute Eyes */}
        <Sphere args={[0.25, 32, 32]} position={[-0.5, 0.2, 1.45]}>
          <meshBasicMaterial color="#a855f7" />
        </Sphere>
        <Sphere args={[0.25, 32, 32]} position={[0.5, 0.2, 1.45]}>
          <meshBasicMaterial color="#06b6d4" /> {/* Cute distinct colors */}
        </Sphere>

        {/* Cute Mouth */}
        <Box args={[0.3, 0.05, 0.1]} position={[0, -0.15, 1.48]} rotation={[0, 0, 0]}>
          <meshBasicMaterial color="#a855f7" />
        </Box>

        {/* Blush / Cheeks */}
        <Sphere args={[0.15, 16, 16]} position={[-0.8, -0.2, 1.35]} scale={[1.5, 0.6, 0.2]}>
          <meshBasicMaterial color="#ec4899" transparent opacity={0.6} />
        </Sphere>
        <Sphere args={[0.15, 16, 16]} position={[0.8, -0.2, 1.35]} scale={[1.5, 0.6, 0.2]}>
          <meshBasicMaterial color="#ec4899" transparent opacity={0.6} />
        </Sphere>

        {/* Cute little Antenna Base */}
        <Box args={[0.2, 0.2, 0.2]} position={[0, 1.5, 0]}>
          <meshStandardMaterial color="#374151" />
        </Box>
        {/* Antenna Stem */}
        <Box args={[0.08, 0.6, 0.08]} position={[0, 1.8, 0]}>
          <meshStandardMaterial color="#9ca3af" />
        </Box>
        {/* Antenna Tip */}
        <Sphere args={[0.2, 32, 32]} position={[0, 2.2, 0]}>
          <meshBasicMaterial color="#a855f7" />
        </Sphere>
      </Float>
    </group>
  );
};

const Avatar3D = () => {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <RobotHead />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Avatar3D;
