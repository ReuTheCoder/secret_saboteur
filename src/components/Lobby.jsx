import { useState } from "react";

export default function Lobby({ onStart }) {
  const [count, setCount] = useState(4);

  return (
    <div className="card">
      <h1>Secret Saboteur</h1>
      <p>Select number of players</p>

      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setCount(Math.max(3, count - 1))}>−</button>
        <span style={{ margin: "0 20px", fontSize: "24px", fontWeight: "600" }}>
          {count}
        </span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <button onClick={() => onStart(count)}>Start Game</button>
    </div>
  );
}
