import React from 'react';


const Character = props => {
    const { character } = props;
    console.log('Characters', character.name)
    
    return (
        <div>
           <h3>Name:{character.name}</h3>
        </div>
    )
    }
// Write your Character component here

export default Character;