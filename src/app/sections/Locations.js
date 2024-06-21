'use client';
import React from 'react';
import { useLayoutStore } from '@/store/layoutStore';

const Locations = () => {
  const isMobile = useLayoutStore((state) => state.isMobile);
  return (
    <div className="section-content" id="locations">
      <h2 className="section-title">Locations</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        fugit illo ratione nihil voluptates numquam natus facilis laudantium
        odit aliquid expedita accusantium odio similique doloremque totam
        molestias qui. Sapiente, omnis.
      </p>
      <br />
      <div className="locations-maps">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur totam quaerat deleniti quos illo vero quo, reiciendis
            quidem at sint debitis aliquam quod possimus saepe quis minima,
            dignissimos rerum ducimus!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur totam quaerat deleniti quos illo vero quo, reiciendis
            quidem at sint debitis aliquam quod possimus saepe quis minima,
            dignissimos rerum ducimus!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
