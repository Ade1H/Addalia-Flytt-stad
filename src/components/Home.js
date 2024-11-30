import React from 'react';

import Carousel from './Carousel';

import MapSection from './MapSection';
// import ReviewsCarousel from "./ReviewsCarousel";

import 'bootstrap/dist/css/bootstrap.min.css'; // För CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Home() {


  return (
    <>

      <Carousel />


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
