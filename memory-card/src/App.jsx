import { useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Score from "./components/Score";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  const handleCardClick = (id, selected) => {
    if (score === 12) {
      setHasWon(true);
      return;
    }
    if (selected.includes(id)) {
      setScore(0);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
      }
    }
  };

  const resetGame = () => {
    setScore(0);
    setHighScore(0);
    setHasWon(false);
  };

  return (
    <div className="wrapper">
      <header>
        <h1>Pokémon Memory Card Game</h1>
        <p>Click on every Pokémon without choosing the same one twice!</p>

        <Score score={score} highScore={highScore} />
      </header>
      <main>
        {hasWon ? (
          <div className="container">
            <h1>You've won!</h1>
            <button onClick={resetGame}>Reset?</button>
          </div>
        ) : (
          <CardContainer onCardClick={handleCardClick} />
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
