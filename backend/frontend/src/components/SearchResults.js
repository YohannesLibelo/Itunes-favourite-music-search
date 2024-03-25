import React from 'react';

const SearchResults = ({ results, likedItems, onToggleFavorite }) => {
  const handleToggleFavorite = (item) => {
    onToggleFavorite(item);
  };

  return (
    <div>
   
      {results.map((result) => (
        <div key={result.trackId}>
          <h3>{result.trackName}</h3>
          <p>Artist: {result.artistName}</p>
          {/* Display other relevant information */}
          <button onClick={() => handleToggleFavorite(result)}>
            {likedItems.some((likedItem) => likedItem.trackId === result.trackId) ? '❤️' : '🤍'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
