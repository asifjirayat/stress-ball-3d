export const materialTypes = {
  rubber: {
    name: "Rubber Ball",
    color: "lightblue",
    pressedColor: "royalblue",
    squishScale: 0.8,
    bounceSpeed: 0.15,
    roughness: 0.3,
    metalness: 0.1,
  },
  gel: {
    name: "Gel Ball",
    color: "lightgreen",
    pressedColor: "darkgreen",
    squishScale: 0.6,
    bounceSpeed: 0.08,
    roughness: 0.8,
    metalness: 0.0,
  },
  foam: {
    name: "Memory Foam",
    color: "lightyellow",
    pressedColor: "orange",
    squishScale: 0.7,
    bounceSpeed: 0.05,
    roughness: 0.9,
    metalness: 0.0,
  },
};
export const StressBallMaterial = ({ type, isPressed }) => {
  const material = materialTypes[type];

  return (
    <meshStandardMaterial
      color={isPressed ? material.pressedColor : material.color}
      roughness={material.roughness}
      metalness={material.metalness}
    />
  );
};
