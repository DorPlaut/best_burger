import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="hero section-content" id="nav">
      <div className="hero-logo">
        <div className="img-container ">
          <Image
            src={'/images/logo.svg'}
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
      </div>
      <h1 style={{ display: 'none' }}>Best Burger</h1>
      <h2>Home Of The Best Burger</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam</p>
      <a href="#menu" className="btn hero-btn">
        Menu
      </a>
      <a href="#locations" className="btn hero-btn">
        Locations
      </a>
      <a href="#order" className="btn hero-btn">
        Order Now
      </a>
    </div>
  );
};

export default Hero;
