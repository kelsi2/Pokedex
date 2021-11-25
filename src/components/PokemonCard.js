import React from 'react';
import styled from '@emotion/styled';

const StyledCard = styled.div`
  /* Check card type to determine background color and color (given more time I'd like to find a way to make this cleaner) */
  background-color: ${({type}) => {
    if (type) {
      const propsChild = type.props.children;
      if (propsChild === 'fire') return '#AC1E26';
      if (propsChild === 'grass') return '#157B3D';
      if (propsChild === 'electric') return '#E2E42B';
      if (propsChild === 'water') return '#1552E2';
      if (propsChild === 'ground') return '#A9702C';
      if (propsChild === 'rock') return '#48180C';
      if (propsChild === 'fairy') return '#981944';
      if (propsChild === 'poison') return '#5E2E88';
      if (propsChild === 'bug') return '#1D4B28';
      if (propsChild === 'dragon') return '#458A97';
      if (propsChild === 'psychic') return '#A42A69';
      if (propsChild === 'flying') return '#48677E';
      if (propsChild === 'fighting') return '#993F26';
      if (propsChild === 'normal') return '#74525B';
      if (propsChild === 'dark') return '#040706';
      if (propsChild === 'ghost') return '#323569';
      if (propsChild === 'ice') return '#86D1F6';
      if (propsChild === 'steel') return '#5F746C';
    }
  }};
  color: ${({type}) => {
    if (type) {
      const propsChild = type.props.children;
      // White text
      if (propsChild === 'fire') return '#fff';
      if (propsChild === 'grass') return '#fff';
      if (propsChild === 'water') return '#fff';
      if (propsChild === 'ground') return '#fff';
      if (propsChild === 'rock') return '#fff';
      if (propsChild === 'fairy') return '#fff';
      if (propsChild === 'poison') return '#fff';
      if (propsChild === 'bug') return '#fff';
      if (propsChild === 'psychic') return '#fff';
      if (propsChild === 'flying') return '#fff';
      if (propsChild === 'fighting') return '#fff';
      if (propsChild === 'normal') return '#fff';
      if (propsChild === 'dark') return '#fff';
      if (propsChild === 'ghost') return '#fff';
      if (propsChild === 'steel') return '#fff';
      // Black text
      if (propsChild === 'electric') return '#000';
      if (propsChild === 'dragon') return '#000';
      if (propsChild === 'ice') return '#000';
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.2rem;
`;

const StyledImg = styled.img `
  height: 100%;
  margin: auto;
  display: inline-block;
`;

const StyledArrows = styled.button `
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }
`

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

const PokemonCard = ({pokemon, imageIndex, setImageIndex}) => {
  const images = pokemon.length !== 0 && Object.entries(pokemon.sprites);
  const imageArr = [];

  // Check image url to ensure it isn't null or an object then add it to the array
  pokemon.length !== 0 && images.forEach(image => {
    if (image[1] !== null && typeof image[1] === 'string') {
      imageArr.push(image[1])
    }
  })

  const handleClick = () => {
    const lastIndex = imageArr.length - 1;
    const currentImageIndex = imageIndex;
    const shouldResetIndexRight = currentImageIndex === lastIndex;
    const shouldResetIndexLeft = currentImageIndex === 0;

    if (shouldResetIndexLeft) {
      setImageIndex(lastIndex);
    } else {
      setImageIndex(currentImageIndex - 1)
    }

    if (shouldResetIndexRight) {
      setImageIndex(0);
    } else {
      setImageIndex(currentImageIndex + 1)
    }
  }

  // Capitalize first letter of name
  const name = pokemon.length !== 0 && pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const poke_types = pokemon.length !== 0 && pokemon.types.map((type, index) => {
    return <span key={index}>{type.type.name}</span>
  })

  const poke_abilities = pokemon.length !== 0 && pokemon.abilities.map((ability, index) => {
    return <span key={index}>{ability.ability.name}</span>
  })

  const poke_stats = pokemon.length !== 0 && pokemon.stats.map((stat, index) => {
    return <span key={index}>{stat.stat.name}</span>
  })

  const poke_stat_values = pokemon.length !== 0 && pokemon.stats.map((stat, index) => {
    return <span key={index}>{stat.base_stat}</span>
  })

  return (
    <>
    {pokemon &&
      <StyledCard key={pokemon.id} type={poke_types[0]}>
        <ImgContainer>
          <StyledArrows><i onClick={handleClick} className="fas fa-chevron-left"></i></StyledArrows>
          <StyledImg src={imageArr[imageIndex]} alt={pokemon.name} />
          <StyledArrows><i onClick={handleClick} className="fas fa-chevron-right"></i></StyledArrows>
        </ImgContainer>
        <StyledName>{name}</StyledName>
        <NumberWrapper>
          <StyledLabel>Height: </StyledLabel><StyledNumber>{pokemon.height}</StyledNumber>
          <StyledLabel>Weight: </StyledLabel><StyledNumber>{pokemon.weight}</StyledNumber>
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