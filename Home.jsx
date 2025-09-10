import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import Pagination from '../components/Pagination'
import './Home.css'

function Home({ isDarkMode }) {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  const cardsPerPage = 9 
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/recipes?limit=50&skip=0')
        
        if (!response.ok) {
          throw new Error('Failed to fetch recipes')
        }
        
        const data = await response.json()
        setRecipes(data.recipes)
        setFilteredRecipes(data.recipes)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching recipes:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredRecipes(recipes)
      setCurrentPage(1)
      return
    }

    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      recipe.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    
    setFilteredRecipes(filtered)
    setCurrentPage(1)
  }
  const handleFilter = (filters) => {
    let filtered = [...recipes]

    if (filters.cuisine) {
      filtered = filtered.filter(recipe => recipe.cuisine === filters.cuisine)
    }

    if (filters.difficulty) {
      filtered = filtered.filter(recipe => recipe.difficulty === filters.difficulty)
    }

    if (filters.mealType) {
      filtered = filtered.filter(recipe => 
        recipe.mealType.includes(filters.mealType)
      )
    }

    if (filters.maxPrepTime) {
      filtered = filtered.filter(recipe => 
        recipe.prepTimeMinutes <= parseInt(filters.maxPrepTime)
      )
    }

    if (filters.maxCookTime) {
      filtered = filtered.filter(recipe => 
        recipe.cookTimeMinutes <= parseInt(filters.maxCookTime)
      )
    }

    if (filters.minRating) {
      filtered = filtered.filter(recipe => 
        recipe.rating >= parseFloat(filters.minRating)
      )
    }

    setFilteredRecipes(filtered)
    setCurrentPage(1)
  }
  const totalPages = Math.ceil(filteredRecipes.length / cardsPerPage)
  const startIndex = (currentPage - 1) * cardsPerPage
  const endIndex = startIndex + cardsPerPage
  const currentRecipes = filteredRecipes.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  if (loading) {
    return (
      <div className={`home-page ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading delicious recipes...</p>
        </div>
      </div>
    )
  }
  if (error) {
    return (
      <div className={`home-page ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="error">
          <p>❌ Error: {error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`home-page ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="home-header">
        <h1>🍳 Recipe Collection</h1>
        <p>Discover {filteredRecipes.length} amazing recipes from around the world</p>
        {filteredRecipes.length > 0 && (
          <div className="page-info">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredRecipes.length)} of {filteredRecipes.length} recipes
            <span className="page-indicator">Page {currentPage} of {totalPages}</span>
          </div>
        )}
      </header>
      
      <main className="recipes-container">
        {currentRecipes.length > 0 ? (
          currentRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isDarkMode={isDarkMode} />
          ))
        ) : (
          <div className="no-results">
            <h3>No recipes found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>
      
      {filteredRecipes.length > cardsPerPage && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isDarkMode={isDarkMode}
        />
      )}
      
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  )
}

export default Home