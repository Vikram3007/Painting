import React, { useState } from 'react';
import Footer from './Footer';
import './style/Homepaint5.css';

const Homepaint5 = ({ faqRef }) => {
  const [showModal, setShowModal] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer complete home painting services including interior, exterior, and texture painting."
    },
    {
      question: "How do I schedule a consultation?",
      answer: "You can schedule a consultation through our website contact form or by calling our customer support."
    },
    {
      question: "Do you provide a warranty?",
      answer: "Yes, we offer up to 5 years of warranty on select painting services."
    },
    {
      question: "How long does a typical project take?",
      answer: "Most projects are completed within 3 to 7 days depending on the size and scope of work."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* First Image */}
      <div className="hp5-center">
        <img src="/images.webp" alt="Main Decorative" className="hp5-image" />
      </div>

      {/* Clickable Image to Open Modal */}
      <div className="hp5-center">
        <img
          src="/clickimg3.webp"
          alt="Click to View More"
          className="hp5-image hp5-clickable"
          onClick={() => setShowModal(true)}
        />
      </div>

      {/* Scrollable Modal */}
      {showModal && (
        <div className="hp5-backdrop">
          <div className="hp5-modal">
            <button
              className="hp5-close-btn"
              onClick={() => setShowModal(false)}
              aria-label="Close Modal"
            >
              &times;
            </button>

            <div className="hp5-scrollable">
              <img src="/3img1.webp" alt="Preview 1" className="hp5-scroll-img" />
              <img src="/3img2.webp" alt="Preview 2" className="hp5-scroll-img" />
              <img src="/3img3.webp" alt="Preview 3" className="hp5-scroll-img" />
            </div>
          </div>
        </div>
      )}

      {/* Additional Images */}
      {["images3.webp", "images4.webp", "images5.webp", "images6.webp"].map((src, index) => (
        <div key={index} className="hp5-center">
          <img src={`/${src}`} alt={`Decorative ${index + 1}`} className="hp5-image" />
        </div>
      ))}

      {/* FAQ Section */}
      <div ref={faqRef} className="hp5-faq">
        <h2 className="hp5-faq-title">Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className="hp5-faq-item">
            <button
              className={`hp5-faq-question ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
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
