import { useState } from "react";
import Graph from "./components/Graph";
import "./styles.css";

export default function App() {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleWheel(e) {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    setScale((s) => Math.min(Math.max(0.5, s + delta), 2));
  }

  function handleDrag(e) {
    if (e.buttons !== 1) return;
    setOffset((o) => ({
      x: o.x + e.movementX,
      y: o.y + e.movementY
    }));
  }

  return (
    <div className="viewport" onWheel={handleWheel} onMouseMove={handleDrag}>
      <div
        className="canvas"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`
        }}
      >
        <Graph />
      </div>
    </div>
  );
}
