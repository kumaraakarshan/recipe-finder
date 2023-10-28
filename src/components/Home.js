import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const APP_ID = '79062b0b';
  const APP_KEY = 'a222d6e40e1cb036fc3dd604062260b7';

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter ingredients or dish name"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-3" key={recipe.recipe.label}>
            <Link to={`/recipe/${recipe.recipe.uri.split('#')[1].replace('recipe_', '')}`}>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <p>{recipe.recipe.label}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
