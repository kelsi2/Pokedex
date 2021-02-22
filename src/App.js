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
  margin: 0 auto;
  width: 100vw;
  height: auto;
`;

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [data, setData] = useState([])

  const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1200`;
    const res = await fetch(url);
    const data = await res.json();

    setData(data.results);
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  const searchPokemon = async (value) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
    setPokemon(data);
    setImageIndex(0)
  }

  return (
      <ContentWrapper>
        <GlobalStyles />
        <Header />
        <Search
          data={data}
          setImageIndex={setImageIndex}
          inputValue={inputValue}
          setInputValue={setInputValue}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchPokemon={searchPokemon}
        />
        <PokemonCard
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          pokemon={pokemon}
          searchValue={searchValue}
        />
      </ContentWrapper>
  );
}

export default App;
