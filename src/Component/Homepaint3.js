import React, { useState } from 'react';
import Homepaint4 from './Homepaint4';
import './style/Homepaint1.css';

const Homepaint3 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="hp3-container">
        <img
          src="/img1.webp"
          alt="Preview"
          className="hp3-image"
          onClick={() => setShowModal(true)}
          loading="lazy"
        />
      </div>
      {showModal && (
        <div className="hp3-backdrop" onClick={() => setShowModal(false)}>
          <div className="hp3-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="hp3-close-btn"
              onClick={() => setShowModal(false)}
              aria-label="Close Modal"
            >
              ×
            </button>
            <div className="hp3-gallery-scroll">
              {['img3', 'img2', 'img4', 'img5'].map((img, i) => (
                <img
                  key={i}
                  src={`/${img}.webp`}
                  alt={`Gallery ${i + 1}`}
                  className="hp3-gallery-img"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <Homepaint4 />
    </>
  );
};

export default Homepaint3;