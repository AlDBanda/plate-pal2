import React from 'react';
import SearchResults from './Searchresults';

function SearchResultsPage(props) {
  const query = props.match.params.query;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 font-Sorts">Search Results for "{query}"</h1>
      <SearchResults query={query} />
    </div>
  );
}

export default SearchResultsPage;

