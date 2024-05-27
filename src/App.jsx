import './App.css'
import { Character } from './components/Character.jsx'

// TODO
// Mostrar listado y detalle de cada personaje
// Paginar el listado de personajes de 5 en 5
// Crear un buscador para encontrar personajes por nombre (filtrar por nombre)
// Al seleccionar un personaje, mostrar su detalle

function App() {
  return (
    <main>
      <h1>Personajes de Rick y Morty</h1>
      <ul>
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
      </ul>
    </main>
  )
}

export default App
