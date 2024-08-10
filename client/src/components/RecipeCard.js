import React, { useEffect, useState } from "react";

function RecipeCard() {
  const [recipecard, setRecipeCard] = useState([]);

  useEffect(() => {
    getRecipeCard();
  }, []);

  const getRecipeCard = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`
    );
    const data = await api.json();
    setRecipeCard(data.recipes);
  };

  return (
    <div>
      {recipecard?.slice(0, 1).map((recipe) => ( // Slice to get only the first 3 recipes
        <div key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} style={{ width: "100px", height: "100px" }} /> {/* Display image as thumbnail */}
        
        </div>
      ))}
    </div>
  );
}

export default RecipeCard;
