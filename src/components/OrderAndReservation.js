import React, { useEffect } from 'react';

const OrderAndReservation = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <span
        className="glf-button"
        data-glf-cuid="7d1a74a0-ffc3-4a67-a817-9cfa1ebb93b2"
        data-glf-ruid="d650492b-2f2a-4d5c-b4e6-6502cd9ea617"
      >
        See MENU & Order
      </span>
      <span
        className="glf-button reservation"
        data-glf-cuid="7d1a74a0-ffc3-4a67-a817-9cfa1ebb93b2"
        data-glf-ruid="d650492b-2f2a-4d5c-b4e6-6502cd9ea617"
        data-glf-reservation="true"
      >
        Table Reservation
      </span>
    </div>
  );
};

export default OrderAndReservation;
