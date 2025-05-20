async function PokemonFetcher(cardsToFetch) {
  const base_url = `https://pokeapi.co/api/v2/pokemon`;
  // const limit = "?limit=1";
  let count = 1025; // Hard coded value, max number of Pokemon currently

  let randomPokemonId = Math.floor(Math.random() * count);
  let cardBounds = count - cardsToFetch;
  if (cardBounds < 0) {
    randomPokemonId = 1;
  }

  let get_pokemon_url = base_url + "/" + randomPokemonId;

  // Get cards
  try {
    const response = await fetch(get_pokemon_url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    // const mapped = mapToTemplate(template, data);

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export default PokemonFetcher;
