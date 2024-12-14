import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carousel = () => {
  return (
    <div className="container-fluid px-0">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators" >
          {[...Array(3)].map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active" style={{height:'400px'}}>
          {/* p-4 bg-gradient rounded-3 text-white text-center */}
            <div className="d-flex align-items-center  justify-content-between p-4 bg-gradient rounded-3 text-white">
              <div>
                <h1 className="fw-bold mb-3">
                  Låt oss ta hand om städningen och flytten
                </h1>
                <p className="lead">Med våra professionella tjänster</p>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/mattmobeltvatt.jpg`}
                alt="Cleaning"
                className="rounded-circle"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" style={{height:'400px'}}>
            <div className="p-4 bg-gradient rounded-3 text-white text-center">
              <h2 className="fw-bold mb-3">Våra Flyttjänster</h2>
              <div className="d-flex justify-content-around">
                {[
                  {
                    title: "Bohagsflytt",
                    text: "Flytta hela hemmet inklusive möbler.",
                    image: `${process.env.PUBLIC_URL}/storage.jpg`,
                  },
                  {
                    title: "Kontorsflytt",
                    text: "Flytta kontorsutrustning smidigt.",
                    image: `${process.env.PUBLIC_URL}/officeMove.jpg`,
                  },
                  {
                    title: "Akutflytt",
                    text: "Snabb hjälp vid nödsituationer.",
                    image: `${process.env.PUBLIC_URL}/man.jpg`,
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center mx-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-circle mb-2"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <h4 className="fw-bold">{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item" style={{height:'400px'}}>
            <div className="p-4 bg-gradient rounded-3 text-white text-center">
              <h2 className="fw-bold mb-3">Våra Städ- och Rengöringstjänster</h2>
              <div className="d-flex justify-content-around">
                {[
                  {
                    title: "Hemstädning",
                    text: "Regelbunden städning av hemmet.",
                    image: `${process.env.PUBLIC_URL}/hemstad.jpg`,
                  },
                  {
                    title: "Flyttstädning",
                    text: "Grundlig städning efter utflyttning.",
                    image: `${process.env.PUBLIC_URL}/bohagsflytt.jpg`,
                  },
                  {
                    title: "Storstädning",
                    text: "Omfattande städning för speciella tillfällen.",
                    image: `${process.env.PUBLIC_URL}/storstadning.jpg`,
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center mx-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-circle mb-2"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <h4 className="fw-bold">{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
