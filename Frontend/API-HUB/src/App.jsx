import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import Documentation from './pages/Documentation'
import Community from './pages/Community'
import Products from './pages/Products'
import SignIn from './components/SignIn'
import Enterprise from './components/Enterprise' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/signup" element={<SignIn />} />  */}
        <Route path="/products" element={<Products />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/community" element={<Community />} />
        {/* Add a catch-all route for 404 pages */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App