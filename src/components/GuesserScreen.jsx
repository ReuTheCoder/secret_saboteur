import { useState } from "react";

export default function GuesserScreen({ prompt, onGuess }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="card">
      <h2>{prompt.text}</h2>

      <div style={{ margin: "30px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "10px"
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => {
            const value = i + 1;
            return (
              <button
                key={value}
                onClick={() => setSelected(value)}
                style={{
                  background: selected === value ? "#0097A7" : "#00BCD4"
                }}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => onGuess(selected)}
        disabled={selected === null}
        style={{ opacity: selected === null ? 0.5 : 1 }}
      >
        Confirm Guess
      </button>
    </div>
  );
}
