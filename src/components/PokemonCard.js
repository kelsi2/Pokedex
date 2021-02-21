import React from 'react';

const PokemonCard = (props) => {
  // Type is in an array of objects, we can access it by type.type.name
  const poke_types = props.pokemon.length !== 0 && props.pokemon.types.map((type) => type.type.name)
  // If type exists in main_types, add it
  // const type = main_types.find(type => poke_types.indexOf(type) > -1);

  const poke_abilities = props.pokemon.length !== 0 && props.pokemon.abilities.map((ability) => {
    return <p>{ability.ability.name}</p>
  })

  const poke_stats = props.pokemon.length !== 0 && props.pokemon.stats.map((stat) => {
    return <p>{stat.stat.name}</p>
  })

  return (
    <>
    {props.pokemon &&
      <div>
        <div>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`} alt={props.pokemon.name} />
        </div>
        <div>
          <h1>{props.pokemon.name}</h1>
          <h1>{props.pokemon.height}</h1>
          <h1>{props.pokemon.weight}</h1>
          <h1>{poke_types}</h1>
          <h1>{poke_abilities}</h1>
          <h1>{poke_stats}</h1>
        </div>
        </div>
      }
      </>
  )
}

export default PokemonCard;