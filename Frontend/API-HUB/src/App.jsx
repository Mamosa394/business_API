import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Documentation from './pages/Documentation'
import Community from './pages/Community'
import Products from './pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Products />

    </>
  )
}

export default App
