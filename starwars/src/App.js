import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';
import styled from 'styled-components';


const Body = styled.body`
  background-size: 100px;
`





const App = () => {
const [ characters, setCharacters ] = useState([]);

useEffect(() => {
  axios
    .get('https://rickandmortyapi.com/api/character')
    .then((response) => {
      // console.log('Response', response.data.results)
      setCharacters(response.data.results);
    })
    .catch((error) => {
      console.log('Error', error)
    }
      )

}
, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        {characters.map(character => (
          <Character key={character.id} character={character}/>
        ))}
        
      </div>
  );
}


export default App;
