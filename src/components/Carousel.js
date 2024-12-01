import React from 'react';
import { useNavigate } from 'react-router-dom'; // Korrekt import
import service4 from '../assets/images/våran service-4.png';
import service6 from '../assets/images/våran service-7.png';
import servicescatalogStad from '../assets/images/servicescatalogStad.png';
import servicescatalogFlytt from '../assets/images/servicescatalogFlytt.png';

const Carousel = () => {
  const navigate = useNavigate(); // Flyttad inuti komponenten

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
      style={{
        overflow: 'hidden', // Ta bort extra utrymme utanför bilderna
      }}
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src={service4}
            className="d-block w-100"
            alt="Byggtjänster - Renoveringar Slide 1"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover', // Fyll hela ytan utan att ändra proportionerna
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src={service6}
            className="d-block w-100"
            alt="Byggtjänster - Renoveringar Slide 2"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover', // Fyll hela ytan utan att ändra proportionerna
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src={servicescatalogStad}
            className="d-block w-100"
            alt="Städtjänster Slide 3"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              margin: 0,
              padding: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              zIndex: 10,
            }}
          >
            <button
              className="btn btn-primary"
              onClick={() => navigate('/stad')}
            >
              Läs mer
            </button>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <img
            src={servicescatalogFlytt}
            className="d-block w-100"
            alt="Flyttjänster Slide 4"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              margin: 0,
              padding: 0,
            }}
          />
             <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              zIndex: 10,
            }}
          >
            <button
              className="btn btn-primary"
              onClick={() => navigate('/flytt')}
            >
              Läs mer
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
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
  );
};

export default Carousel;
