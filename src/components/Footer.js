import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4" style={{ 
      background: "linear-gradient(90deg, #2c3e50 0%, #4ca1af 50%, #2c3e50 100%)", color: "#fff" }}>
      <div className="container">
        {/* Social media links */}
        <div className="d-flex justify-content-center mb-4">
          <a href="https://www.facebook.com/share/14TvLe8xtg/" target="_blank" className="text-white mx-3" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/addaliaservice/" target="_blank" className="text-white mx-3" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.tiktok.com" target="_blank" className="text-white mx-3" rel="noopener noreferrer">
  <i className="fab fa-tiktok fa-2x"></i>
</a>

        </div>

        {/* Kontaktinformation */}
        <div className="mb-3">
          <p>
            Telefon: <a href="tel:+46701234567" className="text-white">+46 72-858 05 98</a>
          </p>
          <p>
            E-post: <a href="mailto:info@foretag.se" className="text-white">addalia.service@gmail.com</a>
          </p>
          <p>Adress: Storängsgatan 2, 413 19 Göteborg</p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
