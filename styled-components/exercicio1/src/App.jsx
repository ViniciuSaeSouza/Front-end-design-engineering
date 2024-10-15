import './App.css'
import ComponenteTeste1 from './components/ComponenteTeste1'

function App() {

  let paragr = {
    textAlign: 'justify',
    color: 'green',
    textIndent: '50px',
    fontSize: '2em'
  }

  return (
    <>
      <h1>Conteúdo do App.jsx</h1>
      <p style={paragr}>Formas de inserir CSS em um elemento.</p>
      <p className='exemplo'>Aqui um exemplo de className</p>
      <ComponenteTeste1/>
    </>
  )
}

export default App
