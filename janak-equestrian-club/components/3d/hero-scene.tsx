'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function HorseAbstract() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.18;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.1) * 0.04;
  });

  return (
    <group ref={group} position={[0, -0.1, 0]}>
      <mesh position={[0, 0.1, 0]} castShadow>
        <boxGeometry args={[1.6, 0.55, 0.5]} />
        <meshStandardMaterial color="#47308f" metalness={0.25} roughness={0.3} />
      </mesh>
      <mesh position={[0.7, 0.55, 0]} rotation={[0, 0, -0.15]} castShadow>
        <boxGeometry args={[0.55, 0.5, 0.35]} />
        <meshStandardMaterial color="#5f3fd6" metalness={0.2} roughness={0.35} />
      </mesh>
      <mesh position={[1.0, 0.93, 0]} rotation={[0, 0, 0.45]} castShadow>
        <boxGeometry args={[0.24, 0.6, 0.2]} />
        <meshStandardMaterial color="#f3ba84" metalness={0.15} roughness={0.4} />
      </mesh>
      {[-0.5, -0.1, 0.35, 0.7].map((x) => (
        <mesh key={x} position={[x, -0.55, 0]} castShadow>
          <boxGeometry args={[0.13, 1.2, 0.13]} />
          <meshStandardMaterial color="#201436" metalness={0.05} roughness={0.65} />
        </mesh>
      ))}
      <mesh position={[-1.0, 0.18, 0]} rotation={[0, 0, -0.85]} castShadow>
        <boxGeometry args={[0.2, 1.0, 0.15]} />
        <meshStandardMaterial color="#ffb38a" metalness={0.15} roughness={0.45} />
      </mesh>
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, 0]} receiveShadow>
      <planeGeometry args={[60, 60]} />
      <meshStandardMaterial color="#0b0815" roughness={0.95} metalness={0.05} />
    </mesh>
  );
}

function SceneContent() {
  return (
    <>
      <color attach="background" args={['#0a0814']} />
      <fog attach="fog" args={['#0a0814', 6, 18]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[4, 6, 2]} intensity={2.4} color="#ffbc94" castShadow />
      <pointLight position={[-4, 3, -2]} intensity={10} color="#7b5cff" />
      <pointLight position={[3, 1, 2]} intensity={5} color="#f6d17e" />
      <Stars radius={80} depth={30} count={1200} factor={4} saturation={0} fade speed={0.4} />
      <Sparkles count={60} size={2.2} speed={0.2} scale={[7, 4, 6]} color="#f7c17b" />
      <Environment preset="night" />
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.7}>
        <HorseAbstract />
      </Float>
      <Floor />
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas shadows camera={{ position: [0, 1.2, 5.4], fov: 42 }}>
      <SceneContent />
    </Canvas>
  );
}
