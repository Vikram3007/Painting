import React, { useState } from 'react';
import './style/Homepaint1.css';

const Homepaint4 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="hp3-container">
        <img
          src="/clickimg2.webp"
          alt="Previe"
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
              {Array.from({ length: 9 }, (_, i) => (
                <img
                  key={i}
                  src={`/imge${i + 1}.webp`}
                  alt={`Gallery ${i + 1}`}
                  className="hp3-gallery-img"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepaint4;