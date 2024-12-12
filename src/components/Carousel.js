import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import service4 from '../assets/images/våran service-4.png';
import servicescatalogStad from '../assets/images/servicescatalogStad.png';
import servicescatalogFlytt from '../assets/images/servicescatalogFlytt.png';

const Carousel = () => {
  return (
    <div className="container-fluid px-0">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators">
          {['Slide 1', 'Slide 2', 'Slide 3'].map((label, index) => (
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
              style={{
                width: '100%',
                height: 'auto', // Dynamisk höjd
                objectFit: 'cover', // Anpassa utan att förvränga bilden
                opacity: 0.6
              }}

            />
          </div>
          <div className="carousel-item">
            <img
              src={servicescatalogStad}
              className="d-block w-100"
              alt="Städtjänster Slide 3"
              style={{
                width: '100%',
                height: 'auto', // Dynamisk höjd
                objectFit: 'cover', // Anpassa utan att förvränga bilden
                opacity: 0.6
              }}

            />
          </div>
          <div className="carousel-item">
            <img
              src={servicescatalogFlytt}
              className="d-block w-100"
              alt="Flyttjänster Slide 4"
              style={{
                width: '100%',
                height: 'auto', // Dynamisk höjd
                objectFit: 'cover', // Anpassa utan att förvränga bilden

                opacity: 0.6
              }}

            />
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
