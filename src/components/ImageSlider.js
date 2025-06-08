import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  'public/Blood Donor.jpg',
  'public/food_donation.webp',
  'public/rescue.jpg',
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />

      <div className="overlay-content">
        <h1>
          <span className="small-text">Your </span>
          <span className="highlight-small">small</span>
          <span className="small-text"> donation can bring </span>
          <span className="highlight-big">huge</span>
          <span className="small-text"> smile</span>
        </h1>
        <p>We help NGOs connect with volunteers and donors to change lives.</p>
        
      </div>

      <button onClick={prevSlide} className="slider-btn prev">&lt;</button>
      <button onClick={nextSlide} className="slider-btn next">&gt;</button>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
