import Image from 'next/image';
import React from 'react';

const MenuItem = ({ item }) => {
  const { item_name, item_description, item_price, item_category, item_image } =
    item;
  return (
    <div className="menu-item-inner">
      <div className="derken-filter"></div>
      <div className="img-container menu-img">
        <Image
          src={item_image}
          alt={item_name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="item-info">
        <div className="item-title">
          <h3>{item_name} </h3>
          <span>{item_price}$</span>
        </div>
        <p>{item_description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
