import { useState } from "react";

export default function RoleReveal({ player, role, number, onNext }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card">
      {!flipped ? (
        <>
          <h1>Player {player + 1}</h1>
          <button onClick={() => setFlipped(true)}>Reveal Role</button>
        </>
      ) : (
        <>
          <h2>{role}</h2>
          {role !== "Guesser" && <p>Number: {number}</p>}
          <button onClick={onNext}>Next Player</button>
        </>
      )}
    </div>
  );
}
