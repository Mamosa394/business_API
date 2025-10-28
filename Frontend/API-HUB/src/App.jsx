import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Enterprise from './components/Enterprise'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <Enterprise />
    </>
  )
}

export default App
