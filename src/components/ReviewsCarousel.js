import React, { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    };

    if (document.readyState === "complete") {
      addScript();
    } else {
      window.addEventListener("load", addScript);
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        // background: "linear-gradient(135deg, #e0f7fa, #80deea)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "15px",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Placeholder while the widget loads */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#00796b",
          textAlign: "center",
          zIndex: 1,
          animation: "fade-in 1.5s infinite",
        }}
      >
       
      </div>

      {/* Elfsight Widget */}
      <div
        className="elfsight-app-43ac02d9-7f57-49a5-9f96-232df9e3fbed"
        style={{
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      ></div>

      {/* Custom CSS for animation */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default ElfsightWidget;
