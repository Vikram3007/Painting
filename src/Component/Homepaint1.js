import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Homepaint2 from './Homepaint2';
import Homepaint5 from './Homepaint5';
import './style/Homepaint1.css';

const Homepaint1 = () => {
  const images = ['/Slaider2.gif', '/slaider1.webp'];
  const [current, setCurrent] = useState(0);
  const faqRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goToImage = (index) => setCurrent(index);

  return (
    <>
      <div className="homepaint1-slider-full">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="slider-image-full"
          loading="lazy"
        />
        <button
          onClick={prevImage}
          className="slider-button-full left"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextImage}
          className="slider-button-full right"
          aria-label="Next Slide"
        >
          <ChevronRight size={28} />
        </button>
        <div className="slider-dots-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`dot-full ${current === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Homepaint2 />
      <Homepaint5 faqRef={faqRef} />
    </>
  );
};

export default Homepaint1;
