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
           <iframe
  title="Map"
  className="w-100 h-auto"
  style={{
    maxHeight: "400px", // Begränsar höjden på stora skärmar
    height: "300px",    // Standardhöjd
  }}
  src="https://maps.google.com/maps?q=Storängsgatan%202,%20Gothenburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
  frameBorder="0"
  scrolling="no"
></iframe>

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MapSection;
