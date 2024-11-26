const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 4000;

// Configure CORS to allow requests from your React app
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your React app's URL
  })
);

// Route to fetch Google Reviews
app.get("/api/reviews", async (req, res) => {
  try {
    const apiKey = "AIzaSyCvNudw6jnl9DK7XOLbwLLZarFCVBUz_uw"; // Replace with your actual Google API key
    const placeId = "ChIJK-rgahjzT0YRmf7gYsIG77Q"; // Replace with your actual Place ID
    // const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,formatted_address&key=${apiKey}`;

    const response = await axios.get(url);
    if (response.data && response.data.result && response.data.result.reviews) {
      res.json(response.data.result.reviews); // Send reviews to the frontend
    } else {
      res.status(404).json({ error: "No reviews found." });
    }
  } catch (error) {
    console.error("Error fetching reviews:", error.message);
    res.status(500).json({ error: "Failed to fetch reviews. Please try again later." });
  }
});

// Start the server
app.listen(port, () =>
  console.log(`Proxy server running on http://localhost:${port}`)
);
