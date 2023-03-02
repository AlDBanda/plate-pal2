import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SearchResults(props) {
  const { query, diet } = props;
  const [results, setResults] = useState([]);

  useEffect(() => {
    const appId = 'eb247cee';
    const appKey = '236d3a5b19f13dc0306541d1fbbaad05';
    const url = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${appId}&app_key=${appKey}&health=${encodeURIComponent(diet)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setResults(data.hits);
      })
      .catch(error => {
        console.error(error);
      });
  }, [query, diet]);

  return (
    <div>
      <h2>Search results for "{query}" ({results.length} results):</h2>
      <ul>
        {results.map(result => (
          <li key={result.recipe.uri}>
            <Link to={`/recipe/${encodeURIComponent(result.recipe.uri)}`}>
              <img src={result.recipe.image} alt={result.recipe.label} />
              <p>{result.recipe.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
