import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Homepaint3 from './Homepaint3';
import './style/Homepaint1.css';

const Homepaint2 = () => {
  const [count, setCount] = useState(0);
  const [showAmazonOffer, setShowAmazonOffer] = useState(false);

  const handleAdd = () => setCount(1);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 0));
  const toggleOffer = () => setShowAmazonOffer((prev) => !prev);

  return (
    <>
      <div className="hp2-container">
        <div className="hp2-wrapper">
          <div className="hp2-left">
            <h1 className="hp2-title">Full Home Painting Consultation</h1>
            <p className="hp2-rating">★ 4.78 (30K reviews)</p>
            <div className="hp2-counter">
              {count === 0 ? (
                <button onClick={handleAdd} className="hp2-add-btn">
                  Add
                </button>
              ) : (
                <div className="hp2-counter-box">
                  <button onClick={handleDecrement} className="hp2-btn">–</button>
                  <span className="hp2-count">{count}</span>
                  <button onClick={handleIncrement} className="hp2-btn">+</button>
                </div>
              )}
            </div>
            <p className="hp2-price">
              ₹49 <span className="dot">•</span> 60 mins
            </p>
            <div className="hp2-line"></div>
          </div>
          <div className="hp2-right">
            <div className="hp2-offer">
              <CheckCircle className="icon green" />
              <div>
                <p className="hp2-offer-title">Up to ₹150 Cashback</p>
                <p className="hp2-offer-sub">Valid for Paytm UPI Only</p>
                {!showAmazonOffer && (
                  <div onClick={toggleOffer} className="hp2-toggle">
                    <p>View More Offers</p>
                    <ChevronDown className="icon small" />
                  </div>
                )}
              </div>
            </div>
            {showAmazonOffer && (
              <>
                <div className="hp2-offer">
                  <CheckCircle className="icon green" />
                  <div>
                    <p className="hp2-offer-title">Amazon Cashback up to ₹100</p>
                    <p className="hp2-offer-sub">Via Amazon Pay Balance</p>
                  </div>
                </div>
                <div onClick={toggleOffer} className="hp2-toggle indent">
                  <p>View Less Offers</p>
                  <ChevronUp className="icon small" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {count > 0 && (
        <div className="hp2-proceed-container">
          <div className="hp2-proceed-btn">
            <p className="hp2-proceed-text">Proceed</p>
          </div>
        </div>
      )}
      <Homepaint3 />
    </>
  );
};

export default Homepaint2;