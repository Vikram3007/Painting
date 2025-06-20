import React, { useState } from 'react';
import './style/Homepaint4.css';

const Homepaint4 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="hp3-container">
        <img
          src="/clickimg2.webp"
          alt="Preview"
          className="hp3-image"
          onClick={() => setShowModal(true)}
        />
      </div>

      {showModal && (
        <div className="hp3-backdrop" onClick={() => setShowModal(false)}>
          <div className="hp3-modal" onClick={(e) => e.stopPropagation()}>
            <button className="hp3-close-btn" onClick={() => setShowModal(false)}>×</button>

            <div className="hp3-gallery-scroll">
              {Array.from({ length: 9 }, (_, i) => (
                <img key={i} src={`/imge${i + 1}.webp`} alt={`Gallery ${i + 1}`} className="hp3-gallery-img" />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepaint4;
