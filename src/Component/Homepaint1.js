import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Homepaint2 from './Homepaint2';
import Homepaint5 from './Homepaint5';
import './style/Homepaint1.css';

const Homepaint1 = () => {
  const images = ['/Slaider2.gif', '/slaider1.webp'];
  const [current, setCurrent] = useState(0);
  const [showPromise, setShowPromise] = useState(true);
  const faqRef = useRef(null);

  // ✅ Fix: Safe use of faqRef inside useEffect
  useEffect(() => {
    const el = faqRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowPromise(!entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Auto-slide every 5 seconds
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
      {showPromise && (
        <div className="uc-promise-box">
          <p className="uc-promise-title">UC Promise</p>
          <div className="uc-promise-content">
            <div className="uc-promise-text">
              <p>✓ Verified Professionals</p>
              <p>✓ Hassle Free Booking</p>
              <p>✓ Transparent Pricing</p>
            </div>
            <img src="/logo.webp" alt="UC Logo" className="uc-promise-logo" />
          </div>
        </div>
      )}

      <div className="homepaint1-slider-full">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="slider-image-full fade"
        />
        <button onClick={prevImage} className="slider-button-full left">
          <ChevronLeft size={28} />
        </button>
        <button onClick={nextImage} className="slider-button-full right">
          <ChevronRight size={28} />
        </button>

        <div className="slider-dots-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`dot-full ${current === index ? 'active' : ''}`}
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
