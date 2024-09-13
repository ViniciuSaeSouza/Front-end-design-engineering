import { useState } from "react"

type PetProps = {
    nome: string;
    idade: number
}


export default function TesteState1(){
    
    const [aluno, setAluno] = useState<string>('João')
    const [pets, setPets] = useState ([
        {nome:'Spark', idade: 10},
        {nome:'Nina', idade: 9},
        {nome:'Suzy', idade: 15},

    ])
    const [pet, setPet] = useState<PetProps>({nome: 'Spark', idade:15})

    return (
        <div>
            <h2>Teste de Estado 1</h2>
            <p>O nome do aluno é {aluno}</p>
            <button onClick={()=>setAluno('Maria')}>Mudar</button>
        </div>
    )
}