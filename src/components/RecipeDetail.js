import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetail.css'; 

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const APP_ID = '79062b0b';
  const APP_KEY = 'a222d6e40e1cb036fc3dd604062260b7';

  useEffect(() => {
    console.log('Fetching recipe for ID:', id);
    const fetchRecipe = async () => {
      try {
        console.log('Making API request for ID:', id);
        const response = await axios.get(
          `https://api.edamam.com/search?q=${id}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        console.log('API Response:', response.data);
        if (response.data.hits.length > 0) {
          setRecipe(response.data.hits[0].recipe);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <div className="recipe-detail">
      {recipe ? (
        <div>
          <h2>{recipe.label}</h2>
          <img src={recipe.image} alt={recipe.label} />
          <p>Ingredients:</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
          <p>Instructions:</p>
          <ol>
            {recipe.ingredientLines.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecipeDetail;
