import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  // Theme state management
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Theme toggle functionality
  const handleThemeToggle = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    
    document.body.className = newMode ? 'dark' : 'light'
  }

  
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        {/* Navigation bar */}
        <Navbar 
          onThemeToggle={handleThemeToggle} 
          isDarkMode={isDarkMode} 
        />
        
        {/* Main content routes */}
        <Routes>
          <Route 
            path="/" 
            element={<Home isDarkMode={isDarkMode} />} 
          />
          <Route 
            path="/about" 
            element={<About isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />} 
          />
          <Route 
            path="/contact" 
            element={<Contact isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />} 
          />
        </Routes>
        
        {/* Footer */}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  )
}

export default App