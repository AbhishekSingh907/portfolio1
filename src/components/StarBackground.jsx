import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WarpSpeedStars = () => {
  const pointsRef = useRef();
  
  const starCount = 3000;
  
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(starCount * 3);
    const spd = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
        // X and Y spread across a wide area
        pos[i * 3] = (Math.random() - 0.5) * 100;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
        // Z spread from far back (-150) up to just past camera (5)
        pos[i * 3 + 2] = -150 + Math.random() * 155;
        
        // Random speed for parallax depth
        spd[i] = Math.random() * 0.5 + 0.5;
    }
    return [pos, spd];
  }, [starCount]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      const posArray = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < starCount; i++) {
        // Move stars forward along the Z axis (slower speed)
        posArray[i * 3 + 2] += delta * 8 * speeds[i];
        
        // If a star flies past the camera, reset it far away in the background
        if (posArray[i * 3 + 2] > 5) {
            posArray[i * 3 + 2] = -150;
            // Optionally randomize X and Y slightly when resetting for variety
            posArray[i * 3] = (Math.random() - 0.5) * 100;
            posArray[i * 3 + 1] = (Math.random() - 0.5) * 100;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={starCount} 
          array={positions} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.15} 
        color="#a855f7" 
        transparent 
        opacity={0.8}
        sizeAttenuation={true} 
      />
    </points>
  );
};

const StarBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-dark-bg">
      <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
        <WarpSpeedStars />
      </Canvas>
    </div>
  );
};

export default StarBackground;
