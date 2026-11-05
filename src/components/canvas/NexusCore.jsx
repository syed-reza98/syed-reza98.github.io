import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function QuantumKernel({ mousePos }) {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.1;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x -= delta * 0.15;
      wireRef.current.rotation.y -= delta * 0.25;

      // Gentle cursor parallax
      wireRef.current.position.x = THREE.MathUtils.lerp(wireRef.current.position.x, mousePos.current[0] * 0.5, 0.05);
      wireRef.current.position.y = THREE.MathUtils.lerp(wireRef.current.position.y, mousePos.current[1] * 0.5, 0.05);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Inner glowing core */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.2, 0.35, 128, 32, 2, 3]} />
        <meshBasicMaterial 
          color="#00f2fe" 
          wireframe 
          transparent 
          opacity={0.35} 
        />
      </mesh>

      {/* Outer quantum wire shell */}
      <mesh ref={wireRef} scale={1.2}>
        <icosahedronGeometry args={[2.0, 2]} />
        <meshBasicMaterial 
          color="#4facfe" 
          wireframe 
          transparent 
          opacity={0.12} 
        />
      </mesh>
    </group>
  );
}

function DataConstellation({ count = 180 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorCyan = new THREE.Color('#00f2fe');
    const colorAmber = new THREE.Color('#ffb300');
    const colorBlue = new THREE.Color('#0051ff');

    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const distance = THREE.MathUtils.randFloat(3, 9);

      pos[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = distance * Math.cos(theta);

      const pickedColor = i % 4 === 0 ? colorAmber : i % 2 === 0 ? colorCyan : colorBlue;
      col[i * 3] = pickedColor.r;
      col[i * 3 + 1] = pickedColor.g;
      col[i * 3 + 2] = pickedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function NexusCore({ mousePos }) {
  return (
    <div className="nexus-canvas-container" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
          <QuantumKernel mousePos={mousePos} />
        </Float>
        <DataConstellation count={160} />
      </Canvas>
    </div>
  );
}
