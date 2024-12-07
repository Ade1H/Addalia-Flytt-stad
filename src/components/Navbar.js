import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent fixed-top" style={{ backgroundColor: "#ced4da", zIndex: 10  }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="/Addalia-5.png"
            alt="Logo"
            className="rounded-circle"
            style={{ width: "100px", height: "100px", opacity: 0.6   }}
          />
        </Link>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Tjänster Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-dark fs-5 py-2 px-3 hover:bg-primary text-white fs-5 py-2 px-3"
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

            {/* Om Oss */}
            <li className="nav-item">
            <Link to="/OmOss" className="nav-link text-white fs-5 py-2 px-3">
  OM OSS
</Link>

            </li>

            {/* Offertförfråga */}
            <li className="nav-item">
              <Link to="/offertforfragan" className="nav-link text-dark fs-5 py-2 px-3 text-white fs-5 py-2 px-3" >
              
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
