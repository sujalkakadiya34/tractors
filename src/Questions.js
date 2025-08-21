import React, { useState } from 'react';
import './Blogs.css';
import faqData from './Questions.json';  

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='Questions-Asked-Frequently'>
      <div className='Questions-Asked'>
        <p className='Questions-Asked-p1'>Frequently Asked Questions</p>
        <h1 className='Questions-Asked-h1'>Your Questions, Answered!</h1>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${activeIndex === index ? "active" : ""}`} 
              onClick={() => toggleFaq(index)}
            >
            <span style={{ color: activeIndex === index ? "#f26b5c" : "#222" }}>
            {item.question}
            </span>
        <span 
            className="faq-icon" 
            style={{ color: activeIndex === index ? "#f26b5c" : "#666" }}
            >
            {activeIndex === index ? "−" : "+"}
        </span>

            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
