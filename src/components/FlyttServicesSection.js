import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import bohagsflyttImage from "../assets/images/bohagsflytt.jpg";
import officeMove from "../assets/images/officeMove.jpg";
import packing from "../assets/images/packing.jpg";
import liftingHelp from "../assets/images/liftingHelp.jpg";
import furnitureAssembly from "../assets/images/furnitureAssembly.jpg";
import specialTransport from "../assets/images/specialTransport.jpg";
import storage from "../assets/images/storage.jpg";
import recycling from "../assets/images/recycling.jpg";
import internalMove from "../assets/images/internalMove.jpg";
import urgentMove from "../assets/images/urgentMove.jpg";
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
        id: "bohagsflytt",
        title: "Bohagsflytt",
        description:
          "Hjälp med att flytta hela hemmet, inklusive möbler och personliga tillhörigheter.",
        details:
          "Vi erbjuder komplett bohagsflytt, från att packa ner dina tillhörigheter till att lasta, transportera och placera dem i ditt nya hem. Vi hanterar även tunga möbler och ömtåliga föremål med största omsorg.",
        image: bohagsflyttImage,
      },
      {
        id: "kontorsflytt",
        title: "Kontorsflytt",
        description:
          "Flytt av kontorsutrustning, möbler och dokument mellan lokaler.",
        details:
          "Vi hjälper företag att genomföra kontorsflyttar snabbt och effektivt, med minimal störning för verksamheten. Vi hanterar allt från möbler och datorutrustning till dokumenthantering och arkivering.",
        image: officeMove,
      },
      {
        id: "packning-uppackning",
        title: "Packning och uppackning",
        description:
          "Hjälp med att packa ner tillhörigheter inför flytten och att packa upp på den nya adressen.",
        details:
          "Vi erbjuder professionell packning och uppackning av dina tillhörigheter. Vårt team packar dina saker på ett säkert sätt och ser till att allt kommer fram i gott skick. Vi hjälper även till att packa upp på den nya adressen.",
        image: packing,
      },
      {
        id: "barhjalp",
        title: "Bärhjälp",
        description:
          "Bärhjälp vid transport av tunga föremål, som pianon, kassaskåp eller stora möbler.",
        details:
          "Våra bärhjälpsexperter tar hand om tunga och otympliga föremål som kan vara svåra att hantera på egen hand. Vi ser till att föremålen transporteras på ett säkert och effektivt sätt.",
        image: liftingHelp,
      },
      {
        id: "montering-demontering",
        title: "Montering och demontering",
        description: "Montering och demontering av möbler vid flytt.",
        details:
          "Vi erbjuder montering och demontering av möbler, så att du slipper stressen med att sätta ihop eller ta isär dina möbler vid flytt. Vi hanterar allt från små möbler till större och mer komplexa konstruktioner.",
        image: furnitureAssembly,
      },
      {
        id: "specialtransport",
        title: "Transport av specialgods",
        description:
          "Hantering av ömtåliga eller speciella föremål, som konstverk eller antikviteter.",
        details:
          "Vi erbjuder specialtransport för ömtåliga och värdefulla föremål, såsom konstverk, antikviteter eller andra sällsynta objekt. Vi använder rätt utrustning för att säkerställa att dina föremål transporteras tryggt.",
        image: specialTransport,
      },
      {
        id: "magasinering",
        title: "Magasinering",
        description:
          "Förvaring av tillhörigheter i ett magasin under en kortare eller längre period.",
        details:
          "Vi erbjuder säker magasinering för dina tillhörigheter. Oavsett om du behöver förvara saker under en kortare eller längre period kan du lita på att dina saker är trygga hos oss.",
        image: storage,
      },
      {
        id: "utrensning",
        title: "Utrensning och återvinning",
        description:
          "Hjälp med att sortera, rensa ut och transportera bort saker som ska återvinnas eller slängas.",
        details:
          "Vi hjälper dig att rensa ut gamla möbler, elektronik och andra föremål som ska återvinnas eller slängas. Vi ser till att föremålen hanteras på ett miljövänligt sätt och transporteras bort på ett effektivt sätt.",
        image: recycling,
      },
      {
        id: "internflytt",
        title: "Intern flytt",
        description: "Flytt inom samma byggnad, exempelvis mellan våningar.",
        details:
          "Vi erbjuder smidiga internflyttar inom samma byggnad, som att flytta mellan våningar eller kontorslokaler. Vi ser till att flytten sker snabbt och säkert, utan att störa din dagliga verksamhet.",
        image: internalMove,
      },
      {
        id: "akutflytt",
        title: "Akutflytt",
        description: "Snabb hjälp med flytt i nödsituationer.",
        details:
          "Vi erbjuder snabb hjälp vid akuta flyttbehov, exempelvis vid brand, översvämning eller omedelbara flyttbehov. Vi är tillgängliga för att hjälpa till även under kvällar och helger.",
        image: urgentMove,
      },
    ];



  return (
    <div>
      {/* Services Section */}
      <section className="container my-5" id="service">
        <h2 className="text-center mb-4">Våra Flyttjänster</h2>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" key={service.id}>
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
