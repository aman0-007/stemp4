import heroImage from '../assets/hero.jpg';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <img src={heroImage} alt="Bhagawan Sri Sathya Sai Baba" className="hero-image" />
          <div className="hero-text">
            <h2 className="hero-title">
              Love All, Serve All
            </h2>
            <p className="hero-subtitle">
              Dedicated to selfless service and spiritual growth through the teachings of Bhagawan Sri Sathya Sai Baba
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
