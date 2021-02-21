import React from 'react';
import styled from '@emotion/styled';

const StyledForm = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`

const StyledInput = styled.input`
  border-radius: 50px;
  width: 80%;
  padding: 0.7rem 2rem;
  margin: 1rem;
  border: none;

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
  return (
    <div>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <StyledInput 
          onChange={(e) => props.setSearchValue(e.target.value)}
          placeholder="Enter pokemon name..."
          autoFocus
        />
        <StyledButton onClick={(e) => props.searchPokemon(props.searchValue)}>Search</StyledButton>
      </StyledForm>
    </div>
  )
}