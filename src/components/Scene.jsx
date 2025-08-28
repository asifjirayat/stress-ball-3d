import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, memo } from "react";
import { StressBallMaterial, materialTypes } from "./StressBallMaterials.jsx";

const Scene = memo(function ({ currentMaterial }) {
  const mesh = useRef(null);
  const [isPressed, setIsPressed] = useState(false);
  const [particles, setParticles] = useState([]);

  const audio = useRef(null);

  // Initialize sound
  useEffect(() => {
    audio.current = new Audio("/sounds/squish.wav");
  }, []);

  // Rotate the cube every frame
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.005;

      // Get material properties for different behaviors
      const material = materialTypes[currentMaterial];
      const targetScale = isPressed ? material.squishScale : 1;
      const speed = material.bounceSpeed;

      // Smooth scaling animation when pressed
      mesh.current.scale.x += (targetScale - mesh.current.scale.x) * speed;
      mesh.current.scale.y += (targetScale - mesh.current.scale.y) * speed;
      mesh.current.scale.z += (targetScale - mesh.current.scale.z) * speed;
    }

    // Update particles - fade out over time
    setParticles((prevParticles) =>
      prevParticles
        .map((particle) => ({
          ...particle,
          life: particle.life - 0.02,
          scale: particle.scale * 0.98,
        }))
        .filter((particle) => particle.life > 0)
    );
  });

  const handlePointerDown = () => {
    setIsPressed(true);

    // Play audio
    if (audio.current) {
      audio.current.currentTime = 0;
      audio.current.play().catch(() => {});
    }

    // Create particles around the ball
    const newParticles = [];
    for (let i = 0; i < 6; i++) {
      newParticles.push({
        id: Math.random(),
        position: [
          (Math.random() - 0.5) * 3, // X-Axis
          (Math.random() - 0.5) * 3, // Y-Axis
          (Math.random() - 0.5) * 3, // Z-Axis
        ],
        life: 1.0,
        scale: 0.1,
      });
    }

    setParticles(newParticles);
  };

  const handlePointerUp = () => {
    setIsPressed(false);
  };

  return (
    <>
      {/* 3D Mesh Ball */}
      <mesh
        ref={mesh}
        position={[0, 0, 0]}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <StressBallMaterial type={currentMaterial} isPressed={isPressed} />
      </mesh>

      {/* Render Particles */}
      {particles.map((particle) => (
        <mesh
          key={particle.id}
          position={particle.position}
          scale={particle.scale}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial
            color="white"
            transparent
            opacity={particle.life}
          />
        </mesh>
      ))}
    </>
  );
});

export default Scene;
