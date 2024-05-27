import { useCharacter } from '../hooks/useCharacter.js'


export function Character() {
    const randomCharacter = Math.floor(Math.random() * 826);
    const character = useCharacter({ characterNumber: randomCharacter });
  
    return (
      <li>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </li>
    )
}