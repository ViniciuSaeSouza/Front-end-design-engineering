import { useState } from 'react'
import './App.css'
import Aviao from './Components/Aviao'

function App() {

  const [altura, setAltura] = useState(0)
  const [filho, setFilho] = useState<boolean>(false)

  function subir(){ setAltura(altura + 100) }

  return (
    <>
      <h1>React - Hooks - use Effect</h1>
      <button onClick={()=>setFilho(!filho)}>{filho ? "Pousar" : "Decolar"}</button>
      {filho ? <Aviao altura={altura} subir={subir}/> : ''}
    </>
  )
}

export default App
