import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import PrisFlyttstadning from './PrisFlyttstadning';

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    dimensions: "",
    postalCode: "",
    email: "",
    phone: "",
    propertyType: "",
    serviceType: "",
   customerMessage: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (
      !formData.dimensions ||
      !formData.postalCode ||
      !formData.email ||
      !formData.phone ||
      !formData.propertyType ||
      !formData.serviceType
    ) {
      setMessage("Alla fält måste fyllas i.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_zs1rvlc", // Replace with your EmailJS Service ID
        "template_5a6bix8", // Replace with your EmailJS Template ID
        {
          dimensions: formData.dimensions,
          postalCode: formData.postalCode,
          email: formData.email,
          phone: formData.phone,
          propertyType: formData.propertyType,
          serviceType: formData.serviceType,
          customerMessage: formData.customerMessage
        },
        "Kgzm3fkD__CsILSig" // Replace with your EmailJS Public Key (User ID)
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setMessage("Offertförfrågan skickad!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          setMessage("Något gick fel, försök igen senare.");
        }
      );
  };

  return (
    <div  style={{ marginTop: "120px" }} >
      <h2 className="text-center">Få en kostnadsfri offert</h2>
      <div className="d-flex flex-column align-items-center my-4" >
        <p className="text-center mb-3"></p>
        <a
  href="tel:+46123456789"
  className="btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center px-4 shadow"
  style={{ borderRadius: "30px", fontWeight: "bold" }}
  aria-label="Call us at 072-858 05 98"
>
  <i className="bi bi-telephone-fill me-2"></i> 072-858 05 98
</a>

      </div>

      {message && (
        <div
          className={`alert ${
            message.includes("fel") ? "alert-danger" : "alert-success"
          }`}
          role="alert"
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label htmlFor="dimensions" className="form-label">
            Mått
          </label>
          <input
            type="text"
            id="dimensions"
            name="dimensions"
            className="form-control"
            value={formData.dimensions}
            onChange={handleChange}
            placeholder="Ange mått (t.ex. 2x2x2m)"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postalCode" className="form-label">
            Postnummer
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            className="form-control"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Ange postnummer"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ange e-postadress"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Telefonnummer
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ange telefonnummer"
            required
            pattern="^[0-9]{10}$"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="propertyType" className="form-label">
            Typ av Bostad
          </label>
          <select
            id="propertyType"
            name="propertyType"
            className="form-select"
            value={formData.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">Välj typ av bostad</option>
            <option value="villa">Villa</option>
            <option value="radhus">Radhus</option>
            <option value="lagenhet">Lägenhet</option>
            <option value="annat">Annat</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label">
            Typ av Tjänst
          </label>
          <select
            id="serviceType"
            name="serviceType"
            className="form-select"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Välj typ av tjänst</option>
            <option value="stad">Städtjänster</option>
            <option value="flytt">Flyttjänster</option>
          </select>

        </div>
        <div className="mb-3">
          <label htmlFor="customerMessage" className="form-label">
            Ditt meddelande
          </label>
          <textarea
            id="customerMessage"
            name="customerMessage"
            className="form-control"
            value={formData.customerMessage}
            onChange={handleChange}
            placeholder="Skriv ett meddelande eller ange specifika önskemål här"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Skicka offert
        </button>
      </form>
      <div className="container">
          <PrisFlyttstadning />
        </div>
    </div>
  );
};

export default QuoteRequest;
