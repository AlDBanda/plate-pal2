import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  function handleSearch(e) {
    e.preventDefault();
    history.push(`/search-results/${encodeURIComponent(searchTerm)}`);
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch}>
        <div className="flex items-center border-b border-black py-2">
          <input
            className="appearance-none bg-white border-none w-full text-black font-bold mr-3 py-1 px-2 leading-tight focus:outline-none font-Sorts"
            type="text"
            placeholder="Search recipes/dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded font-Sorts"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex mt-4 justify-center">
        <button className="mx-4 px-4 py-2 bg-gray-200 text-black rounded-lg font-Sorts">
          Dairy Free
        </button>
        <button className="mx-4 px-4 py-2 bg-gray-200 text-black rounded-lg font-Sorts">
          Vegetarian
        </button>
        <button className="mx-4 px-4 py-2 bg-gray-200 text-black rounded-lg font-Sorts">
          Diabetes Friendly
        </button>
        <button className="mx-4 px-4 py-2 bg-gray-200 text-black rounded-lg font-Sorts">
          CKD Friendly
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
