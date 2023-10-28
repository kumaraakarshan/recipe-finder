import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // Load favorite recipes from local storage and display them.

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      <ul>
        {favoriteRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
