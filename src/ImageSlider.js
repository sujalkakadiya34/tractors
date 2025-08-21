import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    "/assets/tractor1.jpg",
    "/assets/tractor2.jpg",
    "/assets/tractor1.jpg",
  ];

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover"
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
