'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import styles from './Background3D.module.css';

// Individual floating wireframe mesh
function FloatingMesh({
  position,
  type,
  speed,
  axis,
  color,
  scale,
}: {
  position: [number, number, number];
  type: 'icosahedron' | 'torus' | 'octahedron' | 'torusKnot';
  speed: number;
  axis: 'x' | 'y' | 'z';
  color: string;
  scale: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    (meshRef.current.rotation as any)[axis] = t * speed;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.4 + position[0]) * 0.4;
  });

  const mat = (
    <meshBasicMaterial
      color={color}
      wireframe
      transparent
      opacity={0.15}
    />
  );

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {type === 'icosahedron' && <icosahedronGeometry args={[1, 1]} />}
      {type === 'torus' && <torusGeometry args={[1, 0.35, 12, 64]} />}
      {type === 'octahedron' && <octahedronGeometry args={[1]} />}
      {type === 'torusKnot' && <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />}
      {mat}
    </mesh>
  );
}

// Subtle mouse parallax on camera
function MouseParallax() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5);
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 1.5 - camera.position.x) * 0.03;
    camera.position.y += (mouse.current.y * 1.0 - camera.position.y) * 0.03;
  });

  return null;
}

export default function Background3D() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
        <color attach="background" args={['#050505']} />

        {/* Lighting for atmosphere */}
        <ambientLight intensity={0.1} />
        <pointLight position={[5, 5, 5]} color="#a855f7" intensity={3} />
        <pointLight position={[-8, -4, -8]} color="#0ea5e9" intensity={2} />
        <pointLight position={[10, -8, 2]} color="#ec4899" intensity={1.5} />

        {/* Star field */}
        <Stars radius={120} depth={60} count={2500} factor={3} saturation={0} fade speed={0.4} />

        {/* Mouse parallax */}
        <MouseParallax />

        {/* Floating geometric meshes */}
        <FloatingMesh position={[-7,  2, -6]} type="icosahedron" speed={0.18} axis="y" color="#a855f7" scale={1.8} />
        <FloatingMesh position={[ 8, -2, -9]} type="torus"       speed={0.12} axis="x" color="#0ea5e9" scale={1.5} />
        <FloatingMesh position={[ 5,  5, -7]} type="octahedron"  speed={0.22} axis="z" color="#ec4899" scale={1.2} />
        <FloatingMesh position={[-9, -5, -12]} type="torusKnot"  speed={0.09} axis="y" color="#a855f7" scale={1.0} />
        <FloatingMesh position={[ 2,  8, -10]} type="icosahedron" speed={0.15} axis="x" color="#0ea5e9" scale={0.9} />
        <FloatingMesh position={[-4, -8, -8]}  type="torus"       speed={0.20} axis="z" color="#ec4899" scale={1.3} />
      </Canvas>

      {/* Chromatic glow at center */}
      <div className={styles.glowCenter} />
      {/* Edge vignette */}
      <div className={styles.vignette} />
    </div>
  );
}
