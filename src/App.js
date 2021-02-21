import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/globalStyles';
import PokemonCard from './components/PokemonCard';
import Search from './components/Search';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [pokemon, setPokemon] = useState([]);

  const searchPokemon = async (value) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
    setPokemon(data);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchPokemon={searchPokemon}
        />
        <PokemonCard
          pokemon={pokemon}
          searchValue={searchValue}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
