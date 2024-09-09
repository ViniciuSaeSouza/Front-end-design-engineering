import { useState } from "react"

export default function TesteState3(){
  
  const [nome, setNome] = useState("")
  
  return(
    <div>
      <h2>Teste State 3</h2>
      <p>O nome do usuário é: </p>
      <input type="text" name={nome} onChange={(e) => setNome(e.target.value)} />
    </div>
  )
}