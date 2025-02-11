import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-center py-4"
      style={{
        background: "linear-gradient(90deg, #2c3e50 0%, #4ca1af 50%, #2c3e50 100%)",
        color: "#fff",
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="container">
        {/* Social Media Links */}
        <div className="d-flex justify-content-center mb-4">
          <a
            href="https://www.facebook.com/share/14TvLe8xtg/"
            target="_blank"
            className="text-white mx-3"
            rel="noopener noreferrer"
            style={{
              transition: "transform 0.3s ease",
            }}
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/addaliaservice/"
            target="_blank"
            className="text-white mx-3"
            rel="noopener noreferrer"
            style={{
              transition: "transform 0.3s ease",
            }}
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            className="text-white mx-3"
            rel="noopener noreferrer"
            style={{
              transition: "transform 0.3s ease",
            }}
          >
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
        </div>

        {/* Contact Information */}
        <div className="mb-3">
          <p
            className="mb-2"
            style={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Telefon:{" "}
            <a
              href="tel:+46728580598"
              className="text-white"
              style={{ textDecoration: "underline" }}
            >
              +46 102008184
            </a>
          </p>
          <p
            className="mb-2"
            style={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            E-post:{" "}
            <a
              href="mailto:addalia.service@gmail.com"
              className="text-white"
              style={{ textDecoration: "underline" }}
            >
              addalia.service@gmail.com
            </a>
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            Adress: Storängsgatan 2, 413 19 Göteborg
          </p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
