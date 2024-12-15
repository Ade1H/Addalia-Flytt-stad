import React, { useEffect, useState } from "react";
import axios from "axios";

const GoogleReviewsCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const API_KEY = "AIzaSyCwUy5-9FVVTkDafMyem6-YAP1l7Fs2xJ8"; // Replace with your Google API key
  const PLACE_ID = "ChIJXdN3MVnzT0YRmGcW7ij__rQ"; // Replace with your place_id

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
        );
        setReviews(response.data.result.reviews || []);
      } catch (error) {
        console.error("Error fetching Google Reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Google Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-center">Loading reviews...</p>
      ) : (
        <div id="googleReviewsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {reviews.map((review, index) => (
              <div
                key={review.author_name}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center">
                  <div className="card" style={{ maxWidth: "600px" }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">{review.author_name}</h5>
                      <p className="text-center">
                        {"⭐".repeat(review.rating)}
                      </p>
                      <p className="card-text text-center">{review.text}</p>
                      <p className="text-center text-muted">
                        {new Date(review.time * 1000).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#googleReviewsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#googleReviewsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleReviewsCarousel;
