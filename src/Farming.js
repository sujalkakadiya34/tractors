import React, { useState, useEffect } from 'react';
import foodData from './datas';

function Farming() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const total = foodData.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="farmer" style={{ padding: '40px' }} id="shubham">
      <p style={{ color: '#F46B35', fontSize: '25px' }} className="farmerp1">
        Featured Implements
      </p>
      <h1 style={{ fontSize: '45px' }}>Tractor’s Implements for Easy Farming</h1>
      <p style={{ color: 'gray', fontSize: '19px' }} className="farmerp2">
        Captain Tractors offers high-quality implements designed for versatility and efficiency.
        Built to last, our implements deliver exceptional performance.
      </p>

      <div className="slider-wrapper" style={{ textAlign: 'center' }}>
        <div className="slider-track" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          {[...Array(visibleCount)].map((_, i) => {
            const item = foodData[(startIndex + i) % total];
            const isCenter = i === 1 && visibleCount > 1; 

            return (
              <div
                key={item.id}
                className="food-wrapper"
                style={{
                  borderRadius: '10px',
                  padding: '10px',
                  width: isCenter ? '300px' : '220px',
                  transform: isCenter ? 'scale(1.05)' : 'scale(1)',
                  transition: '0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                <img
                  src={item.food_image}
                  alt={item.food_name}
                  style={{
                    width: '100%',
                    height: isCenter ? '180px' : '150px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <div className="food-card">
                  <h3>{item.food_name}</h3>
                  <p>{item.food_description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="slider-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button onClick={prevSlide} style={arrowStyle}>&#8249;</button>
          <button onClick={nextSlide} style={arrowStyle}>&#8250;</button>
        </div>
      </div>
    </div>
  );
}

const arrowStyle = {
  fontSize: '24px',
  background: '#F46B35',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '50px',
  cursor: 'pointer',
};

export default Farming;
