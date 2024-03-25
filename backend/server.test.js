// Import the supertest library to make HTTP requests to the app
const request = require("supertest");

// Import the Express app to be tested
const app = require("./server.js");

// Define a test case for the GET /search endpoint
test("GET /search returns expected response", async () => {
// Send a GET request to the /search endpoint with query parameters
const response = await request(app).get("/search?term=test&mediaType=all");

// Assert that the response status code is 200 (OK)
expect(response.statusCode).toBe(200);

// Assert that the response body matches the stored snapshot
expect(response.body).toMatchSnapshot();
});