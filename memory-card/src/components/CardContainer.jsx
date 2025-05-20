import { useState } from "react";
import Card from "./Card";
import PokemonFetcher from "./PokemonFetcher";
import "./styles/cardContainer.css";

function CardContainer({ onCardClick }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cardsToFetch = 12; // Maybe move this to a prop, passed from Card Container, let user choose amount of cards to draw?

  async function getCards() {
    for (let i = 0; i < cardsToFetch; i++) {
      const data = await PokemonFetcher(cardsToFetch);
      if (data) {
        setPokemonList((pokemonList) => [...pokemonList, data]);
      }
    }
    setIsLoading(!isLoading);
  }

  function selectPokemon(id) {
    // Calls to <App />
    onCardClick(id, selectedPokemon);
    setSelectedPokemon((selectedPokemon) => {
      if (selectedPokemon.includes(id)) {
        setSelectedPokemon([]);
      }

      shuffleCards(pokemonList);
      return [...selectedPokemon, id];
    });
  }

  function shuffleCards(pokemonList) {
    for (let i = pokemonList.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [pokemonList[i], pokemonList[random]] = [
        pokemonList[random],
        pokemonList[i],
      ];
      setPokemonList((prev) => [...prev], pokemonList);
    }
  }

  if (!isLoading) {
    return (
      <div className="card-container">
        <button id="get-cards" onClick={getCards}>
          Get Cards
        </button>
      </div>
    );
  } else {
    return (
      <div className="card-container">
        {pokemonList.map((pokemon, id) => (
          <Card key={id} pokemon={pokemon} onClick={() => selectPokemon(pokemon.id)} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
