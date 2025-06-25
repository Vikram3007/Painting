import React, { useState, useRef } from 'react';
import Footer from './Footer';
import './style/Homepaint5.css';

const Homepaint5 = ({ faqRef }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

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
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div ref={faqRef} className="hp5-faq">
        <h2 className="hp5-faq-title">Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className="hp5-faq-item">
            <button
              className={`hp5-faq-question ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleFAQ(index);
              }}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              {item.question}
            </button>
            <p
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              ref={(el) => (contentRefs.current[index] = el)}
              className={`hp5-faq-answer ${openIndex === index ? 'show' : ''}`}
              style={{
                maxHeight:
                  openIndex === index && contentRefs.current[index]
                    ? `${contentRefs.current[index].scrollHeight}px`
                    : '0px',
              }}
            >
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
