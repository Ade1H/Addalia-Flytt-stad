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
    <div className="container my-5">


      <h2 className="text-center mb-4">Kontakta Oss</h2>
      <div className="d-flex flex-column align-items-center my-4">
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
