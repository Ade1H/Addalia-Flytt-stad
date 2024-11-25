import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

// Import images
import hemstadImage from "../assets/images/hemstad.jpg";
import flyttstadImage from "../assets/images/flyttstad.jpg";
import storstadningImage from "../assets/images/storstadning.jpg";
import fonsterputsningImage from "../assets/images/fonsterputsning.jpg";
import kontorsstadningImage from "../assets/images/kontorsstadning.jpg";
import byggstadningImage from "../assets/images/byggstadning.jpg";
import saneringImage from "../assets/images/sanering.jpg";
import mattmobeltvattImage from "../assets/images/mattmobeltvatt.jpg";
import trappstadningImage from "../assets/images/trappstadning.jpg";
import forradvindImage from "../assets/images/forradvind.jpg";
import { useNavigate } from "react-router-dom";
const ServicesWithModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const handleNavigateToQuote = () => {
    navigate("/offertforfragan"); // Navigera till 'Begärt offert'-sidan
    handleClose(); // Stäng modalen efter navigeringen
  };

  const services = [
    {
      id: "hemstad",
      title: "Hemstädning",
      description:
        "Regelbunden städning av hemmet (veckovis/månadsvis). Dammning, dammsugning, moppning, rengöring av kök och badrum.",
      details:
        "Vi erbjuder flexibla scheman för hemstädning, anpassade efter dina behov. Våra medarbetare är professionella och diskreta, och vi använder miljövänliga produkter för att säkerställa en trygg och ren miljö i ditt hem.",
      image: hemstadImage,
    },
    {
      id: "flyttstad",
      title: "Flyttstädning",
      description:
        "Grundlig städning efter utflyttning enligt hyresvärdens eller fastighetsägarens krav.",
      details:
        "Vår flyttstädning inkluderar rengöring av alla ytor, inklusive fönster, golv, och vitvaror. Vi garanterar godkännande från hyresvärden.",
      image: flyttstadImage,
    },
    {
      id: "storstädning",
      title: "Storstädning",
      description:
        "En mer omfattande städning av hela bostaden, ofta inför särskilda tillfällen eller säsongsskifte.",
      details:
        "Vår storstädning omfattar alla ytor i hemmet, inklusive fönsterputs, rengöring av kök och badrum, samt golvpolering. Perfekt inför helg eller storhelger.",
      image: storstadningImage,
    },
    {
      id: "fonsterputsning",
      title: "Fönsterputsning",
      description:
        "Professionell rengöring av fönster, både in- och utvändigt.",
      details:
        "Vi erbjuder professionell fönsterputsning med miljövänliga produkter för att säkerställa ett skinande rent resultat.",
      image: fonsterputsningImage,
    },
    {
      id: "kontorsstadning",
      title: "Kontorsstädning",
      description:
        "Regelbunden städning av kontorslokaler och arbetsplatser.",
      details:
        "Vi erbjuder flexibla och anpassade lösningar för kontorsstädning, inklusive daglig städning, fönsterputsning och sanering av gemensamma ytor.",
      image: kontorsstadningImage,
    },
    {
      id: "byggstadning",
      title: "Byggstädning",
      description:
        "Städning av nybyggda eller renoverade fastigheter innan de tas i bruk.",
      details:
        "Vi hanterar allt från grovstädning av byggarbetsplatser till finputsning av nya fastigheter. Vi ser till att allt är klart för inflyttning eller användning.",
      image: byggstadningImage,
    },
    {
      id: "sanering",
      title: "Sanering",
      description:
        "Hantering av grovstädning och rengöring av starkt nedsmutsade eller förorenade miljöer.",
      details:
        "Vi erbjuder sanering av områden som är nedsmutsade med farliga ämnen eller där det krävs specialutrustning och expertkunskap.",
      image: saneringImage,
    },
    {
      id: "mattmobeltvatt",
      title: "Matt- och möbeltvätt",
      description: "Rengöring av mattor, soffor och andra möbler.",
      details:
        "Vi erbjuder professionell tvätt av både mattor och möbler, för att ta bort smuts, fläckar och bakterier. Vi använder skonsamma och effektiva rengöringsmetoder.",
      image: mattmobeltvattImage,
    },
    {
      id: "trappstadning",
      title: "Trappstädning",
      description:
        "Städning av trapphus i bostadsrättsföreningar eller hyresfastigheter.",
      details:
        "Vi erbjuder regelbundna städtjänster för trapphus, inklusive dammsugning, moppning och rengöring av dörrar och fönster.",
      image: trappstadningImage,
    },
    {
      id: "forradvind",
      title: "Förråds- och vindsröjning",
      description: "Städning och röjning av förvaringsutrymmen.",
      details:
        "Vi hjälper till med att röja bort skräp, gamla möbler och andra föremål i förråd och vindar för att skapa mer ordning och utrymme.",
      image: forradvindImage,
    },
  ];


  return (
    <div>
      {/* Services Section */}
      <section className="container my-5" id="service">
        <h2 className="text-center mb-4">Våra Städtjänster</h2>
        <div className="row g-4 "  >
          {services.map((service) => (
            <div className="col-md-4" key={service.id} >
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center d-flex flex-column">
  <h5 className="card-title">{service.title}</h5>
  <p className="card-text">{service.description}</p>
  <button
    className="btn btn-primary mt-auto w-100"
    onClick={() => openModal(service)}
  >
    Läs mer
  </button>
</div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {selectedService && selectedService.details ? (
    <p>{selectedService.details}</p> // Visa detaljerna
  ) : (
    <p>Ingen detaljer tillgängliga.</p> // Om inga detaljer finns, visa detta
  )}
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleNavigateToQuote}>
            Begär Offert
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ServicesWithModal;
