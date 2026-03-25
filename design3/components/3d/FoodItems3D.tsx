'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function FoodItems3D() {
  const kebabRef = useRef<THREE.Group>(null);
  const plateRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Kebab (Cylinder) - Rotate and move
    if (kebabRef.current) {
      kebabRef.current.position.x = Math.sin(time * 0.5) * 3;
      kebabRef.current.rotation.z = time * 0.3;
    }

    // Plate (Flat Cylinder) - Opposite movement
    if (plateRef.current) {
      plateRef.current.position.x = -Math.sin(time * 0.5) * 3;
      plateRef.current.rotation.y = time * 0.5;
    }

    // Floating Sphere (Food item)
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time * 0.7) * 1.5;
      sphereRef.current.rotation.x = time * 0.4;
    }
  });

  return (
    <>
      {/* Kebab Skewer */}
      <Float speed={1.5} rotationIntensity={0.3}>
        <group ref={kebabRef} position={[-3, 0, -2]}>
          <mesh>
            <cylinderGeometry args={[0.15, 0.15, 3, 16]} />
            <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.7} />
          </mesh>
          {/* Meat pieces */}
          <mesh position={[0, 0.8, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#A0522D" metalness={0.2} roughness={0.8} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#A0522D" metalness={0.2} roughness={0.8} />
          </mesh>
          <mesh position={[0, -0.8, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#A0522D" metalness={0.2} roughness={0.8} />
          </mesh>
        </group>
      </Float>

      {/* Plate */}
      <Float speed={1} rotationIntensity={0.2}>
        <group ref={plateRef} position={[3, -1, -2]}>
          <mesh>
            <cylinderGeometry args={[1.2, 1.2, 0.15, 32]} />
            <meshStandardMaterial color="#FFFFFF" metalness={0.6} roughness={0.3} />
          </mesh>
          {/* Food on plate (sphere) */}
          <mesh position={[0, 0.3, 0]}>
            <sphereGeometry args={[0.4, 16, 16]} />
            <meshStandardMaterial color="#FFD700" metalness={0.2} roughness={0.6} />
          </mesh>
        </group>
      </Float>

      {/* Floating Food Item (Saffron Rice?) */}
      <Float speed={2} rotationIntensity={0.5}>
        <group ref={sphereRef} position={[0, 1, -3]}>
          <mesh>
            <sphereGeometry args={[0.5, 20, 20]} />
            <meshStandardMaterial
              color="#FFD700"
              metalness={0.4}
              roughness={0.5}
              emissive="#FFD700"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      </Float>

      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.3} intensity={1} color="#FFFFFF" />
      <spotLight position={[-10, 10, 10]} angle={0.3} intensity={0.5} color="#711521" />
    </>
  );
}
