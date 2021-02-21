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
  width: 80%;
  padding: 0.7rem 2rem;
  margin: 1rem;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.5);

  &::placeholder {
    text-align: center;
  }
`

const StyledButton = styled.button `
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
          placeholder="Search for Pokemon"
        />
        <StyledButton onClick={(e) => props.searchPokemon(props.searchValue)}>Search</StyledButton>
      </StyledForm>
    </div>
  )
}