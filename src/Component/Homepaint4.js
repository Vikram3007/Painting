import React from 'react';
import './style/Homepaint4.css';
import Homepaint5 from './Homepaint5';

const Homepaint4 = () => {
  return (
    <>
      <div className="hp4-wrapper">
        <div className="hp4-content">
          <h2 className="hp4-title">Complete Painting & Safe Room Services</h2>
          <p className="hp4-description">
            Experience hassle-free home transformation with our expert painting solutions. We ensure:
          </p>
          <ul className="hp4-list">
            <li>✅ Interior & Exterior Full Home Painting</li>
            <li>✅ Safe & Covered Room Setup</li>
            <li>✅ Eco-Friendly Paints with No Odour</li>
            <li>✅ Trained Professionals with Safety Gear</li>
            <li>✅ Furniture Protection & Post-Cleaning</li>
          </ul>
          <button className="hp4-button">
            <strong>View Details</strong>
          </button>
        </div>
        <div className="hp4-image-container">
          <img src="home1 .jpg" alt="Safe Room Setup" className="hp4-image" />
        </div>
      </div>
      <Homepaint5 />
    </>
  );
};

export default Homepaint4;