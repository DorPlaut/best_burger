'use client';
import Image from 'next/image';
import React, { use, useEffect, useState } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

const Header = () => {
  // local state
  const [logoOpacity, setLogoOpacity] = useState(1);
  const [logoScale, setLogoScale] = useState(1);
  // handle scroll
  const handleScroll = () => {
    // reduce logo opacity on scroll
    const screenHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const newOpacity = 1 - scrollPosition / (screenHeight - screenHeight / 2);
    setLogoOpacity(newOpacity);
    // increse logo scale on scroll
    const newScale = 1 + scrollPosition / (screenHeight - screenHeight / 30);
    setLogoScale(newScale);
  };
  // trigger function on scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="header" id="home">
      <div className="logo">
        <div
          className="img-container"
          style={{ opacity: logoOpacity, scale: logoScale }}
        >
          <Image
            src={'/images/logo.svg'}
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
      </div>
      <a href="#nav" className="btn round-icon-btn">
        <FaAngleDoubleDown />
      </a>
    </div>
  );
};

export default Header;
