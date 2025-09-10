import { useEffect } from 'react'
import './About.css'

function About({ isDarkMode, onThemeToggle }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={`about-page ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="about-hero">
        <h1>About Recipe Collection</h1>
        <p>Your ultimate destination for discovering delicious recipes from around the world</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Recipe Collection, we believe that cooking should be accessible, enjoyable, and inspiring for everyone. 
            Our platform features a curated selection of recipes from various cuisines, difficulty levels, and meal types, 
            designed to help you discover new flavors and techniques in your own kitchen.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Search</h3>
              <p>Find recipes by name, ingredients, or tags with our intelligent search system.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Advanced Filters</h3>
              <p>Filter recipes by cuisine, difficulty, meal type, cooking time, and ratings.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌙</div>
              <h3>Dark Mode</h3>
              <p>Switch between light and dark themes for comfortable viewing.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Enjoy our recipes on any device with our mobile-friendly interface.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Diverse Cuisines</h3>
              <p>Explore recipes from Italian, Asian, Mexican, Mediterranean, and more.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Quality Recipes</h3>
              <p>Every recipe is carefully curated with detailed instructions and ingredients.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Recipe Collection was born from a simple idea: making great recipes accessible to everyone. 
            Whether you're a beginner cook or an experienced chef, our platform provides the tools and resources 
            you need to create amazing meals.
          </p>
          <p>
            We understand that cooking can sometimes feel overwhelming, which is why we've designed our platform 
            to be intuitive and user-friendly. Every feature is designed to help you find the perfect recipe.
          </p>
        </div>

        <div className="about-section">
          <h2>Get Started</h2>
          <p>
            Ready to start your culinary journey? Browse our collection of recipes and use our search and filter tools 
            to find exactly what you're looking for!
          </p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary"
              onClick={() => window.location.href = '/'}
            >
              Browse Recipes
            </button>
            <button 
              className="cta-button secondary"
              onClick={onThemeToggle}
            >
              Toggle Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
