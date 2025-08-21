import React, { useState, useEffect } from 'react';
import socialData from './socialdata.json';
import './Blogs.css';

function Socialcontribution() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 3);
    };

    updateItems();
    window.addEventListener('resize', updateItems);

    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const handleNext = () => {
    setStartIndex(prev => (prev + 1) % socialData.length);
  };

  const handlePrev = () => {
    setStartIndex(prev => (prev - 1 + socialData.length) % socialData.length);
  };

  const visibleItems = Array.from({ length: itemsPerPage }, (_, i) => {
    const index = (startIndex + i) % socialData.length;
    return socialData[index];
  });

  return (
    <div className='Socialcontribution-centre'>
      <div className='Socialcontribution-centre-1'>
        <p className='Socialcont-p1'>Social Contribution</p>
        <p className='Socialcont-p2'><b>Passionate About Empowering Lives</b></p>
        <p className='Socialcont-p3'>
          At Captain Tractors, we believe in making a difference beyond just manufacturing. Our commitment to social contribution drives us<br></br> 
          to empower communities through sustainable practices, innovative technology, and support for local farmers. Together, we’re<br></br> 
          cultivating a brighter future for all.


        </p>
      </div>

      <div className="imageRow-Social-Contribution">
        {visibleItems.map((item, idx) => (
          <div className="imageItem" key={`${item.id}-${idx}`}>
            <img src={item.food_image} alt={item.food_name} className="border" />
            <div className="caption">
              <h1 className="authorName-description">{item.food_description}</h1>
              <h1 className="authorName-descriptions">{item.food_descriptions}</h1>
              <button className="foodbtn">Read More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="nav-buttons">
        <button onClick={handlePrev} className="circle-nav">&#8592;</button>
        <button onClick={handleNext} className="circle-nav">&#8594;</button>
      </div>
    </div>
  );
}

export default Socialcontribution;
