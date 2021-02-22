import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './theme/GlobalStyles';
import Loading from './components/Loading';
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
  // All app state is tracked here.
  // searchValue and inputValue both track search field state, one is for clicking/pressing enter on an autocomplete value, the other for tracking characters typed
  // Pokemon tracks all retrieved data and populates the cards
  // imageIndex tracks the sprites for each card (for some reason index 0 is the back so starting at 2!)
  // Data fetches all pokemon data for autocomplete
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [imageIndex, setImageIndex] = useState(2);
  const [data, setData] = useState([]);

  // Search for user input and fetch, set pokemon and reset image index (otherwise it will break if the index is higher than what exists)
  const searchPokemon = async (value) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
    setPokemon(data);
    setImageIndex(2);
    setSearchValue('');
    setInputValue('');
  }

  // Fetch data for autocomplete
  const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1200`;
    const res = await fetch(url);
    const data = await res.json();

    setData(data.results);
  }

  // I didn't have enough time to finish this! Currently this will load one static card when the app is loaded
  const rand = Math.floor(Math.random() * 600)
  const fetchRandom = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${rand}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
    setPokemon(data);
    setImageIndex(2);
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemon()
    fetchRandom()
  }, [])

  return (
    <ContentWrapper>  
    <GlobalStyles />
        {loading ? (
          <Loading />
        ) : (
        <>
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
        </>
        )
      }
      </ContentWrapper>
  );
}

export default App;
