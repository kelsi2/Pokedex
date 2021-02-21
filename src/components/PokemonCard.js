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
  display: inline-block;
  width: 300px;
  padding: 1em;
  border-radius: 15px;  
  margin: 10px;
  text-align: left;
  margin-top: 1.5em;
`;

const ImgContainer = styled.div `
  text-align: center;
`;

const StyledImg = styled.img `
  max-height: 150px;
  margin: auto;
  display: inline-block;
`;

const StyledName = styled.h3 `
  text-align: center;
  font-size: 1.5em;    
  font-weight: 700;
  letter-spacing: 0.02em;
`

const NumberWrapper = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`

const StyledNumber = styled.span `
  background-color: rgba(0,0,0,0.1);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 1rem;
`

const Stats = styled.div `
  margin: 1em auto;
  padding: 0;
  width: 70%;
  font-size: 80%;
`

const StyledInfo = styled.h3 `
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 300;
`

const AbilitiesWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 80%;
`

const StyledAbilities = styled.div `
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.span `
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  width: fit-content;
`

const StyledSpan = styled.span `
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0.1rem;
  width: fit-content;
`

const PokemonCard = (props) => {
  const name = props.pokemon.length !== 0 && props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1);

  const poke_types = props.pokemon.length !== 0 && props.pokemon.types.map((type, index) => {
    return <span key={index}>{type.type.name}</span>
  })

  const poke_abilities = props.pokemon.length !== 0 && props.pokemon.abilities.map((ability, index) => {
    return <span key={index}>{ability.ability.name}</span>
  })

  const poke_stats = props.pokemon.length !== 0 && props.pokemon.stats.map((stat, index) => {
    return <span key={index}>{stat.stat.name}</span>
  })

  const poke_stat_values = props.pokemon.length !== 0 && props.pokemon.stats.map((stat, index) => {
    return <span key={index}>{stat.base_stat}</span>
  })

  return (
    <>
    {props.pokemon &&
      <StyledCard key={props.pokemon.id} type={poke_types[0]}>
        <ImgContainer>
          <StyledImg src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`} alt={props.pokemon.name} />
        </ImgContainer>
        <StyledName>{name}</StyledName>
        <NumberWrapper>
          <StyledLabel>Height: </StyledLabel><StyledNumber>{props.pokemon.height}</StyledNumber>
          <StyledLabel>Weight: </StyledLabel><StyledNumber>{props.pokemon.weight}</StyledNumber>
        </NumberWrapper>
        <Stats>
          <StyledInfo><StyledLabel>{poke_stats} </StyledLabel><StyledSpan>{poke_stat_values}</StyledSpan></StyledInfo>
        </Stats>
        <AbilitiesWrapper>
          <StyledAbilities>
            <StyledLabel>Types: </StyledLabel><StyledSpan>{poke_types}</StyledSpan>
          </StyledAbilities>
          <StyledAbilities>
            <StyledLabel>Abilities: </StyledLabel><StyledSpan>{poke_abilities}</StyledSpan>
          </StyledAbilities>
        </AbilitiesWrapper>
      </StyledCard>
      }
      </>
  )
}

export default PokemonCard;