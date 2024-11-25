import React from 'react';
// import QuoteSection from './QuoteSection'; // Importera din komponent
import PrisFlyttstadning from './PrisFlyttstadning';

const Carousel = () => (
  <div id="carouselExampleIndicators" className="carousel slide mb-4" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}

    </div>
    <div className="carousel-inner">
      {/* Första slide */}
      <div className="carousel-item active">
        <img
          src="/våran service-4.png"
          className="d-block w-100"
          alt="Byggtjänster - Renoveringar"
          style={{ height: '500px', objectFit: 'cover' }}
        />
      </div>

      {/* Andra slide */}
      <div
  className="carousel-item"
  style={{ minHeight: '500px', padding: '2rem 0', backgroundColor: '#f8f9fa' }}
>
  <div className="container">
  <PrisFlyttstadning />
  </div>
</div>

{/* <div
  className="carousel-item"
  style={{ minHeight: '500px', padding: '2rem 0', backgroundColor: '#f8f9fa' }}
>
  <div className="container">

  </div>
</div> */}



    </div>

    {/* Navigationsknappar */}
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default Carousel;
