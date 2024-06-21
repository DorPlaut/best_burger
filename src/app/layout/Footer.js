import React from 'react';
import FooterScene from './3D/bottles/FooterScene';

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
        <span>All rights reservde for Best Burger </span>
        <h4>Need a website? Contact me now!</h4>
        <span>Build by Dor Plaut</span>
      </div>
    </footer>
  );
};

export default Footer;
