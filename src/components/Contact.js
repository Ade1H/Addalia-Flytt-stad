import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import MapSection from './MapSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [messageStatus, setMessageStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        'service_zs1rvlc',
        'template_lwt6fbd',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'Kgzm3fkD__CsILSig'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessageStatus('Ditt meddelande har skickats framgångsrikt!');
          setFormData({ name: '', email: '', message: '' });
          setIsSending(false);
        },
        (error) => {
          console.error('FAILED...', error);
          setMessageStatus('Något gick fel. Försök igen senare.');
          setIsSending(false);
        }
      );
  };

  return (
    <>
      {/* Meta tags for SEO and social sharing */}
      <Helmet>
        <title>Kontakta Oss - Addalia</title>
        <meta name="description" content="Kontakta oss på Addalia för bygg, flytt, och städ och andra tjänster. Vi ser fram emot att höra från dig!" />
        <meta name="keywords" content=" flytt, städning, övriga tjänster kontakt, Addalia" />
        <meta name="author" content="Addalia" />
        <meta property="og:title" content="Kontakta Oss - Addalia" />
        <meta property="og:description" content="Kontakta oss för flytt, och städ, andra tjänster. Vi är här för att hjälpa dig!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://addalia.se/kontakta-oss" />
        <meta property="og:image" content="/path-to-your-image.jpg" />
      </Helmet>

      <div className="container my-5">
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#004085', marginTop:"100px" }}>
          Kontakta Oss
        </h2>
        <div className="d-flex flex-column align-items-center my-4">
          <p className="text-center mb-3 text-muted">Vi ser fram emot att höra från dig!</p>
          <a
            href="tel:+46123456789"
            className="btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center px-4 shadow"
            style={{
              borderRadius: '30px',
              fontWeight: 'bold',
              color: '#004085',
              borderColor: '#004085',
            }}
            aria-label="Call us at 072-858 05 98"
          >
            <i className="bi bi-telephone-fill me-2"></i> 072-858 05 98
          </a>
        </div>
        {messageStatus && (
          <div
            className={`alert ${
              messageStatus.includes('framgångsrikt') ? 'alert-success' : 'alert-danger'
            } text-center`}
            role="alert"
            style={{
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            {messageStatus}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="p-4 shadow rounded bg-light"
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ fontWeight: 'bold' }}>
              Namn
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Skriv ditt namn"
              value={formData.name}
              onChange={handleChange}
              required
              aria-describedby="nameHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold' }}>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Skriv din email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label" style={{ fontWeight: 'bold' }}>
              Meddelande
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              placeholder="Skriv ditt meddelande här"
              value={formData.message}
              onChange={handleChange}
              required
              aria-describedby="messageHelp"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary btn-lg px-5"
              style={{
                backgroundColor: '#004085',
                borderColor: '#004085',
                borderRadius: '30px',
                fontWeight: 'bold',
              }}
              disabled={isSending} // Disable button while sending
            >
              {isSending ? 'Skickar...' : 'Skicka Meddelande'}
            </button>
          </div>
        </form>

        {/* Map Section */}
        <div className="mt-5">
          <h3 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#004085' }}>
            Vår Plats
          </h3>
          <MapSection />
        </div>
      </div>
    </>
  );
};

export default Contact;
