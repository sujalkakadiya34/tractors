import React, { useState } from 'react';
import testimonials from './Testimonials.json';
import './Blogs.css';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, location, story, image } = testimonials[index];

  return (
    <div className="testimonial-wrapper">
      
      <div className="testimonial-section">
        <h4 className="testimonial-subtitle">Testimonials</h4>
        <h2 className="testimonial-heading">Real Stories from <br />Farmer</h2>
        <p className="testimonial-text">
          As a tractor company, we know our success <br></br> 
          comes from the commitment and continued <br></br>
          support of the farmers who rely on our machines <br></br>
          every day.
        </p>
        <div className="testimonial-buttons">
          <button onClick={handlePrev} className="nav-btn">←</button>
          <button onClick={handleNext} className="nav-btn">→</button>
        </div>
      </div>


      <div className="testimonial-card">
        <div className="testimonial-image-wrapper">
          <img src={image} alt={name} className="testimonial-image" />
        </div>
        <div className="testimonial-content">
          <div className="quote-wrapper">
            <span className="quote-icon top">“</span>
            <p className="testimonial-story">{story}</p>
            <span className="quote-icon bottom">”</span>
          </div>
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-location">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
