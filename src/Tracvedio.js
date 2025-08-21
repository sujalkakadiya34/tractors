import React from 'react';

function Tracvedio() {
  return (
    <div className="tract-video-container" id='hardik'>
  <div className="tract-content-wrapper">
    <div className="tract-text-section">
      <p className="highlight">Story Line</p>
      <h1 className="tract-title">Watch Your <br /> Favorite Tractors <br /> in Action</h1>
      <p className="tract-description">
        Videos showcasing reviews, practical <br />
        applications, technical details, specifications, <br />
        inspiring farmer stories, and so much more. Dive <br />
        in and explore!
      </p>
    </div>

    <div className="tract-video-grid">
      {[
        "https://www.youtube.com/embed/o0gRh0ntORo",
        "https://www.youtube.com/embed/VTo4tKA29HA",
        "https://www.youtube.com/embed/4qaKX0k-3LI",
        "https://www.youtube.com/embed/jmNpLby-0sU"
      ].map((src, index) => (
        <div key={index} className="tract-video-box">
          <iframe
            src={src}
            title={`Tractor Video ${index + 1}`}
            className="tract-responsive-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default Tracvedio;
