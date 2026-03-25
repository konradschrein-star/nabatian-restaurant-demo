'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, ReactNode } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import Logo3D from '@/components/3d/Logo3D';

interface Hero3DProps {
  children: ReactNode;
}

export default function Hero3D({ children }: Hero3DProps) {
  return (
    <section className="relative h-screen">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Logo3D />
            <Environment preset="sunset" />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#FFFFFF" />
          </Suspense>
        </Canvas>
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 -z-5"></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        {children}
      </div>
    </section>
  );
}
