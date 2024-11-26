import React from 'react';
// import PrisFlyttstadning from './PrisFlyttstadning'
// import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';

// import ServicesSection from './ServicesSection';
// import ServiceModal from './ServiceModal';
// import QuoteSection from './QuoteSection';
import MapSection from './MapSection';
import ReviewsCarousel from "./ReviewsCarousel";

import 'bootstrap/dist/css/bootstrap.min.css'; // För CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Home() {
  // const [selectedService, setSelectedService] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  // const navigate = useNavigate();

  // const openModal = (serviceId) => {
  //   setSelectedService(serviceId);
  //   setShowModal(true);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate('/Contact');
  // };

  // const renderModalContent = (service) => {
  //   switch (service) {
  //     case 'bygg': return
  //     case 'flytt': return
  //     case 'stad': return
  //     default: return null;
  //   }
  // };

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
