import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const APP_ID = '79062b0b';
  const APP_KEY = 'a222d6e40e1cb036fc3dd604062260b7';

  const handleSearch = async () => {
    try {
      const encodedQuery = encodeURIComponent(query); // Encode the query
      const response = await axios.get(
        `https://api.edamam.com/search?q=${encodedQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.recipe.label}>
            {recipe.recipe.label}
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
