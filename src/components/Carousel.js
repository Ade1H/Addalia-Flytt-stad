import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import service4 from '../assets/images/våran service-4.png';
import service6 from '../assets/images/våran service-7.png';
import servicescatalogStad from '../assets/images/servicescatalogStad.png';
import servicescatalogFlytt from '../assets/images/servicescatalogFlytt.png';
// import './Carousel.css'; // Ensure this includes your custom CSS

const Carousel = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid px-0">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          {['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'].map((label, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={label}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={service4}
              className="d-block w-100"
              alt="Byggtjänster - Renoveringar Slide 1"
              style={{ opacity: 0.6 }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={service6}
              className="d-block w-100"
              alt="Byggtjänster - Renoveringar Slide 2"
              style={{ opacity: 0.6 }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={servicescatalogStad}
              className="d-block w-100"
              alt="Städtjänster Slide 3"
              style={{ opacity: 0.6 }}
            />
            <button
              className="btn btn-primary position-absolute top-0 end-0 translate-middle-y m-3"
              onClick={() => navigate('/stad')}
            >
              Läs mer
            </button>
          </div>
          <div className="carousel-item">
            <img
              src={servicescatalogFlytt}
              className="d-block w-100"
              alt="Flyttjänster Slide 4"
              style={{ opacity: 0.6 }}
            />
            <button
              className="btn btn-primary position-absolute top-0 end-0 translate-middle-y m-3"
              onClick={() => navigate('/flytt')}
            >
              Läs mer
            </button>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
