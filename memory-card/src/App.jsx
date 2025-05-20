import "./App.css";
import CardContainer from "./components/CardContainer";
import Score from "./components/Score";

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>Pokémon Memory Card Game</h1>
        <Score />
      </header>
      <main>
        <CardContainer
        />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
