
//snapshot test for the SearchResults component using React Testing Library 
import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from './SearchResults';

describe('SearchResults component', () => {
  test('renders correctly', () => {
    // Arrange
    //Define the results array with two items.
    const results = [
      {
        trackId: 1,
        trackName: 'Track 1',
        artistName: 'Artist 1',
      },
      {
        trackId: 2,
        trackName: 'Track 2',
        artistName: 'Artist 2',
      },
    ];
    //Initialize the likedItems array as empty.
    const likedItems = [];
    //Create a mock function called onToggleFavorite using jest.fn().

    const onToggleFavorite = jest.fn();

    // Act
    const { container } = render(
      <SearchResults results={results} likedItems={likedItems} onToggleFavorite={onToggleFavorite} />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
});
