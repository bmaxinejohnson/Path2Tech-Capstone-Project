import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Searched.css'; // Import the CSS file

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  let params = useParams();

  const getSearched = async (name) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );
      const data = await response.json();
      if (data.results) {
        setSearchedRecipes(data.results);
      } else {
        setSearchedRecipes([]);
      }
    } catch (err) {
      setError('Failed to fetch recipes');
      setSearchedRecipes([]);
    }
  };

  const getRecipeDetails = async (id) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setSelectedRecipe(data);
    } catch (err) {
      setError('Failed to fetch recipe details');
    }
  };

  const handleRecipeClick = (id) => {
    getRecipeDetails(id);
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="container"> {/* Apply the container class */}
      <h1>Search Results for "{params.search}"</h1>
      {error && <p>{error}</p>}
      {selectedRecipe ? (
        <div className="recipe-details">
          <button onClick={handleBackClick}>Back to Search Results</button>
          <h2>{selectedRecipe.title}</h2>
          <img src={selectedRecipe.image} alt={selectedRecipe.title} />
          <p>{selectedRecipe.instructions}</p>
          <h3>Ingredients:</h3>
          <ul>
            {selectedRecipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          {searchedRecipes.length === 0 && <p>No recipes found.</p>}
          <div className="search-results">
            {searchedRecipes.map((item) => (
              <div key={item.id} className="recipe-card" onClick={() => handleRecipeClick(item.id)}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Searched;
