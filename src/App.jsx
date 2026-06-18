import { useState } from 'react'
import Inicio from './pages/Inicio.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inicio />
    </>
  )
}

export default App
