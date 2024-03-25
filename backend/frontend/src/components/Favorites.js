import React from 'react';

const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <div>
      {favorites.map((favorite) => (
        <div key={favorite.trackId}>
          {/* Display the track name */}
          <h3>{favorite.trackName}</h3>
          {/* Display the artist name */}
          <p>Artist: {favorite.artistName}</p>
          {/* Button to remove the favorite */}
          <button onClick={() => onRemoveFavorite(favorite)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
