'use client';
import React, { useEffect, useRef, useState } from 'react';

const Section = ({ children }) => {
  const containerRef = useRef();
  const [opacity, setOpacity] = useState(0);

  //   chack if containerref is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setOpacity(1);
        } else {
          setOpacity(0);
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="section" ref={containerRef}>
      <div className="inner" style={{ opacity: opacity }}>
        {children}
      </div>
    </div>
  );
};

export default Section;
