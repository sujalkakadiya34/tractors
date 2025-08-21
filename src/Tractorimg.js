import React, { useState, useEffect } from 'react';
import foodData from './data.json';
import './App.css';  

function Tractorimg() {
  const [visibleCount, setVisibleCount] = useState(3);
  const totalItems = foodData.length;
  const [startIndex, setStartIndex] = useState(0);

   useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth <= 768 ? 1 : 3);
    };
    updateVisibleCount();  
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % totalItems;
      items.push(foodData[index]);
    }
    return items;
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <p style={{ color: '#F46B35', fontSize: '25px' }}>Featured Implements</p>
      <h1 style={{ fontSize: '45px' }}>Tractor’s Implements for Easy Farming</h1>
      <p style={{ color: 'gray', fontSize: '19px' }}>
        Captain Tractors offers high-quality implements designed for versatility and efficiency.
        Built to last, our implements deliver exceptional performance and can be used with any
        compact tractor.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '40px 0' }}>
        {getVisibleItems().map((item, index) => {
          const isCenter = visibleCount > 1 && index === 1;
          return (
            <div
              key={item.id}
              style={{
                width: isCenter ? '300px' : '220px',
                transform: isCenter ? 'scale(1.05)' : 'scale(1)',
                transition: '0.3s ease',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '10px',
                background: '#fff',
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
              <h3>{item.food_name}</h3>
              <p>{item.food_description}</p>
            </div>
          );
        })}
      </div>

      <div>
        <button onClick={prevSlide} style={arrowStyle}>&#8249;</button>
        <button onClick={nextSlide} style={arrowStyle}>&#8250;</button>
      </div>
    </div>
  );
}

const arrowStyle = {
  fontSize: '24px',
  background: '#F46B35',
  color: '#fff',
  border: 'none',
  margin: '0 10px',
  padding: '10px 20px',
  borderRadius: '50px',
  cursor: 'pointer',
};

export default Tractorimg;
