'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

export default function Logo3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      // Floating effect
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Center Box (Placeholder for Logo) */}
        <mesh>
          <boxGeometry args={[3, 3, 0.5]} />
          <meshStandardMaterial
            color="#711521"
            metalness={0.8}
            roughness={0.2}
            emissive="#711521"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Glow Light */}
        <pointLight position={[0, 0, 2]} intensity={2} color="#711521" distance={10} decay={2} />
        <pointLight position={[3, 0, 0]} intensity={1} color="#ad083a" distance={8} decay={2} />
        <pointLight position={[-3, 0, 0]} intensity={1} color="#ad083a" distance={8} decay={2} />
      </group>
    </Float>
  );
}
