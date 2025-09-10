import './RecipeCard.css'

function RecipeCard({ recipe, isDarkMode }) {
  return (
    <div className={`recipe-card ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.name} />
        <div className="recipe-rating">
          <span className="rating">⭐ {recipe.rating}</span>
          <span className="review-count">({recipe.reviewCount} reviews)</span>
        </div>
      </div>
      
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.name}</h3>
        
        <div className="recipe-meta">
          <div className="meta-item">
            <span className="meta-label">Cuisine:</span>
            <span className="meta-value">{recipe.cuisine}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Difficulty:</span>
            <span className={`meta-value difficulty-${recipe.difficulty.toLowerCase()}`}>
              {recipe.difficulty}
            </span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Prep Time:</span>
            <span className="meta-value">{recipe.prepTimeMinutes} min</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Cook Time:</span>
            <span className="meta-value">{recipe.cookTimeMinutes} min</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Servings:</span>
            <span className="meta-value">{recipe.servings}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Calories:</span>
            <span className="meta-value">{recipe.caloriesPerServing} cal</span>
          </div>
        </div>

        <div className="recipe-tags">
          {recipe.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="recipe-meal-type">
          {recipe.mealType.map((meal, index) => (
            <span key={index} className="meal-type">{meal}</span>
          ))}
        </div>

        <div className="recipe-ingredients">
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.slice(0, 5).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
            {recipe.ingredients.length > 5 && (
              <li className="more-ingredients">+{recipe.ingredients.length - 5} more ingredients</li>
            )}
          </ul>
        </div>

        <div className="recipe-instructions">
          <h4>Instructions:</h4>
          <p>{recipe.instructions[0]}...</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard