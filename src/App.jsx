import { useState } from "react";
import { prompts } from "./prompts";
import Lobby from "./components/Lobby";
import RoleReveal from "./components/RoleReveal";
import PromptScreen from "./components/PromptScreen";
import GuesserScreen from "./components/GuesserScreen";
import Results from "./components/Results";

export default function App() {
  const [screen, setScreen] = useState("lobby");
  const [players, setPlayers] = useState(4);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const [roundData, setRoundData] = useState(null);
  const [guess, setGuess] = useState(null);

  const startGame = (count) => {
    const prompt = prompts[Math.floor(Math.random() * prompts.length)];
    const number = Math.floor(Math.random() * 10) + 1;

    const roles = Array(count).fill("Teammate");
    const guesserIndex = Math.floor(Math.random() * count);
    let saboteurIndex;
    do {
      saboteurIndex = Math.floor(Math.random() * count);
    } while (saboteurIndex === guesserIndex);

    roles[guesserIndex] = "Guesser";
    roles[saboteurIndex] = "Saboteur";

    setRoundData({ prompt, number, roles });
    setPlayers(count);
    setCurrentPlayer(0);
    setScreen("roles");
  };

  if (screen === "lobby") return <Lobby onStart={startGame} />;

  if (screen === "roles")
    return (
      <RoleReveal
        player={currentPlayer}
        role={roundData.roles[currentPlayer]}
        number={roundData.number}
        total={players}
        onNext={() => {
          if (currentPlayer + 1 === players) {
            setScreen("prompt");
          } else {
            setCurrentPlayer(currentPlayer + 1);
          }
        }}
      />
    );

  if (screen === "prompt")
    return <PromptScreen prompt={roundData.prompt} onNext={() => setScreen("guess")} />;

  if (screen === "guess")
    return (
      <GuesserScreen
        prompt={roundData.prompt}
        onGuess={(g) => {
          setGuess(g);
          setScreen("results");
        }}
      />
    );

  return (
    <Results
      guess={guess}
      actual={roundData.number}
      roles={roundData.roles}
    />
  );
}
