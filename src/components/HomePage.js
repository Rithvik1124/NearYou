import React from 'react';
import './HomePage.css';
import ImageSlider from './ImageSlider';

function HomePage() {
  return (
    <div className="homepage">
      <section className="hero-banner">
        <ImageSlider />
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          NearYou was built to bridge the gap between kind-hearted people and grassroots organizations.
          We aim to make volunteer and donation opportunities visible, accessible, and impactful.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
