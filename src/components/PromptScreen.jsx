export default function PromptScreen({ prompt, onNext }) {
  return (
    <div className="card">
      <h2>{prompt.text}</h2>

      <div style={{ margin: "30px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>1 — {prompt.min}</span>
          <span>10 — {prompt.max}</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            gap: "6px",
            marginTop: "10px"
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              style={{
                background: "#00BCD4",
                color: "#fff",
                padding: "10px 0",
                borderRadius: "6px",
                fontWeight: "600"
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <p>Discuss out loud.</p>
      <button onClick={onNext}>Guesser, make your guess</button>
    </div>
  );
}
