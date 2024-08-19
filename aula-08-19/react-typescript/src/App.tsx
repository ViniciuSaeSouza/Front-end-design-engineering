import Cabecalho from "./components/Cabecalho";
import Cards from "./components/Cards";
import Componente1 from "./components/Componente1"


function App() {
  const titulo:string = 'APP.tsx';
  const slogan:string = 'React é bão demais';

  const subtitulo:string = 'Componente 1 - Dados do Usuário'
  const nomeUsuario:string = "Vinicius Saes Rei Delas"
  const produtoComprado:string = "MacBook"

  const alunos =  [
    {nome: 'Joao', idade: 20},
    {nome: 'Maria', idade: 25},
    {nome: 'Pedro', idade: 30}
  ]

  // const aviso = () => alert('Aviso vindo do Componente Pai!')
  return (
    <>
      <Cabecalho titulo={titulo} slogan={slogan}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </Cabecalho>
      {
        alunos.map((aluno, index)=>(<Cards key={index} nome={aluno.nome} idade={aluno.idade}/>))
      }
      <Componente1 produtoComprado={produtoComprado} nomeUsuario={nomeUsuario} subtitulo={subtitulo}/>
    </>
  )
}

export default App
