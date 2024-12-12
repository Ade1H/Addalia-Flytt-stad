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
        height: '100vh', // Full skärmhöjd
        width: '100%',
        overflow: 'hidden', // För att undvika överflöd


      }}
    >
      {/* Texten i hero-sektionen */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -20%)',
          color: 'white',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
       <h4
  style={{
    fontSize: '3rem', // Standardstorlek
    marginTop: '-2rem', // Flyttar texten uppåt
    textAlign: 'center', // Justera centrerad text om behövs
   
  }}
>
  Välkommen till Addalia
</h4>

        <p
          style={{
            fontSize: '1.5rem', // Standardstorlek
          }}
        >
          Effektiva tjänster
        </p>
      </div>

      {/* Overlay för att ge en mörkare effekt på bakgrunden */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      ></div>

      {/* Karusell ovanpå hero-bilden */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          width: '100%',
          zIndex: 3,
        }}
      >
        <Carousel />
      </div>
    </div>
  );
};

export default Hero;
