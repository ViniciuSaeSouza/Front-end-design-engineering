import { useEffect } from "react"

type ValorProps = {altura: number, subir: () => void}

export default function Aviao({altura, subir}:ValorProps){
  useEffect(()=>{console.log('O avião decolou');}, [])

  useEffect(() => {console.log('O avião está ligado!!!');},[altura])
  
  useEffect(() => {console.log(`O avião está em ${altura} pés`);},[altura])

  useEffect(() => {return ()=> console.log('O avião foi pousado!');},[])
  return(
    
    <div>
      <h2>Avião</h2>
      <p>Altura: {altura}</p>
      <button onClick={subir}>Subir 🔼</button>
    </div>
  
  )
}