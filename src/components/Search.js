import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const StyledWrapper = styled.div `
  width: 100%;
`

const StyledForm = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`

const StyledAutocomplete = styled(Autocomplete)`
  border-radius: 50px;
  padding: 0.7rem 2rem;
  border: none;
  width: 100%;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    outline: none;
  }
`

const StyledButton = styled.button `
  cursor: pointer;
  width: 70%;
  padding: 0.7rem 2rem;
  border: none;
  background-color: #EE5350;
  color: #fff;
  border-radius: 5px;
  font-size: 1.2rem;
`

export default function Search(props) {
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

  return (
    <StyledWrapper>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <StyledAutocomplete
        freeSolo
        disableClearable
        options={data.map((option) => option.name)}
        value={props.searchValue}
        onChange={(e, newValue) => props.setSearchValue(newValue)}
        onInputChange={(e, newValue) => {props.setSearchValue(newValue)}}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Enter pokemon name..."
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
          )}
      />
        <StyledButton onClick={(e) => props.searchPokemon(props.searchValue)}>Search</StyledButton>
      </StyledForm>
    </StyledWrapper>
  )
}