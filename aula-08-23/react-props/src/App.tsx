
import Alunos from "./components/Alunos"
import Cabecalho from "./components/Cabecalho"
import Componente1 from "./components/Componente1"
import Professores from "./components/Professores"

function App() {

  const titulo:string = "Mundo"

  const capitulo:number = 15

  const aviso = () => alert("Neste capítulo aprendemos a passar dados de pai para filho")

  const subtitulo:string = 'Lista de alunos'

  return (
    <>
      <Cabecalho titulo={titulo} capitulo={capitulo} aviso={aviso}/>
      <Alunos subtitulo={subtitulo}>
        <ul>
          <li>Saes</li>
          <li>Larissa</li>
          <li>OtoVinicius</li>
        </ul>
      </Alunos>
      <Professores/>
      <Componente1/>
    </>
  )
}

export default App
