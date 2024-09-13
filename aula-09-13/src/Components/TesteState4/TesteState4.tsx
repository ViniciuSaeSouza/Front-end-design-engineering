import { useState } from "react"
import Filho from "../Filho"

export default function TesteState4(){
    
    const [filho, setFilho] = useState(false)
    
    return(
        <div>
            <h2>Filhe do Estado 4</h2>
            {filho ? <Filho/> : ''}
            <button onClick={() => setFilho(!filho)}>{filho ? "excluir o componente filho" : 'inserir o componente filho'}</button>
        </div>
    )
}