import React from 'react';
import '../App.js';



const MapSection = () => (
  <div className="container my-4">
    <div className="row">
      <div className="col-12 col-md-8 mx-auto">
        <div
          className="mapouter position-relative text-end"
          style={{
            height: "100%", // Låt Bootstrap hantera höjden med responsiva klasser
          }}
        >
          <div
            className="gmap_canvas"
            style={{
              overflow: "hidden",
              background: "none",
              width: "100%",
            }}
          >
  <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2133.116568665981!2d11.944097041708584!3d57.68049787396701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3593177d35d%3A0xb4feff28ee166798!2sAddalia%20Flytt%20%26%20st%C3%A4d!5e0!3m2!1sen!2sse!4v1734135512327!5m2!1sen!2sse" width="600" height="450" style={{ border: 'none' }}
 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MapSection;
