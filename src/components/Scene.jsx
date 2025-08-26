import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Scene = () => {
  const mesh = useRef(null);

  // Rotate the cube every frame
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Scene;
