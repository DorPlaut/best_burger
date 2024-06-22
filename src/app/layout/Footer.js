import React from 'react';
import FooterScene from './3D/bottles/FooterScene';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="footer-scene">
        <FooterScene />
      </div>

      <div
        className="trantision-blob-white"
        style={{ height: '3rem', top: '-3rem' }}
      />
      <div className="footer-inner">
        <div className="hero-logo">
          <div className="img-container ">
            <Image
              src={'/images/logo.svg'}
              layout="fill"
              objectFit="contain"
              alt="logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <span>All rights reservde for Best Burger </span>
        <h4>Need a website? Contact me now!</h4>
        <span>Build by Dor Plaut</span>
      </div>
    </footer>
  );
};

export default Footer;
