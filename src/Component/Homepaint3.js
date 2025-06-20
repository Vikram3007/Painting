import React, { useState } from 'react';
import Homepaint4 from './Homepaint4';
import './style/Homepaint3.css';

const Homepaint3 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Clickable Preview */}
      <div className="hp3-container">
        <img
          src="/img1.webp"
          alt="Preview"
          className="hp3-image"
          onClick={() => setShowModal(true)}
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="hp3-backdrop" onClick={() => setShowModal(false)}>
          <div className="hp3-modal" onClick={(e) => e.stopPropagation()}>
            <button className="hp3-close-btn" onClick={() => setShowModal(false)}>×</button>

            <div className="hp3-gallery-scroll">
              {['img3', 'img2', 'img4', 'img5'].map((img, i) => (
                <img key={i} src={`/${img}.webp`} alt={`img${i}`} className="hp3-gallery-img" />
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
