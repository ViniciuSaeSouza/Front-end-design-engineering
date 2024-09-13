import { useState } from 'react'
import './App.css'
import  TesteState1  from './Components/TesteState1/TesteState1'
import TesteState2 from './Components/TesteState2/TesteState2'
import TesteState3 from './Components/TesteState3/TesteState3'
import TesteState4 from './Components/TesteState4/TesteState4'
import TesteState5 from './Components/TesteState5/TesteState5'


const [count, setCount] = useState

function App() {

  return (
    <>
      <TesteState1/>  
      <TesteState2/>
      <TesteState3/>
      <TesteState4/>
      <TesteState5/>
    </>
  )
}

export default App
