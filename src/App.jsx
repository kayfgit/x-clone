import './index.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Frontpage from './pages/Frontpage.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
