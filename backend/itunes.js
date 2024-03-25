const axios = require("axios");

const searchMedia = async (searchTerm, mediaType) => {
  try {
    const response = await axios.get("https://itunes.apple.com/search", {
      params: {
        term: searchTerm,
        media: mediaType,
      },
    });

    const results = response.data.results;
    // Extract the relevant data from the results if needed

    return results; // Return the relevant data as a JSON response
  } catch (error) {
    // Handle the error without logging it to the console
    throw error;
  }
};

module.exports = {
  searchMedia,
};
