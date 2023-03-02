import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Switch } from 'react-router-dom';

import App from './App';
import SearchBar from './components/Searchbar';
import RecipeDetails from './components/Recipedetails';
import SearchResultsPage from './components/Searchresultspage';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
    <SearchBar />
    <Switch>
      <Route path="/search-results/:query" component={SearchResultsPage} />
      <Route path="/recipe/:recipeId" component={RecipeDetails} />
    </Switch>
  </Router>
);
