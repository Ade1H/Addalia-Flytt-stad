import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

const ReviewsCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  // Define your Google API key and place ID here
  const apiKey = "AIzaSyCvNudw6jnl9DK7XOLbwLLZarFCVBUz_uw";  // Replace with your API key
  const placeId = "YChIJK-rgahjzT0YRmf7gYsIG77Q";  // Replace with your Google Place ID

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Make sure to include the placeId in the URL
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,formatted_address&key=${apiKey}`
        );

        // Check if reviews exist and set them in state
        if (response.data && response.data.result && response.data.result.reviews) {
          setReviews(response.data.result.reviews);
        } else {
          setError("No reviews found.");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error.message);
        setError("Could not fetch reviews.");
      }
    };

    fetchReviews();
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="container my-4">
      <h2 className="text-center">Vad våra kunder säger</h2>
      {error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <Carousel>
          {reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex flex-column align-items-center">
                <h5>{review.author_name}</h5>
                <p>{"★".repeat(review.rating)}</p>
                <p className="text-center">{review.text}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ReviewsCarousel;
