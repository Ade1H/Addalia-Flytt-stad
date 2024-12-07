import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StadServicesSection from './StadServicesSection'; // Komponent för städtjänster (Dropdown 1)
import FlyttServicesSection from './FlyttServicesSection'; // Komponent för flyttjänster (Dropdown 2)

const TwoDropdowns = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Våra Tjänster</h1>

      {/* Första dropdown */}
      <div className="dropdown mb-3">
        <button
          className="btn btn-outline-primary  btn-lg  align-items-center dropdown-toggle w-100"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Våra Städtjänster
        </button>
        <div className="dropdown-menu w-100 p-3" aria-labelledby="dropdownMenuButton1">
          <StadServicesSection /> {/* Din komponent för städtjänster */}
        </div>
      </div>

      {/* Andra dropdown */}
      {/* className="btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center px-4 shadow"
  style={{ borderRadius: "30px", fontWeight: "bold" }} */}
      <div className="dropdown">
        <button
          className="btn btn-outline-primary  btn-lg  align-items-center dropdown-toggle w-100"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Våra Flyttjänster
        </button>
        <div className="dropdown-menu w-100 p-3" aria-labelledby="dropdownMenuButton2">
          <FlyttServicesSection /> {/* Din komponent för flyttjänster */}
        </div>
      </div>
    </div>
  );
};

export default TwoDropdowns;
