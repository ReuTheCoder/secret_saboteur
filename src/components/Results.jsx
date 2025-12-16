export default function Results({ guess, actual, roles }) {
  const saboteurIndex = roles.indexOf("Saboteur");
  const guesserIndex = roles.indexOf("Guesser");

  return (
    <div className="card">
      <h1>Results</h1>

      <p>
        <strong>Guesser guessed:</strong> {guess}
      </p>
      <p>
        <strong>Correct number:</strong> {actual}
      </p>

      <hr style={{ margin: "20px 0" }} />

      <p>
        <strong>Guesser:</strong> Player {guesserIndex + 1}
      </p>
      <p>
        <strong>Saboteur:</strong> Player {saboteurIndex + 1}
      </p>

      <p style={{ marginTop: "20px", fontStyle: "italic" }}>
        Reveal roles and argue accordingly.
      </p>
    </div>
  );
}
