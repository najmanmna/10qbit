"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Utility to generate random points evenly distributed within a sphere
function randomInSphere(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;
    
    positions[i] = r * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = r * Math.cos(phi);
  }
  return positions;
}

function ParticleCloud() {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollY = useRef(0);
  
  // 1. ZOOMED IN INITIAL STATE: Increased radius from 1.2 to 1.8
  const sphere = useMemo(() => randomInSphere(3000, 1.8), []);

  // Track the user's scroll position silently
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 60fps render loop with smooth scroll physics
  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Base Idle Animation
      pointsRef.current.rotation.x -= delta / 15;
      pointsRef.current.rotation.y -= delta / 20;

      // 2. LAST TILL THE END: We cap the Z and Y values using Math.min.
      // The camera is at Z=3. With a radius of 1.8, capping movement at 1.0 means 
      // the front edge stops at 2.8 — inches from the lens, without ever disappearing!
      const targetRotationZ = scrollY.current * 0.0005; 
      const targetPositionZ = Math.min(scrollY.current * 0.0008, 1.0);
      const targetPositionY = Math.min(scrollY.current * 0.0003, 0.8);

      // Lerp for buttery smooth weight
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(pointsRef.current.rotation.z, targetRotationZ, 0.05);
      pointsRef.current.position.z = THREE.MathUtils.lerp(pointsRef.current.position.z, targetPositionZ, 0.05);
      pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, targetPositionY, 0.05);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6C5CE7" 
          size={0.015} // Kept size prominent
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

export default function QuantumMesh() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ParticleCloud />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0F_100%)]"></div>
    </div>
  );
}