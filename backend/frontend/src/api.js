/* import axios from "axios";

const searchMedia = async (searchTerm, mediaType) => {
  try {
    const response = await axios.get("/search", {
      params: {
        term: searchTerm,
        mediaType: mediaType,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error in API request:", error);
    throw error;
  }
};

export default searchMedia;
 */