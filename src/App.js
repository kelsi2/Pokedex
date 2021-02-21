import React, { useState } from 'react';
import styled from '@emotion/styled';
import PokemonCard from './components/PokemonCard';
import Search from './components/Search';

const ContentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
`;

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
      <ContentWrapper>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchPokemon={searchPokemon}
        />
        <PokemonCard
          pokemon={pokemon}
          searchValue={searchValue}
        />
      </ContentWrapper>
    </>
  );
}

export default App;
