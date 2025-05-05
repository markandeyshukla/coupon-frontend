import React, { useEffect, useState } from 'react';
import './bcss.css';

const images = ['/backbanner1.jpg', '/backbanner2.jpg', '/backbanner3.jpg', '/backbanner4.jpg', '/backbanner5.jpg'];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`slider-image ${
            index === currentIndex ? 'active' : 'inactive'
          }`}
          alt="banner"
        />
      ))}

      <button className="slider-button prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}

export default Banner;
