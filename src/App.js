import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './theme/GlobalStyles';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import Search from './components/Search';

const ContentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100vw;
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

  const fetchRandom = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/143`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
    setPokemon(data);
  }

  useEffect(() => {
    fetchRandom();
  }, [])

  return (
    <>
      <ContentWrapper>
        <GlobalStyles />
        <Header />
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
