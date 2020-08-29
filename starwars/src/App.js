import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js'

const App = () => {
const [ people, setPeople ] = useState('');

useEffect(() => {
  axios
    .get('https://swapi.dev/api/people')
    .then((response) => {
      // console.log('Response', response.data)
      setPeople(response.data.results)
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
      <Character people={people}/>
    </div>
  );
}

export default App;
