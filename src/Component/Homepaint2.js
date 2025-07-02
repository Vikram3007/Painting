import React, { useEffect, useRef } from 'react';
import Homepaint3 from './Homepaint3';
import './style/Homepaint2.css';

const Homepaint2 = () => {
  const scrollRef = useRef(null);

  const images = [
    './slaid1.jpeg',
    './slaid2.jpeg',
    './slaid3.webp',
    './slaid4.webp',
    './slaid1.jpeg',
    './slaid2.jpeg',
    './slaid3.webp',
    './slaid4.webp',
  ];

  const scrollNext = () => {
    const container = scrollRef.current;
    const imageWidth = container.firstChild.clientWidth + 10; // 10 = gap
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 5) {
      // Reset to beginning
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      // Scroll 1 image at a time
      container.scrollBy({ left: imageWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(scrollNext, 2500); // 2.5s interval
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="carousel-container" ref={scrollRef}>
        {images.map((src, index) => (
          <img key={index} src={src} className="carousel-image" alt={`slide-${index}`} />
        ))}
      </div>
      <Homepaint3 />
    </>
  );
};

export default Homepaint2;
