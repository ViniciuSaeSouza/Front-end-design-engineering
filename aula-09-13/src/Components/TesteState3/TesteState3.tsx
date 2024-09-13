import { useState } from "react"

export default function TesteState3(){
    
    const [nome, setNome] = useState<String>('')
    
    return(
        <div>
            <h2>Teste de Estado 3</h2>
            <p>O nome do usuário é: {nome}</p>
            <input type="text" placeholder="Digite o nome do usuário"
                onChange={(e) => setNome(e.target.value)}
            />
        </div>
    )
}