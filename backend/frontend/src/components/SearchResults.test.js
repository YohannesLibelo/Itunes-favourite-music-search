import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchResults from './SearchResults';

describe('SearchResults component', () => {
  test('calls onToggleFavorite when favorite button is clicked with the correct item', () => {
    // Arrange
    const results = [
      {
        trackId: 1,
        trackName: 'Track 1',
        artistName: 'Artist 1',
      },
    ];
    const likedItems = [];
    const onToggleFavorite = jest.fn();

    // Act
    const { getByText } = render(
      <SearchResults results={results} likedItems={likedItems} onToggleFavorite={onToggleFavorite} />
    );
    const favoriteButton = getByText('🤍');
    fireEvent.click(favoriteButton);

    // Assert
    expect(onToggleFavorite).toHaveBeenCalledTimes(1);
    expect(onToggleFavorite).toHaveBeenCalledWith(results[0]);
  });
});
