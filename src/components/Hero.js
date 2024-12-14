import React from 'react';
import Carousel from './Carousel';
import HuvudBild from '../assets/images/HuvudBild.jpg';

const Hero = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${HuvudBild})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Mörk overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* Text-overlay */}
      <div
        style={{
          position: 'absolute',
          top: '35%', // Justerat för att flytta texten högre upp
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
          }}
        >
          Välkommen till Addalia
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: '300',
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
            marginTop: '1rem',
          }}
        >
          Effektiva tjänster för dina behov
        </p>
      </div>

      {/* Karusell */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          width: '90%',
        }}
      >
        <Carousel />
      </div>
    </div>
  );
};

export default Hero;
