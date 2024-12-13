import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageStatus, setMessageStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zs1rvlc",
        "template_lwt6fbd",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Kgzm3fkD__CsILSig"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessageStatus("Ditt meddelande har skickats framgångsrikt!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setMessageStatus("Något gick fel. Försök igen senare.");
        }
      );
  };

  return (
    <div className="container my-5">
      {/* Services Section */}
      <div
        className="services-section py-5 px-4 shadow-sm rounded"
        style={{
          marginTop: "120px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          className="text-center mb-4"
          style={{
            fontWeight: "bold",
            color: "#004085",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          Våra Tjänster
        </h3>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", textAlign: "justify" }}>
          Hos oss på Addalia erbjuder vi ett brett utbud av professionella tjänster för både städning och flytt. Vi är
          dedikerade till att underlätta våra kunders vardag genom att erbjuda pålitliga och effektiva lösningar. Här är
          en översikt över de tjänster vi erbjuder:
        </p>

        <h4 style={{ color: "#28a745", fontWeight: "bold", marginTop: "20px" }}>Städtjänster</h4>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", textAlign: "justify" }}>
          Vi erbjuder ett brett spektrum av städtjänster som passar alla typer av bostäder och lokaler. Vi utför
          regelbundna hemstädningar för att hålla ditt hem fräscht och flyttstädningar för att säkerställa att din gamla
          bostad lämnas i perfekt skick.
        </p>

        <h4 style={{ color: "#28a745", fontWeight: "bold", marginTop: "20px" }}>Flyttjänster</h4>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", textAlign: "justify" }}>
          Vid flytt hjälper vi dig att göra hela processen smidig och stressfri. Vi erbjuder hjälp med bohagsflytt,
          kontorsflytt, packning och uppackning, samt transport av specialgods som konstverk eller antikviteter.
        </p>

        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", textAlign: "justify" }}>
          Vi på Addalia strävar alltid efter att ge våra kunder bästa möjliga service. Vår erfarna personal är här för att
          underlätta din vardag, så att du kan fokusera på det som verkligen betyder något för dig.
        </p>
      </div>

      {/* Contact Form */}
      <h2
        className="text-center mb-4"
        style={{
          fontWeight: "bold",
          color: "#004085",
          textShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        Kontakta Oss
      </h2>
      {messageStatus && (
        <div
          className={`alert ${
            messageStatus.includes("framgångsrikt") ? "alert-success" : "alert-danger"
          } text-center`}
          role="alert"
        >
          {messageStatus}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="shadow p-4 rounded bg-light"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ fontWeight: "bold" }}>
            Namn
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Skriv ditt namn"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ fontWeight: "bold" }}>
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Skriv din email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label" style={{ fontWeight: "bold" }}>
            Meddelande
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Skriv ditt meddelande här"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#004085",
              borderColor: "#004085",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
          >
            Skicka Meddelande
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
