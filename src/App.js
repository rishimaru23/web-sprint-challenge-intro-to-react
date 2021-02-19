import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character';

const h1 = styled.h1`
font-family: Arial, sans-serif;
color: blue;
`

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people/')
    .then((response) => {
      setCharacters(response.data.results);
    })
.catch ((err) => {
  console.log(err);
})
  },[])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {characters.map(char => {
        return <Character key= {char.name} character = {char}/>
      })}
    </div>
  );
}

export default App;