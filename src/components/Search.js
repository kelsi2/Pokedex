import React from 'react';

export default function Search(props) {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          onChange={(e) => props.setSearchValue(e.target.value)}
          placeholder="Search for Pokemon"
        />
        <button onClick={(e) => props.searchPokemon(props.searchValue)}>Search</button>
      </form>
    </div>
  )
}