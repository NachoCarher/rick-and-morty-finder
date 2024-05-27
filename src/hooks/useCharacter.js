/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

function useCharacter({ characterNumber }) {
    const [character, setCharacter] = useState([])
  
    const getCharacter = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${characterNumber}`);
      const data = await response.json();
      return data;
    }
  
    useEffect(() => {
        getCharacter(characterNumber).then(data => setCharacter(data))
    }, [])
  
    return character
}

export { useCharacter }