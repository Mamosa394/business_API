import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Documentation from './pages/Documentation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Documentation />

    </>
  )
}

export default App
