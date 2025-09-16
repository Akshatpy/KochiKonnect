import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from '@react-three/drei'; import * as THREE from "three";
const stationNames = [
  "Aluva", "Ambattukavu", "Cochin Uni", "Maharajas College", "Lissie"
];

function Stations() {
  // Spread stations at intervals
  return (
    <>{stationNames.map((name, idx) => (
  <Text
    key={name}
    position={[-10 + idx * 5, -3.3, 0]} // start at -10, spaced 6 units apart
    fontSize={0.6}
    color="#222"
  >
    {name.trim()}
  </Text>
))}
    </>
  );
}
// Metro train component
function MetroTrain({ color, speed, z }) {
  const group = useRef();   

  useFrame(({ clock }) => {
    group.current.position.x = (clock.getElapsedTime() * speed) % 30 - 15;
  });

  return (
    <group ref={group} position={[0, 0, z]}>
      {/* Body (BoxGeometry) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 1, 1.2]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Nose (CylinderGeometry) */}
      <mesh position={[-1.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.6, 0.6, 1, 12]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Roof (smaller box for detail) */}
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[2.6, 0.2, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* Wheels (optional for detail) */}
      <mesh position={[-1, -0.6, 0.4]}>
        <cylinderGeometry args={[0.18, 0.18, 0.15, 12]} />
        <meshStandardMaterial color="black" />
        <mesh rotation={[Math.PI / 2, 0, 0]} />
      </mesh>
      {/* Repeat/add more details for realism as needed */}
    </group>
  );
}

export default function Metro3D() {
  return (
    <Canvas camera={{ position: [0, 5, 14], fov: 40 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 8, 5]} intensity={0.6} />
      <MetroTrain color="#2196f3" speed={0.8} z={0} />
      <MetroTrain color="#f44336" speed={1.2} z={2} />
      <MetroTrain color="#4caf50" speed={1.0} z={-2} />
      <Stations />
    </Canvas>
  );
}
