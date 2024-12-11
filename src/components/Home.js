import React from 'react';
import Hero from './Hero';
// import Carousel from './Carousel';
import TwoDropdowns from './TwoDropdowns';
import Contact from './Contact';
import PrisFlyttstadning from './PrisFlyttstadning';

import MapSection from './MapSection';
import ReviewsCarousel from "./ReviewsCarousel";

import 'bootstrap/dist/css/bootstrap.min.css'; // För CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Home() {


  return (
    <>
      <Hero />
      <TwoDropdowns />
      <PrisFlyttstadning />
      <Contact />
      <ReviewsCarousel/>
      <MapSection />


    </>
  );
}

export default Home;
