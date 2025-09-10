import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar({ onThemeToggle, isDarkMode }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    cuisine: '',
    difficulty: '',
    mealType: '',
    maxPrepTime: '',
    maxCookTime: '',
    minRating: ''
  })

  const navigate = useNavigate()
  const location = useLocation()

  const cuisines = ['All', 'Italian', 'Asian', 'Mexican', 'Mediterranean', 'American', 'Hawaiian', 'Japanese', 'Smoothie']
  const difficulties = ['All', 'Easy', 'Medium', 'Hard']
  const mealTypes = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Appetizer', 'Side Dish', 'Dessert']

  const handleSearch = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
    }
    // The search functionality will be handled by the Home component
    // This is just for navigation
  }

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value }
    setFilters(newFilters)
    // The filter functionality will be handled by the Home component
    // This is just for UI state
  }

  const clearFilters = () => {
    const clearedFilters = {
      cuisine: '',
      difficulty: '',
      mealType: '',
      maxPrepTime: '',
      maxCookTime: '',
      minRating: ''
    }
    setFilters(clearedFilters)
    // The filter functionality will be handled by the Home component
  }

  const clearSearch = () => {
    setSearchTerm('')
    // The search functionality will be handled by the Home component
  }

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>🍳 Recipe Collection</h1>
        </div>

        <div className="navbar-search">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="clear-search"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              <button type="submit" className="search-btn">
                🔍
              </button>
            </div>
          </form>
        </div>

        <div className="navbar-actions">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`filter-btn ${showFilters ? 'active' : ''}`}
          >
            🔧 Filters
          </button>
          
          <button
            onClick={onThemeToggle}
            className="theme-toggle"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="filters-panel">
          <div className="filters-container">
            <div className="filter-group">
              <label>Cuisine:</label>
              <select
                value={filters.cuisine}
                onChange={(e) => handleFilterChange('cuisine', e.target.value)}
                className="filter-select"
              >
                {cuisines.map(cuisine => (
                  <option key={cuisine} value={cuisine === 'All' ? '' : cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Difficulty:</label>
              <select
                value={filters.difficulty}
                onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                className="filter-select"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty === 'All' ? '' : difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Meal Type:</label>
              <select
                value={filters.mealType}
                onChange={(e) => handleFilterChange('mealType', e.target.value)}
                className="filter-select"
              >
                {mealTypes.map(mealType => (
                  <option key={mealType} value={mealType === 'All' ? '' : mealType}>
                    {mealType}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Max Prep Time (min):</label>
              <input
                type="number"
                placeholder="Any"
                value={filters.maxPrepTime}
                onChange={(e) => handleFilterChange('maxPrepTime', e.target.value)}
                className="filter-input"
              />
            </div>

            <div className="filter-group">
              <label>Max Cook Time (min):</label>
              <input
                type="number"
                placeholder="Any"
                value={filters.maxCookTime}
                onChange={(e) => handleFilterChange('maxCookTime', e.target.value)}
                className="filter-input"
              />
            </div>

            <div className="filter-group">
              <label>Min Rating:</label>
              <select
                value={filters.minRating}
                onChange={(e) => handleFilterChange('minRating', e.target.value)}
                className="filter-select"
              >
                <option value="">Any</option>
                <option value="4.5">4.5+ ⭐</option>
                <option value="4.0">4.0+ ⭐</option>
                <option value="3.5">3.5+ ⭐</option>
                <option value="3.0">3.0+ ⭐</option>
              </select>
            </div>

            <button onClick={clearFilters} className="clear-filters-btn">
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar