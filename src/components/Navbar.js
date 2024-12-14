import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoAT.png"

const Navbar = () => {
  useEffect(() => {
    // Function to close the hamburger menu when clicking outside or on a link
    const handleClickOutside = (event) => {
      const navbarCollapse = document.getElementById("navbarNav");
      const navbarToggler = document.querySelector(".navbar-toggler");

      if (
        navbarCollapse.classList.contains("show") &&
        (!navbarCollapse.contains(event.target) || event.target.tagName === "A")
      ) {
        navbarToggler.click();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background:
          "linear-gradient(90deg, rgb(2,0,36) 0%, #34495e 50%, rgba(0,212,255,1) 100%)",
        zIndex: 10,
        padding: "0.5rem 1rem",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="rounded-circle"
            style={{
              width: "60px",
              height: "60px",
              marginRight: "10px",
              opacity: 0.9,
            }}
          />
          <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Addalia</span>
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Tjänster Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-light"
                id="servicesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontWeight: "bold" }}
              >
                TJÄNSTER
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="servicesDropdown"
              >
                <li>
                  <Link to="/stad" className="dropdown-item">
                    Städtjänster
                  </Link>
                </li>
                <li>
                  <Link to="/flytt" className="dropdown-item">
                    Flyttjänster
                  </Link>
                </li>
              </ul>
            </li>

            {/* Offertförfrågan */}
            <li className="nav-item">
              <Link
                to="/offertforfragan"
                className="nav-link text-light"
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  transition: "color 0.3s",
                }}
              >
                OFFERTFÖRFRÅGA
              </Link>
            </li>

            {/* Om Oss */}
            <li className="nav-item">
              <Link
                to="/OmOss"
                className="nav-link text-light"
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  transition: "color 0.3s",
                }}
              >
                OM OSS
              </Link>
            </li>

            {/* Kontakt */}
            <li className="nav-item">
              <Link
                to="/KONTAKT"
                className="nav-link text-light"
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  transition: "color 0.3s",
                }}
              >
                KONTAKT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
