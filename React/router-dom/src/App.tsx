import './App.css';
import { Outlet } from 'react-router-dom';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Rodape from './components/Rodape/Rodape';
import stylesApp from './App.module.css'

function App() {
  

  return (
    <div className={stylesApp.main}>
      <Cabecalho/>
      <Rodape/>
    </div>    
  )
}

export default App
