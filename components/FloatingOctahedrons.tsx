'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const positions: [number, number, number][] = [
  [-2.6, 1.1, -0.5],
  [2.4, -0.8, 0.2],
  [-1.2, -1.5, 0.8],
  [1.8, 1.5, -0.9],
];

const speeds = [0.11, 0.09, 0.13, 0.1];

function MetallicOcta({
  position,
  spin,
}: {
  position: [number, number, number];
  spin: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    const m = ref.current;
    if (!m) return;
    m.rotation.x += delta * spin;
    m.rotation.y += delta * spin * 0.72;
  });
  return (
    <Octahedron ref={ref} args={[0.85, 0]} position={position} castShadow receiveShadow>
      <meshStandardMaterial
        color="#f0932b"
        metalness={0.92}
        roughness={0.14}
        emissive="#7a3a00"
        emissiveIntensity={0.55}
      />
    </Octahedron>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const moveRaf = useRef(0);

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (moveRaf.current) return;
      moveRaf.current = requestAnimationFrame(() => {
        moveRaf.current = 0;
        target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      });
    };
    window.addEventListener('mousemove', onPointer, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onPointer);
      if (moveRaf.current) cancelAnimationFrame(moveRaf.current);
    };
  }, []);

  useFrame(() => {
    const g = group.current;
    if (!g) return;
    const tx = target.current.y * 0.14;
    const ty = target.current.x * 0.14;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, tx, 0.04);
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, ty, 0.04);
  });

  const items = useMemo(
    () =>
      positions.map((position, i) => (
        <MetallicOcta key={i} position={position} spin={speeds[i] ?? 0.1} />
      )),
    []
  );

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[8, 10, 8]} intensity={1.4} color="#ffd23f" />
      <pointLight position={[-10, -6, -4]} intensity={0.5} color="#00f5ff" />
      <group ref={group}>{items}</group>
    </>
  );
}

export default function FloatingOctahedrons() {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 7.5], fov: 48 }}
      dpr={[1, 1.5]}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        background: 'transparent',
      }}
    >
      <Scene />
    </Canvas>
  );
}
