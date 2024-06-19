'use client';
import React, { useEffect, useState } from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';

const BackUpBtn = () => {
  // local state
  const [btnStyle, setBtnStyle] = useState({
    opacity: 0,
    pointerEvents: 'none',
  });
  // trigger the animation after scrolling full window height
  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight - window.innerHeight / 2)
      setBtnStyle({ opacity: 1, pointerEvents: 'all' });
    //
    else setBtnStyle({ opacity: 0, pointerEvents: 'none' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    handleScroll();
  }, []);
  return (
    <div className="back-up-btn">
      <a href="#home" className="btn round-icon-btn" style={btnStyle}>
        <FaAngleDoubleUp />
      </a>
    </div>
  );
};

export default BackUpBtn;
