import React from 'react';
import Hero from './Hero';
// import Carousel from './Carousel';
import TwoDropdowns from './TwoDropdowns';


import MapSection from './MapSection';
// import ReviewsCarousel from "./ReviewsCarousel";

import 'bootstrap/dist/css/bootstrap.min.css'; // För CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Home() {


  return (
    <>
  <Hero />
      {/* <Carousel /> */}

      <div className="container mt-5 text-center">


        <div className="d-flex justify-content-center gap-3">

        </div>
        <TwoDropdowns />
      </div>


<div>
      {/* Andra sektioner */}
      {/* <ReviewsCarousel /> */}
    </div>


      {/* <ServicesSection openModal={openModal} /> */}
      {/* <ServiceModal
        showModal={showModal}
        selectedService={selectedService}
        renderModalContent={renderModalContent}
        handleClose={() => setShowModal(false)}
      /> */}
  <div className="container my-5">
  <MapSection />
</div>

    </>
  );
}

export default Home;
