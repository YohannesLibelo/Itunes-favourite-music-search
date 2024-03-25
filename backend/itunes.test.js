const axios = require("axios");
const { searchMedia } = require("./itunes");

jest.mock("axios");

describe("searchMedia", () => {
  it("should return search results", async () => {
    const searchTerm = "music";
    const mediaType = "song";

    const mockResponse = {
      data: {
        results: [
          { trackId: 1, trackName: "Song 1" },
          { trackId: 2, trackName: "Song 2" },
        ],
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    const results = await searchMedia(searchTerm, mediaType);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://itunes.apple.com/search",
      {
        params: {
          term: searchTerm,
          media: mediaType,
        },
      }
    );
    expect(results).toEqual(mockResponse.data.results);
  });

  it("should throw an error if the API request fails", async () => {
    const searchTerm = "music";
    const mediaType = "song";

    const mockError = new Error("API request failed");

    axios.get.mockRejectedValue(mockError);

    await expect(searchMedia(searchTerm, mediaType)).rejects.toThrow(
      "API request failed"
    );
  });
});
