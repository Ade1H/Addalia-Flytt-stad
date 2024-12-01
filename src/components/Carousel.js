import React from 'react';

const Carousel = () => (
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
    </div>

    {/* Carousel Inner */}
    <div className="carousel-inner">
      {/* Slide 1 */}
      <div className="carousel-item active">
        <img
          src="/våran service-4.png"
          className="d-block w-100"
          alt="Byggtjänster - Renoveringar"
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
          src="/våran service-5.png"
          className="d-block w-100"
          alt="Byggtjänster - Renoveringar"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover', // Fyll hela ytan utan att ändra proportionerna
            margin: 0,
            padding: 0,
          }}
        />
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

export default Carousel;
