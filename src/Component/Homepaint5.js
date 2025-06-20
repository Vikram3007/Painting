import React, { useState } from 'react';
import Footer from './Footer';
import './style/Homepaint1.css';

const Homepaint5 = ({ faqRef }) => {
  const [showModal, setShowModal] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What services do you offer?',
      answer: 'We offer complete home painting services including interior, exterior, and texture painting.',
    },
    {
      question: 'How do I schedule a consultation?',
      answer: 'You can schedule a consultation through our website contact form or by calling our customer support.',
    },
    {
      question: 'Do you provide a warranty?',
      answer: 'Yes, we offer up to 5 years of warranty on select painting services.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects are completed within 3 to 7 days depending on the size and scope of work.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="hp5-center">
        <img src="/images.webp" alt="Main Decorative" className="hp5-image" loading="lazy" />
      </div>
      <div className="hp5-center">
        <img
          src="/clickimg3.webp"
          alt="Click to View More"
          className="hp5-image hp5-clickable"
          onClick={() => setShowModal(true)}
          loading="lazy"
        />
      </div>
      {showModal && (
        <div className="hp5-backdrop" onClick={() => setShowModal(false)}>
          <div className="hp5-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="hp5-close-btn"
              onClick={() => setShowModal(false)}
              aria-label="Close Modal"
            >
              ×
            </button>
            <div className="hp5-scrollable">
              {['3img1', '3img2', '3img3'].map((img, i) => (
                <img
                  key={i}
                  src={`/${img}.webp`}
                  alt={`Preview ${i + 1}`}
                  className="hp5-scroll-img"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {['images3', 'images4', 'images5', 'images6'].map((src, index) => (
        <div key={index} className="hp5-center">
          <img
            src={`/${src}.webp`}
            alt={`Decorative ${index + 1}`}
            className="hp5-image"
            loading="lazy"
          />
        </div>
      ))}
      <div ref={faqRef} className="hp5-faq">
        <h2 className="hp5-faq-title">Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className="hp5-faq-item">
            <button
              className={`hp5-faq-question ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              {item.question}
            </button>
            <p className={`hp5-faq-answer ${openIndex === index ? 'show' : ''}`}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Homepaint5;