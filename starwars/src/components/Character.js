import React from 'react';
import styled from 'styled-components';





const MainCard = styled.div`
  margin: 2rem;
  border: 1px white solid;
  padding: 1rem;
  background-color: white;
`


const Character = props => {
    const { character } = props;
    console.log('Characters', character)
    
    return (
        <MainCard>
            <img src={character.image}></img>
           <h3>Name:{character.name}</h3>
        </MainCard>
    )
    }
// Write your Character component here

export default Character;