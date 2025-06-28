import React, { useState } from 'react';
import './style/Homepaint5.css';

const Homepaint5 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'How long does full home painting take?',
      answer: 'For a standard 2BHK house, it usually takes 2 to 5 days depending on the size and type of painting.',
    },
    {
      question: 'Is it safe to stay at home during painting?',
      answer: 'Yes, we ensure complete safety with room covering, furniture protection, and hygienic painting practices.',
    },
    {
      question: 'Can painting be done if we are not at home?',
      answer: 'Absolutely. Our trusted professionals can handle the entire work safely, and we clean everything before handing over.',
    },
    {
      question: 'Do you help in choosing colors?',
      answer: 'Yes, we offer free color consultation and help you choose the right shades based on lighting and wall texture.',
    },
    {
      question: 'How much does painting cost?',
      answer: 'Pricing depends on the home size and paint type. We offer a free consultation and provide a detailed quotation.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="homepaint5-layout">
      {/* Contact Form Section */}
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">Have questions or need help with painting? We’re here to help.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{faq.question}</div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepaint5;
