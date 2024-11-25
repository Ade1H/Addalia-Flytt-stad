import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

const ReviewsCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try { const apiKey = "AIzaSyA8mEJ6rWpwenIICQ_7A-6Z94uxAwsuJlQ"; // Replace with your Google API key
        const placeId = "16704305020285321390"; // Replace with your Google Place ID//

        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`


        const response = await axios.get(url);
        if (response.data && response.data.result && response.data.result.reviews) {
          setReviews(response.data.result.reviews);
        } else {
          setError("Inga recensioner hittades.");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Kunde inte hämta recensioner. Försök igen senare.");
      }
    };

    fetchGoogleReviews();
  }, []);

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
