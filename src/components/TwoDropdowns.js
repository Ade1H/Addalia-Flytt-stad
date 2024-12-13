import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StadServicesSection from './StadServicesSection'; // Component for cleaning services
import FlyttServicesSection from './FlyttServicesSection'; // Component for moving services

const TwoDropdowns = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#004085' }}>
        Våra Tjänster
      </h1>

      {/* First Dropdown */}
      <div className="dropdown mb-4">
        <button
          className="btn btn-outline-primary btn-lg dropdown-toggle w-100 shadow-sm"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            borderRadius: '30px',
            fontWeight: 'bold',
            color: '#004085',
            borderColor: '#004085',
            backgroundColor: '#f8f9fa',
            transition: 'all 0.3s ease',
          }}
        >
          Våra Städtjänster
        </button>
        <div
          className="dropdown-menu w-100 p-4 shadow rounded"
          aria-labelledby="dropdownMenuButton1"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #ddd',
          }}
        >
          <StadServicesSection /> {/* Your component for cleaning services */}
        </div>
      </div>

      {/* Second Dropdown */}
      <div className="dropdown">
        <button
          className="btn btn-outline-primary btn-lg dropdown-toggle w-100 shadow-sm"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            borderRadius: '30px',
            fontWeight: 'bold',
            color: '#004085',
            borderColor: '#004085',
            backgroundColor: '#f8f9fa',
            transition: 'all 0.3s ease',
          }}
        >
          Våra Flyttjänster
        </button>
        <div
          className="dropdown-menu w-100 p-4 shadow rounded"
          aria-labelledby="dropdownMenuButton2"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #ddd',
          }}
        >
          <FlyttServicesSection /> {/* Your component for moving services */}
        </div>
      </div>
    </div>
  );
};

export default TwoDropdowns;
