import { Outlet } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'


function App() {
  return (
    <>
      <Menu></Menu>
      <Outlet/>
    </>
  )
}

export default App
