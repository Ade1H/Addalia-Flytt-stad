import React from 'react';

const MapSection = () => (
  <div className="mapouter" style={{ position: "relative", textAlign: "right", height: "400px", width: "100%" }}>
    <div className="gmap_canvas" style={{ overflow: "hidden", background: "none", height: "400px", width: "100%" }}>
      <iframe
        title="Map"
        width="100%"
        height="400"
        src="https://maps.google.com/maps?q=Storängsgatan%202,%20Gothenburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
);

export default MapSection;
