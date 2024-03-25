import React, { useState } from "react";
import axios from "axios";

// Function to search for media using the iTunes Search API
const searchMedia = async (searchTerm, mediaType) => {
  try {
    const response = await axios.get("https://itunes.apple.com/search", {
      params: {
        term: searchTerm,
        media: mediaType,
      },
    });

    const results = response.data.results;
    return results;
  } catch (error) {
    console.error("Error in searchMedia:", error);
    throw error;
  }
};

// SearchForm component
const SearchForm = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaType, setMediaType] = useState("all");

  // Event handler for search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Event handler for media type change
  const handleMediaTypeChange = (event) => {
    setMediaType(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call searchMedia function to fetch search results
      const results = await searchMedia(searchTerm, mediaType);
      // Pass the search term, media type, and results to the parent component
      onSearchSubmit(searchTerm, mediaType, results);
    } catch (error) {
      console.error("Error in search:", error);
      // Handle error if needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for search term */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Enter search term"
      />
      {/* Dropdown select for media type */}
      <select value={mediaType} onChange={handleMediaTypeChange}>
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="audiobook">Audio Book</option>
      </select>
      {/* Submit button */}
      <button type="submit">Search</button>
    </form>
  );
};

export { SearchForm, searchMedia };
