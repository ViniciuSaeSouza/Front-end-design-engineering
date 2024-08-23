
import Cabecalho from "./components/Cabecalho"

function App() {

  const titulo:string = "Mundo"

  const capitulo:number = 15

  const aviso = () => alert("Neste capítulo aprendemos a passar dados de pai para filho")

  return (
    <>
      <Cabecalho titulo={titulo} capitulo={capitulo} aviso={aviso}/>
    </>
  )
}

export default App
