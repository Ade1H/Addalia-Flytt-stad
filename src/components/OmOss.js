import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [messageStatus, setMessageStatus] = useState(''); // Status for success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_zs1rvlc', // Replace with your EmailJS service ID
        'template_lwt6fbd', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'Kgzm3fkD__CsILSig' // Replace with your EmailJS user ID (or public key)
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessageStatus('Ditt meddelande har skickats framgångsrikt!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('FAILED...', error);
          setMessageStatus('Något gick fel. Försök igen senare.');
        }
      );
  };

  return (
    <div className="container my-5" >
      <div className="services-section" style={{ marginTop: "120px" }}>
        <h3 className="text-center mb-4">Våra Tjänster</h3>
        <p>
          Hos oss på Addalia erbjuder vi ett brett utbud av professionella tjänster för både städning och flytt. Vi är dedikerade till att underlätta våra kunders vardag genom att erbjuda pålitliga och effektiva lösningar. Oavsett om du behöver hjälp med en grundlig hemstädning eller om du ska flytta till ett nytt hem, är vi här för att hjälpa till. Här är en översikt över de tjänster vi erbjuder:
        </p>

        <h4>Städtjänster</h4>
        <p>
          Vi erbjuder ett brett spektrum av städtjänster som passar alla typer av bostäder och lokaler. Vi utför regelbundna hemstädningar för att hålla ditt hem fräscht, flyttstädningar för att säkerställa att din gamla bostad lämnas i perfekt skick, och storstädning inför speciella tillfällen. Våra fönsterputsningstjänster gör att dina fönster glänser, och vi erbjuder även professionell kontorsstädning för att skapa en ren och trivsam arbetsmiljö. Vid byggprojekt ser vi till att byggstädningen sker på ett effektivt sätt innan fastigheten tas i bruk, och vi har även erfarenhet av sanering och hantering av starkt nedsmutsade miljöer. Oavsett om det handlar om att tvätta möbler eller rensa trapphus, är vårt mål att skapa en ren och inbjudande miljö för dig.
        </p>

        <h4>Flyttjänster</h4>
        <p>
          Vid flytt hjälper vi dig att göra hela processen smidig och stressfri. Vi erbjuder hjälp med bohagsflytt, där vi tar hand om hela flytten, inklusive möbler och ömtåliga föremål. För företag erbjuder vi kontorsflytt, där vi ser till att din verksamhet kan fortsätta utan avbrott. Vi hjälper även till med packning och uppackning, vilket gör det lättare för dig att fokusera på andra delar av flytten. Vi har erfarenhet av att hantera tunga och skrymmande föremål, som pianon eller kassaskåp, och vi erbjuder även tjänster för att montera och demontera möbler. För specialgods, som konstverk eller antikviteter, erbjuder vi säker transport. Vi förvarar även dina tillhörigheter på ett tryggt sätt i magasin om du behöver förvara dem under en period, och vi kan hjälpa dig med utrensning och återvinning av gamla eller oönskade saker. Vi erbjuder dessutom intern flytt inom byggnader samt akutflytt i nödsituationer.
        </p>

        <p>
          Vi på Addalia strävar alltid efter att ge våra kunder bästa möjliga service, oavsett om det handlar om städning eller flytt. Vår erfarna personal är här för att underlätta din vardag, så att du kan fokusera på det som verkligen betyder något för dig.
        </p>
      </div>

      <h2 className="text-center mb-4">Kontakta Oss</h2>
      {messageStatus && (
        <div
          className={`alert ${
            messageStatus.includes('framgångsrikt') ? 'alert-success' : 'alert-danger'
          }`}
          role="alert"
        >
          {messageStatus}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Namn
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Meddelande
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Skicka Meddelande
        </button>
      </form>
    </div>
  );
};

export default Contact;
