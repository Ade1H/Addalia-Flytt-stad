import React, { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    if (document.readyState === "complete") {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      window.addEventListener("load", () => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);
      });
    }
  }, []);




  return (
    // <div>
    //   {/* Div för Elfsight-widgeten */}
    //   <div
    //     className="elfsight-app-43ac02d9-7f57-49a5-9f96-232df9e3fbed"
    //     data-elfsight-app-lazy
    //   ></div>
    // </div>

  //   <div style={{ width: "100%", height: "500px" }}>
  //   <iframe
  //     src="https://widget.elfsight.com/widgets/43ac02d9-7f57-49a5-9f96-232df9e3fbed/"
  //     width="100%"
  //     height="100%"
  //     frameBorder="0"
  //     title="Google Reviews Widget"
  //   ></iframe>
  // </div>

  <div style={{ width: "100%", height: "300px", backgroundColor: "#f9f9f9" }}>
      <div
        className="elfsight-app-43ac02d9-7f57-49a5-9f96-232df9e3fbed"
      ></div>
    </div>
  );
};

export default ElfsightWidget;
