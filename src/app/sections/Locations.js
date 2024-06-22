'use client';
import React from 'react';
import { useLayoutStore } from '@/store/layoutStore';
import NewsLetter from './NewsLetter';

const Locations = () => {
  const isMobile = useLayoutStore((state) => state.isMobile);
  return (
    <div className="section-content" id="locations">
      <h2 className="section-title">Locations</h2>
      <h3>Come visit us in any of out locations</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        fugit illo ratione nihil voluptates.
      </p>
      <div className="locations-maps">
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527998699!2d-74.14448787425354!3d40.697631233397885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sil!4v1719005371762!5m2!1sen!2sil"
            // width="600"
            // height="450"
            style={{
              border: 0,
              width: '100%',
              height: '100%',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="location-info">
            <span>
              Best Burger Location 1 <br />
              Location address,Location number, etc..
            </span>
          </div>
        </div>

        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.04410562495!2d-118.74137439752133!3d34.0206084680616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sil!4v1719003575636!5m2!1sen!2sil"
            // width="600"
            // height="450"
            style={{
              border: 0,
              width: '100%',
              height: '100%',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="location-info">
            <span>
              Best Burger Location 2 <br />
              Location address,Location number, etc..
            </span>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Locations;
