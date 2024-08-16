import Componente1 from "./components/Componente1"
import './index.css'
function App() {
  const curso = "JavaScript"
  return (
    <>
      <h1>Primeira aula</h1>
      <p>Esta é a nossa primeira aula.</p>
      <p>O curso é {curso}</p>
      <br />
      <Componente1 />
    </>
  )
}

export default App
