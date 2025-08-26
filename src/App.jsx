import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene.jsx";
import { useState } from "react";
import { materialTypes } from "./components/StressBallMaterials.jsx";

const App = () => {
  const [currentMaterial, setCurrentMaterial] = useState("rubber");

  return (
    <>
      <h1 style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}>
        Stress Ball 3D
      </h1>

      {/* Material Selector UI */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "20px",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {Object.keys(materialTypes).map((materialKey) => (
          <button
            key={materialKey}
            onClick={() => setCurrentMaterial(materialKey)}
            style={{
              padding: "8px 16px",
              backgroundColor:
                currentMaterial === materialKey ? "#444444" : "#222222",
              color: "white",
              border: "1px solid #666666",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {materialTypes[materialKey].name}
          </button>
        ))}
      </div>

      {/* 3D Canvas - only Three.js elements inside */}
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Scene currentMaterial={currentMaterial} />
      </Canvas>
    </>
  );
};

export default App;
