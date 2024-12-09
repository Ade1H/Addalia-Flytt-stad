import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark bg-primary fixed-top"
      style={{
        background: "linear-gradient(90deg, rgb(2,0,36) 0%, #2c3e50 50%, rgba(0,212,255,1) 100%)", zIndex: 10, padding: "0.1rem 0.1rem",  }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src="/logoAT.png"
            alt="Logo"
            className="rounded-circle"
            style={{ width: "100px", height: "100px", opacity: 0.6 }}
          />
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
                className="nav-link dropdown-toggle btn btn-link"
                id="servicesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TJÄNSTER
              </button>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
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
              <Link to="/offertforfragan" className="nav-link">
                OFFERTFÖRFRÅGA
              </Link>
            </li>

            {/* Om Oss */}
            <li className="nav-item">
              <Link to="/OmOss" className="nav-link">
                OM OSS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
