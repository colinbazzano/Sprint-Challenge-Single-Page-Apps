import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log('Hello', response)
      setData(response.data.results);
    })
    .catch(error => {
      console.log('The data was not retruend', error);
    })
  }, []);

  return (
    <section className="character-list">
      <h2>Characters</h2>
      {data.map(char => {
        return(
          <CharacterCard 
          key={char.id}
          name={char.name}
          species={char.species}
          status={char.status}
          />
        );
      })}
    </section>
  );
}
