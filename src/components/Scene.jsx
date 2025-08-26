import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { StressBallMaterial, materialTypes } from "./StressBallMaterials.jsx";

const Scene = ({ currentMaterial }) => {
  const mesh = useRef(null);
  const [isPressed, setIsPressed] = useState(false);

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
  });

  const handlePointerDown = () => {
    setIsPressed(true);
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
    </>
  );
};

export default Scene;
