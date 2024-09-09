import { useState } from "react"

export default function TesteState2(){

  const [count, setCount] = useState(0);

  return(
    <div>
      <h2>Teste State 2</h2>
      <p>Valor do count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Clica clica</button>
    </div>
  )
}