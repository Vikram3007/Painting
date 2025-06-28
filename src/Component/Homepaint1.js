import React from 'react';
import './style/Homepaint1.css';
import Homepaint2 from './Homepaint2';

const Homepaint1 = () => {
  return (
    <>
      <section className="hp1-container">
        {/* Left Side */}
        <div className="hp1-left">
          <h1 className="hp1-title">Full Home Painting</h1>

          <div className="hp1-room-block">
            <img src="kitchen1.jpg" alt="Kitchen Interior" className="hp1-room-logo" />
            <p className="hp1-description">Kitchen</p>
          </div>

          <div className="hp1-room-block">
            <img src="restroom1.webp" alt="Restroom Interior" className="hp1-room-logo" />
            <p className="hp1-description">Restroom</p>
          </div>

          <div className="hp1-room-block">
            <img src="bedroom.jpg" alt="Bedroom Interior" className="hp1-room-logo" />
            <p className="hp1-description">Bedroom</p>
          </div>

          <div className="hp1-btn-group">
            <button type="button" className="hp1-btn-primary">Book Free Consultation</button>
            <button type="button" className="hp1-btn-secondary">View Services</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="hp1-right">
          <img src="home1 .jpg" alt="Home Painting Example" className="hp1-image" />
        </div>
      </section>

      <Homepaint2 />
    </>
  );
};

export default Homepaint1;
