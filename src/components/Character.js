// Write your Character component here
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Container = styled.div`
background-color: black;
color: white;
width: 55%;
margin: 2% auto;
padding: 2%;
border-radius: 5px;
font-family: Arial, sans-serif;
border: solid 4px black;
}
`

const h2 = styled.h2`
font-size: 2rem,
font-family: Arial, sans-serif;
padding-bottom: 2%2rem;
width: 60%;
margin: auto;
`

const Character = props => {
    const {character} = props;

    return (
        <Container>
        <h2>{character.name}</h2>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        <p>Eye Color: {character.eye_color}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
        </Container>
    )
}

export default Character;
