import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css'; 

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteRecipes');
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      setFavoriteRecipes(parsedFavorites);
    }
  }, []);

  return (
    <div className="favorites">
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
