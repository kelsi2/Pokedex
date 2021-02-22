import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Container = styled.div `
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #C8EEEE, #EBF9E9);
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const spin = keyframes `
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const StyledRing = styled.div `
  display: block;
  width: 80px;
  height: 80px;
  margin-top: 2rem;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`

const Loading = () => {
  return (
    <Container>  
      <h1>Loading...</h1>
      <StyledRing />
    </Container>
  )
}

export default Loading;