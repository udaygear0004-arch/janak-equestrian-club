'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ring1.current) ring1.current.rotation.z = state.clock.elapsedTime * 0.25;
    if (ring2.current) ring2.current.rotation.z = -state.clock.elapsedTime * 0.18;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ring1}>
        <torusGeometry args={[1.35, 0.05, 16, 120]} />
        <meshStandardMaterial color="#e6bf6b" emissive="#6e4b11" emissiveIntensity={0.5} />
      </mesh>
      <mesh ref={ring2} rotation={[0.6, 0.25, 0.2]}>
        <torusGeometry args={[0.85, 0.04, 16, 100]} />
        <meshStandardMaterial color="#7d5bfd" emissive="#25135f" emissiveIntensity={0.7} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial color="#ffb38a" metalness={0.25} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export function RingScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
      <color attach="background" args={['#0d0a18']} />
      <ambientLight intensity={1.2} />
      <pointLight position={[3, 3, 2]} intensity={20} color="#f4ca7c" />
      <pointLight position={[-3, -2, 2]} intensity={12} color="#7b5cff" />
      <Sparkles count={40} size={1.8} speed={0.25} scale={[4, 4, 2]} />
      <RotatingRings />
    </Canvas>
  );
}
