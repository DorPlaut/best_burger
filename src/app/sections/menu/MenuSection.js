'use client';
import React, { useEffect, useRef, useState } from 'react';
import MenuItem from './MenuItem';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { useLayoutStore } from '@/store/layoutStore';

const MenuSection = ({ data }) => {
  const { isMobile } = useLayoutStore((state) => state);
  // Sorting function
  const sortByCategory = (items) => {
    return items.sort((a, b) => {
      if (a.item_category > b.item_category) {
        return -1;
      }
      if (a.item_category < b.item_category) {
        return 1;
      }
      return 0;
    });
  };
  // set data, populate manu abd catefories
  const [filterdMenu, setFilterdMenu] = useState(sortByCategory(data));
  const categories = [
    'All',
    ...new Set(data.map((item) => item.item_category)),
  ];
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoverdCategory, setHoverdCategory] = useState('');
  // set category
  const filterItems = (category) => {
    if (category === 'All') {
      setActiveCategory(category);
      setFilterdMenu(sortByCategory(data));
      return;
    }
    const filteredData = data.filter((item) => item.item_category === category);
    setActiveCategory(category);
    console.log(category);
    setFilterdMenu(sortByCategory(filteredData));
  };

  // handle carusel logic
  const [menuOfset, setMenuOfset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(0);
  const minOffset = 0;
  // figure out if theres is more menu to left/right
  const containerRef = useRef();
  const caruselRef = useRef();
  // carusel is bigger then container, lets figure out by how much
  const handleCarusel = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const caruselWidth = caruselRef.current.scrollWidth;
    const caruselSize =
      (caruselWidth / containerWidth - 1) * 2 * (isMobile ? 100 : 50);
    setIsOverflowing(containerWidth < caruselWidth);
    setMenuOfset(0);
    setMaxOffset(caruselSize);
  };

  // handle moving the carusel
  const handleCaruselClick = (direction) => {
    console.log(menuOfset, maxOffset);
    if (direction === 'right') setMenuOfset(menuOfset + (isMobile ? 100 : 50));
    if (direction === 'left') setMenuOfset(menuOfset - (isMobile ? 100 : 50));
  };

  useEffect(() => {
    if (caruselRef.current && containerRef.current) {
      handleCarusel();
    }
  }, [filterdMenu]);
  useEffect(() => {
    const handleResize = () => {
      if (caruselRef.current && containerRef.current) {
        handleCarusel();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle carusel swipes for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    touchStartY.current = e.changedTouches[0].screenY;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    touchEndY.current = e.changedTouches[0].screenY;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    const deltaY = touchEndY.current - touchStartY.current;

    if (
      Math.abs(deltaX) > Math.abs(deltaY) &&
      Math.abs(deltaX) > minSwipeDistance
    ) {
      if (deltaX > 0 && menuOfset != 0) {
        handleCaruselClick('left');
      } else if (menuOfset <= maxOffset) {
        handleCaruselClick('right');
      }
    }
  };

  return (
    <div className="section-content" id="menu">
      <h2 className="section-title">Menu</h2>
      <div className="categories-btns">
        {categories.map((category, index) => (
          <button
            key={index}
            className="btn filter-btn"
            onClick={() => filterItems(category)}
            onMouseEnter={() => setHoverdCategory(category)}
            onMouseLeave={() => setHoverdCategory('')}
            style={{
              background:
                category == activeCategory || category == hoverdCategory
                  ? 'var(--secondery-color)'
                  : 'var(--primary-color)',
              color:
                category == activeCategory || category == hoverdCategory
                  ? 'var(--primary-color)'
                  : 'var(--secondery-color)',
              boxShadow:
                category == activeCategory || category == hoverdCategory
                  ? ' 0px 0px 0px 2px var(--primary-color) inset'
                  : '0px 0px 0px 0px var(--primary-color) inset',
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-items" ref={containerRef}>
        <div
          className="items-container"
          ref={caruselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ transform: `translateX(${-menuOfset}%)` }}
        >
          {filterdMenu.map((item) => (
            <div key={item.item_id} className="menu-item">
              {<MenuItem item={item} />}
            </div>
          ))}
        </div>
      </div>
      <div className="carusel-btns" style={{ opacity: isOverflowing ? 1 : 1 }}>
        <button
          className="btn round-icon-btn"
          onClick={() => handleCaruselClick('left')}
          style={{
            opacity: menuOfset != 0 ? 1 : 0,
            pointerEvents: menuOfset != 0 ? 'all' : 'none',
          }}
        >
          <FaAngleDoubleLeft />
        </button>

        <button
          className="btn round-icon-btn"
          onClick={() => handleCaruselClick('right')}
          style={{
            opacity: menuOfset <= maxOffset - 1 ? 1 : 0,
            pointerEvents: menuOfset <= maxOffset - 1 ? 'all' : 'none',
          }}
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
