import React, { useEffect, useState } from 'react';

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
      const res = await fetch(url);
      const data = await res.json();

      console.log(data)
      setPokemon(data);
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    fetchPokemon();
  }, [])
  
  // Type is in an array of objects, we can access it by type.type.name
  const poke_types = pokemon.length !== 0 ? pokemon.types.map((type) => type.type.name) : null;
  // If type exists in main_types, add it
  // const type = main_types.find(type => poke_types.indexOf(type) > -1);

  const poke_abilities = pokemon.length !== 0 ? pokemon.abilities.map((ability) => {
    return <p>{ability.ability.name}</p>
  }) : null;

  const poke_stats = pokemon.length !== 0 ? pokemon.stats.map((stat) => {
    return <p>{stat.stat.name}</p>
  }) : null;

  return (
    <div>
    {pokemon &&
      <>
        <div>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="Pokemon" />
        </div>
        <div>
          <h1>{pokemon.name}</h1>
          <h1>{pokemon.height}</h1>
          <h1>{pokemon.weight}</h1>
          <h1>{poke_types}</h1>
          <h1>{poke_abilities}</h1>
          <h1>{poke_stats}</h1>
        </div>
        </>
      }
    </div>
  )
}

export default PokemonCard;