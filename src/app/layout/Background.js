'use client';
import React, { useEffect, useState } from 'react';
import { PiStarFourBold } from 'react-icons/pi';

const Background = () => {
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
            <Stras color="red" />
            <div className="trantision-blob-white" />
          </div>
        ) : (
          <div className="background-blob-red" key={i}>
            <Stras color="white" />
            <div className="trantision-blob-red" />
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

const Stras = ({ color }) => {
  return (
    <div>
      <div className={`background-stars ${color}`}>
        <div className="background-stars-left">
          <PiStarFourBold className="star" />
          <PiStarFourBold className="star-mid" />
          <PiStarFourBold className="star" />
          <PiStarFourBold className="star-mid" />
          <PiStarFourBold className="star" />
          <PiStarFourBold className="star-mid" />
          <PiStarFourBold className="star" />
          <PiStarFourBold className="star-mid" />
          <PiStarFourBold className="star" />
          <PiStarFourBold className="star-mid" />
          <PiStarFourBold className="star" />
        </div>
        <div className="background-stars-right" style={{ rotate: '180deg' }}>
          <PiStarFourBold className="star" />
          <PiStarFourBold className="star-mid" />
          <PiStarFourBold className="star" />
          <PiStarFourBold className="star-mid" />
          <PiStarFourBold className="star" />
          <PiStarFourBold className="star-mid" />
          <PiStarFourBold className="star" />
          <PiStarFourBold className="star-mid" />
          <PiStarFourBold className="star" />
          <PiStarFourBold className="star-mid" />
          <PiStarFourBold className="star" />
        </div>
      </div>
    </div>
  );
};
