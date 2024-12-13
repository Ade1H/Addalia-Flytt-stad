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
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, 0%)',
          color: '#fff',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
       <h4
  style={{
    fontSize: '4rem', // Standardstorlek
    marginTop: '-2rem', // Flyttar texten uppåt
    textAlign: 'center', // Justera centrerad text om behövs
    fontWeight: 'bold',
    textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',

  }}
>
  Välkommen till Addalia
</h4>

        <p
          style={{
            fontSize: '1.5rem', // Standardstorlek
            fontWeight: '300',
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',

          }}
        >
          Effektiva tjänster för dina behov
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
          left: '49%',
          width: '90%',
          transform: 'translateX(-50%)',
          zIndex: 3,
        }}
      >
        <Carousel />
      </div>
    </div>
  );
};

export default Hero;
