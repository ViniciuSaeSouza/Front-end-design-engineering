import { useState } from "react"

export default function TesteState2(){


    const [count, setCount] = useState<Number>(0)

    const aumentar = () =>{
        setCount(count + 1)
        
    }

    return(
        <div>
            <h2>Teste de Estadp 2</h2>
            <p>O valor de Count é: {count}</p>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )

}