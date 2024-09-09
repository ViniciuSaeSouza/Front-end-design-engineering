import { useState } from "react"
export default function TesteState(){

  const [aluno, setAluno] = useState('João')
  return (
    
    <div>
      <h2>Teste State 1</h2>
      <p>Ele controla a o estado dos componentes que tem a determinada informação</p>
      <p>Nome do aluno: {aluno}</p>
      <button onClick={() => {setAluno("Mario")}}>Mudar</button>
    </div>
  )
}