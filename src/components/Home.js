import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import Hero from './Hero';
// import Carousel from './Carousel';
import TwoDropdowns from './TwoDropdowns';
// import Contact from './Contact';
import PrisFlyttstadning from './PrisFlyttstadning';
// import annons from './OfferBanner'
// import MapSection from './MapSection';
// import ReviewsCarousel from "./ReviewsCarousel";

import 'bootstrap/dist/css/bootstrap.min.css'; // För CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import OfferBanner from './OfferBanner';

function Home() {
  return (
    <>
      {/* Meta Tags */}
      <Helmet>
        <title>Welcome to Addalia - Construction, Moving & Cleaning Services</title>
        <meta
          name="description"
          content="Addalia offers top-notch construction, moving, and cleaning services tailored to your needs. Discover why we're the trusted choice."
        />
        <meta
          name="keywords"
          content="construction, moving services, cleaning services, Addalia, professional services"
        />
      </Helmet>

      {/* Page Components */}

      <Hero />

      <TwoDropdowns />
      <PrisFlyttstadning />

      {/* <Contact /> */}
      {/* <ReviewsCarousel /> */}
      {/* <MapSection /> */}
    </>
  );
}

export default Home;
