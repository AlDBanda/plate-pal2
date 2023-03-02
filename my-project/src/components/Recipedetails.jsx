import React, { useEffect, useState } from 'react';

function RecipeDetail(props) {
  const { recipeId } = props.match.params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const appId = 'eb247cee';
    const appKey = '236d3a5b19f13dc0306541d1fbbaad05';
    const url = `https://api.edamam.com/api/recipes/v2/${encodeURIComponent(recipeId)}?type=public&app_id=${appId}&app_key=${appKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setRecipe(data.recipe);
      })
      .catch(error => {
        console.error(error);
      });
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.label}</h1>
      <div className="flex flex-col md:flex-row mb-4">
        <div className="md:w-1/2">
          <img src={recipe.image} alt={recipe.label} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:ml-4">
          <h2 className="text-xl font-bold mb-2">Ingredients</h2>
          <ul className="list-disc pl-4 mb-4">
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-xl font-bold mb-2 font-Sorts">Instructions</h2>
          <p className="mb-4 font-Sorts">{recipe.instructions}</p>
          <h2 className="text-xl font-bold mb-2 font-Sorts">Nutrition</h2>
          <ul className="list-disc pl-4 mb-4 font-Sorts">
            <li>Calories: {recipe.calories}</li>
            <li>Protein: {recipe.totalNutrients.PROCNT.quantity}g</li>
            <li>Carbs: {recipe.totalNutrients.CHOCDF.quantity}g</li>
            <li>Fat: {recipe.totalNutrients.FAT.quantity}g</li>
          </ul>
          <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-Sorts">
            Back to Search Results
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
