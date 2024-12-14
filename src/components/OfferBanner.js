import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const OfferBanner = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/offertforfragan'); // Navigera till offert-sidan
  };

  return (
    <div className="container my-4 offer-banner">
      <div className="row align-items-center bg-warning text-dark rounded shadow p-4" style={{ height:'300px' }}>
        {/* Text Section */}
        <div className="col-12 col-md-8 text-center text-md-start mb-3 mb-md-0">
          <h2 className="fw-bold">Specialerbjudande!</h2>
          <p className="lead">
            Just nu erbjuder vi <strong>10% rabatt</strong> på flyttstädning. Boka innan
            <strong> 31 december</strong> för att ta del av erbjudandet!
          </p>
        </div>
        {/* Button Section */}
        <div className="col-12 col-md-4 text-center">
          <button className="btn btn-dark btn-lg w-100" onClick={handleButtonClick}>
            Boka nu
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
