import "./styles/card.css";
import { useState } from "react";

function Card({ pokemon, onClick }) {
  const [isShiny, setIsShiny] = useState(false);

  const shinyChance = 4096;
  const shinyCalc = Math.floor(Math.random() * shinyChance);
  const attempts = 50;

  // TODO: Needs reworked
  const checkForShiny = () => {
    for (let i = 0; i < attempts; i++) {
      let shinyCheck = shinyCalc % shinyChance === 0;
      if (shinyCheck) {
        console.log("Shiny");
        setIsShiny(!isShiny);
        break;
      }
    }
  };

  if (isShiny) {
    return (
      <div className="card" onClick={() => onClick(pokemon.id)}>
        <div className="card-header">
          <h3>{pokemon.name}</h3>
          <p>{pokemon.types.map((t) => t.type.name).join(" / ")}</p>
        </div>
        <div className="card-body">
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
        </div>
        <div className="card-info">
          <ul>
            <li>{pokemon.moves[0]}</li>
          </ul>
        </div>
        <div className="card-footer"></div>
      </div>
    );
  } else {
    return (
      <div className="card" onClick={() => onClick(pokemon.id)}>
        <div className="card-header">
          <h3>{pokemon.name}</h3>
          <p>{pokemon.types.map((t) => t.type.name).join(" / ")}</p>
        </div>
        <div className="card-body">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="card-info"></div>
        <div className="card-footer"></div>
      </div>
    );
  }
}

export default Card;
