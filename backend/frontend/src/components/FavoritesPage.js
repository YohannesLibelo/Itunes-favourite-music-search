
import React from "react";
import Favorites from "./Favorites";

const FavoritesPage = ({ favorites, onRemoveFavorite }) => {
  return (
    <div>
      <h2>Favorites Page</h2>
      <Favorites favorites={favorites} onRemoveFavorite={onRemoveFavorite} />
    </div>
  );
};

export default FavoritesPage;
