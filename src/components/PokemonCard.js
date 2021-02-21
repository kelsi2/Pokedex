import React from 'react';
import styled from '@emotion/styled';

const StyledCard = styled.div`
  background-color: ${({type}) => {
    if (type) {
      if (type.props.children === 'fire') return '#AC1E26';
      if (type.props.children === 'grass') return '#157B3D';
      if (type.props.children === 'electric') return '#E2E42B';
      if (type.props.children === 'water') return '#1552E2';
      if (type.props.children === 'ground') return '#A9702C';
      if (type.props.children === 'rock') return '#48180C';
      if (type.props.children === 'fairy') return '#981944';
      if (type.props.children === 'poison') return '#5E2E88';
      if (type.props.children === 'bug') return '#1D4B28';
      if (type.props.children === 'dragon') return '#458A97';
      if (type.props.children === 'psychic') return '#A42A69';
      if (type.props.children === 'flying') return '#48677E';
      if (type.props.children === 'fighting') return '#993F26';
      if (type.props.children === 'normal') return '#74525B';
      if (type.props.children === 'dark') return '#040706';
      if (type.props.children === 'ghost') return '#323569';
      if (type.props.children === 'ice') return '#86D1F6';
      if (type.props.children === 'steel') return '#5F746C';
    }
  }};
  color: ${({type}) => {
    if (type) {
      if (type.props.children === 'fire') return '#fff';
      if (type.props.children === 'grass') return '#fff';
      if (type.props.children === 'electric') return '#000';
      if (type.props.children === 'water') return '#fff';
      if (type.props.children === 'ground') return '#fff';
      if (type.props.children === 'rock') return '#fff';
      if (type.props.children === 'fairy') return '#fff';
      if (type.props.children === 'poison') return '#fff';
      if (type.props.children === 'bug') return '#fff';
      if (type.props.children === 'dragon') return '#000';
      if (type.props.children === 'psychic') return '#fff';
      if (type.props.children === 'flying') return '#fff';
      if (type.props.children === 'fighting') return '#fff';
      if (type.props.children === 'normal') return '#fff';
      if (type.props.children === 'dark') return '#fff';
      if (type.props.children === 'ghost') return '#fff';
      if (type.props.children === 'ice') return '#000';
      if (type.props.children === 'steel') return '#fff';
    }
  }};
  border: 10px solid #FDBD00;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100,100,100,0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
`;

const StyledImgContainer = styled.div `
  max-width: 90%;
  margin-top: 20px;
`;

const StyledImg = styled.img `
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
`;

const InfoContainer = styled.div `
  margin-top: 20px;
`

const StyledNumber = styled.span `
  background-color: rgba(0,0,0,0.1);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8em;
`

const StyledInfo = styled.h3 `
  display: flex;
  margin: 15px 0 7px;
  letter-spacing: 1px;
`

const PokemonCard = (props) => {
  const name = props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1);

  const poke_types = props.pokemon.length !== 0 && props.pokemon.types.map((type) => {
    return <p>{type.type.name}</p>
  })

  const poke_abilities = props.pokemon.length !== 0 && props.pokemon.abilities.map((ability) => {
    return <p>{ability.ability.name}</p>
  })

  const poke_stats = props.pokemon.length !== 0 && props.pokemon.stats.map((stat) => {
    return <p>{stat.stat.name}</p>
  })

  return (
    <>
    {props.pokemon &&
      <StyledCard type={poke_types[0]}>
        <StyledImgContainer>
          <StyledImg src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`} alt={props.pokemon.name} />
        </StyledImgContainer>
        <InfoContainer>
          <StyledInfo>{name}</StyledInfo>
          <StyledNumber>{props.pokemon.height}</StyledNumber>
          <StyledNumber>{props.pokemon.weight}</StyledNumber>
          <StyledInfo><span>{poke_types}</span></StyledInfo>
          <StyledInfo><span>{poke_abilities}</span></StyledInfo>
          <StyledInfo><span>{poke_stats}</span></StyledInfo>
        </InfoContainer>
      </StyledCard>
      }
      </>
  )
}

export default PokemonCard;