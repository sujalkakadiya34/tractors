import React from 'react';
// 
function Plant() {
  return (
    <div className="plant-container" id='vaibhav'>
      <div className="text-section">
        <img src="/assets/no.1.jpg" alt="Food 1" className="plant-img" />
        <p className="highlight">India's No.1</p>
        <h1 className="title">
          Integrated <br />
          Manufacturing Plant
        </h1>
        <p className="description">
          Unit with more than 600 workers and manufacturing capacity <br />
          of 1500 tractors and 500+ implements per month.
        </p>
      </div>

      <div className="video-section videomargin">
        <iframe
          src="https://www.youtube.com/embed/zo4OsFFmCEg"
          title="Tractor Plant Video"
          className="responsive-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Plant;
