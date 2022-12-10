import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contador from './components/Contador'
import Clima from './components/Clima'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" id="pricipal">
      <h1>Katherine Adam</h1>
      <Contador/>
      <Clima/>
    </div>
        

  )
}

export default App
