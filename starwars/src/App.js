import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterList from './components/characterList'
import axios from 'axios'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  let [characters, setCharacters] = useState(null)


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => res.data.results)
      .then((val) => {
        setCharacters(characters = val)
      })
      .then(() => {

      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList characters={characters}></CharacterList>
    </div>
  );
}

export default App;
