// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    margin: 4rem;
    border: 1px white solid;
    width: 200px;
    background-color: papayawhip;
    color: rebeccapurple;
`;

const CharacterComponent = ({ character }) => { 
    return (
        <Card>
            <h1>{character.name}</h1>
            <p>{character.species}</p>
            <p>{character.status}</p>
        </Card>
    )
}

export default CharacterComponent;
