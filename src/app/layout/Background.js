'use client';
import React, { useEffect, useState } from 'react';
import { PiStarFourBold } from 'react-icons/pi';
import { useLayoutStore } from '@/store/layoutStore';

const Background = () => {
  // handle mobile
  const { isMobile, setIsMobile } = useLayoutStore((state) => state);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // populate background
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Calculate the page content height
    const contentHeight = document.body.scrollHeight;
    // Get the viewport height
    const viewportHeight = window.innerHeight;
    // Calculate the number of sections needed
    const numberOfSections = Math.ceil(contentHeight / viewportHeight) - 1;

    // Create an array with the sections
    const newSections = [];
    for (let i = 0; i < numberOfSections; i++) {
      newSections.push(
        i % 2 === 0 ? (
          <div className="background-blob-white" key={i}>
            <Stras color="red" amount={12} />
            <div className="trantision-blob-white">
              <Stras color="red" amount={2} />
            </div>
          </div>
        ) : (
          <div className="background-blob-red" key={i}>
            <Stras color="white" amount={12} />
            <div className="trantision-blob-red">
              <Stras color="white" amount={2} />
            </div>
          </div>
        )
      );
    }

    // Update the state with the new sections
    setSections(newSections);
  }, []);

  return <div className="background">{sections}</div>;
};

export default Background;

const Stras = ({ color, amount }) => {
  // genrate the amount of stars based on amount var
  const stars = [];
  for (let i = 0; i < amount; i++) {
    if (i % 2 === 0)
      stars.push(
        <PiStarFourBold
          className="star"
          key={i}
          style={{ opacity: amount == 2 ? 0 : 1 }}
        />
      );
    else stars.push(<PiStarFourBold className="star-mid" key={i} />);
  }

  return (
    <div>
      <div className={`background-stars ${color}`}>
        <div className="background-stars-left">{stars}</div>
        <div
          className="background-stars-right"
          style={{ transform: 'scaleX(-1)' }}
        >
          {stars}
        </div>
      </div>
    </div>
  );
};
