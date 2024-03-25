import React, { useState } from "react";
import { SearchForm, searchMedia } from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import Favorites from "./components/Favorites";

import "./App.css";
import appleLogo from "./Images/apple.png";

const App = () => {
  // Define state variables
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Handle search form submission
  const handleSearchSubmit = async (searchTerm, mediaType) => {
    try {
      // Call the searchMedia function to get search results
      const results = await searchMedia(searchTerm, mediaType);
      // Update search results state
      setSearchResults(results);
    } catch (error) {
      console.error("Error in search:", error);
    }
  };

  // Handle toggling an item as favorite
  const handleToggleFavorite = (item) => {
    if (item.isFavorite) {
      // If the item is already marked as favorite, remove it from favorites list
      setFavorites(favorites.filter((fav) => fav.trackId !== item.trackId));
    } else {
      // If the item is not marked as favorite, add it to favorites list
      setFavorites([...favorites, item]);
    }
  };

  // Handle removing an item from favorites
  const handleRemoveFavorite = (item) => {
    // Filter out the item from favorites list
    setFavorites(favorites.filter((fav) => fav.trackId !== item.trackId));
  };

  return (
    <div className="app-container">
      <div className="apple-logo">
        <img src={appleLogo} alt="Apple Logo" />
      </div>
      <h1>iTunes Store Search</h1>
      <div className="search-controls">
        {/* Render the SearchForm component */}
        <SearchForm onSearchSubmit={handleSearchSubmit} />
      </div>
      <div className="content-container">
        <div className="box">
          <h2 className="Box-Headings">Search Results</h2>
          <div className="search-results-container">
            {/* Render the SearchResults component */}
            <SearchResults
              results={searchResults}
              likedItems={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          </div>
        </div>
        <div className="box">
          <h2 className="Box-Headings">Favorites</h2>
          <div className="favorites-container">
            {/* Render the Favorites component */}
            <Favorites
              favorites={favorites}
              onRemoveFavorite={handleRemoveFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
