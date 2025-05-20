import "./styles/card.css";

function Card({ pokemon, onClick }) {
  return (
    <div className="card" onClick={() => onClick(pokemon.id)} key={pokemon.id}>
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

export default Card;
