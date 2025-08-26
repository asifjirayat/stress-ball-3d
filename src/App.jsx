import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene.jsx";

const App = () => {
  return (
    <>
      <h1 style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}>
        Stress Ball 3D
      </h1>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
    </>
  );
};

export default App;
