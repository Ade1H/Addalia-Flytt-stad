import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent fixed-top" style={{ backgroundColor: "#ced4da", zIndex: 10  }}>
      <div className="container-fluid">


        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
  style={{
    border: "none", // Ingen kant runt knappen
  }}
>
  <span
    className="navbar-toggler-icon"
    style={{
      filter: "invert(1)", // Ändrar färgen till vit
    }}
  ></span>
</button>

<Link to="/" className="navbar-brand">
          <img
            src="/Addalia-5.png"
            alt="Logo"
            className="rounded-circle"
            style={{ width: "100px", height: "100px", opacity: 0.6   }}
          />
        </Link>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav"   style={{
          backgroundColor: "#fff", // Vit bakgrund
          color: "#000", // Svart text
          borderRadius: "5px", // Rundade hörn
          padding: "10px 15px", // Luft runt texten
          border: "1px solid rgba(0, 0, 0, 0.1)", // Lätt kantlinje
          textDecoration: "none", // Ingen understrykning
          display: "inline-block", // Hindrar knappen från att ta hela bredden
        }}>
    {/* Tjänster Dropdown */}
    <li className="nav-item dropdown">
      <button
        className="nav-link dropdown-toggle"
        id="servicesDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"

      >
        TJÄNSTER
      </button>
      <ul
        className="dropdown-menu"
        aria-labelledby="servicesDropdown"

      >
        <li>
          <Link
            to="/stad"
            className="dropdown-item"

          >
            Städtjänster
          </Link>
        </li>
        <li>
          <Link
            to="/flytt"
            className="dropdown-item"

          >
            Flyttjänster
          </Link>
        </li>
      </ul>
    </li>

    {/* Om Oss */}
    <li className="nav-item">
      <Link
        to="/offertforfragan"
        className="nav-link"

      >
         OFFERTFÖRFRÅGA
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/OmOss"
        className="nav-link"

      >
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
