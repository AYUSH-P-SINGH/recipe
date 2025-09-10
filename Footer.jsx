import { Link } from 'react-router-dom'
import './Footer.css'

function Footer({ isDarkMode }) {
  return (
    <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>🍳 Recipe Collection</h3>
          <p>Discover amazing recipes from around the world. Cook, create, and enjoy delicious meals with our curated collection of recipes.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/?cuisine=Italian">Italian</Link></li>
            <li><Link to="/?cuisine=Asian">Asian</Link></li>
            <li><Link to="/?cuisine=Mexican">Mexican</Link></li>
            <li><Link to="/?cuisine=Mediterranean">Mediterranean</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">📺</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Recipe Collection. All rights reserved. | Made with ❤️ for food lovers</p>
        <p className="api-credit">Powered by <a href="https://dummyjson.com/" target="_blank" rel="noopener noreferrer">DummyJSON API</a></p>
      </div>
    </footer>
  )
}

export default Footer