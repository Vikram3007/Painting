import React, { useState } from 'react';
import Homepaint4 from './Homepaint4';
import './style/Homepaint3.css';

const services = [
  {
    key: 'interiors',
    title: 'Interiors & Exteriors',
    description: 'Colour Your Home Inside Out',
    image: '/paint1.jpg',
    modalImage: '/img3.webp',
  },
  {
    key: 'wood',
    title: 'Wood Polish',
    description: 'Shine Your Home Like Never Before',
    image: '/paint2.jpeg',
    modalImage: '/img4.webp',
  },
  {
    key: 'waterproofing',
    title: 'Waterproofing',
    description: 'Seal, Shield & Sustain Your Home',
    image: '/paint3.jpg',
    modalImage: '/img5.webp',
  },
  {
    key: 'texture',
    title: 'Texture',
    description: 'Elevate Your Space Wall Beautification',
    image: '/paint4.webp',
    modalImage: '/img2.webp',
  },
];

const Homepaint3 = () => {
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [buttonModalOpen, setButtonModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [singleImage, setSingleImage] = useState('');

  // 🟥 Card click → show only that image
  const openCardModal = (img) => {
    setSingleImage(img);
    setCardModalOpen(true);
  };

  const closeCardModal = () => {
    setCardModalOpen(false);
    setSingleImage('');
  };

  // 🟩 Button click → one-by-one navigation
  const openButtonModal = () => {
    setButtonModalOpen(true);
    setCurrentIndex(0);
  };

  const closeButtonModal = () => setButtonModalOpen(false);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <>
      <div className="hp3-wrapper">
        <h1 className="hp3-heading">For All Your Home Painting Needs</h1>

        <div className="hp3-grid">
          {services.map((svc) => (
            <div className="hp3-card" key={svc.key} onClick={() => openCardModal(svc.modalImage)}>
              <img src={svc.image} alt={svc.title} className="hp3-image" />
              <div className="hp3-text">
                <h2>{svc.title}</h2>
                <p>{svc.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="hp3-button" onClick={openButtonModal}>Know More →</button>
      </div>

      {/* 🔴 Card Modal - only 1 image */}
      {cardModalOpen && (
        <div className="hp3-backdrop" onClick={closeCardModal}>
          <div className="hp3-modal-single" onClick={(e) => e.stopPropagation()}>
            <button className="hp3-close-btn" onClick={closeCardModal}>&times;</button>
            <img
              src={singleImage}
              alt="Selected"
              className="hp3-popup-image"
            />
          </div>
        </div>
      )}

      {/* 🟢 Button Modal - one by one slider */}
      {buttonModalOpen && (
        <div className="hp3-backdrop" onClick={closeButtonModal}>
          <div className="hp3-modal-single" onClick={(e) => e.stopPropagation()}>
            <button className="hp3-close-btn" onClick={closeButtonModal}>&times;</button>
            <img
              src={services[currentIndex].modalImage}
              alt="Single View"
              className="hp3-popup-image"
            />
            <div className="hp3-nav-buttons">
              <button onClick={goPrev}>&larr; Prev</button>
              <button onClick={goNext}>Next &rarr;</button>
            </div>
          </div>
        </div>
      )}

      <Homepaint4 />
    </>
  );
};

export default Homepaint3;
