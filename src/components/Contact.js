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
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#004085' }}>
          Kontakta Oss
        </h2>

        {/* Contact Button */}
        <div className="text-center my-4">
          <p className="text-muted mb-3">Vi ser fram emot att höra från dig!</p>
          <a
            href="tel:+4672-858 05 98"
            className="btn btn-outline-primary btn-lg shadow px-4 py-2"
            style={{
              borderRadius: '30px',
              fontWeight: 'bold',
              color: '#004085',
              borderColor: '#004085',
            }}
            aria-label="Call us"
          >
            <i className="bi bi-telephone-fill me-2"></i> 0102008184
          </a>
        </div>

        {/* Message Status Alert */}
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

        {/* Contact Form and Map in one row */}
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6">
            <form
              onSubmit={handleSubmit}
              className="p-4 shadow-lg rounded bg-light"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
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
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
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
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">
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
                  disabled={isSending}
                >
                  {isSending ? 'Skickar...' : 'Skicka Meddelande'}
                </button>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div className="col-md-6">
            <h3 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#004085' }}>
              Vår Plats
            </h3>
            <MapSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
