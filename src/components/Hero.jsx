import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="hero-highlight">ECESS</span>
          </h1>

          <p className="hero-description">
            Electronics & Communication Engineering Students' Society<br/>
            Where innovation meets collaboration, and great ideas come to life<br/>
            NIT Durgapur | Building the future since 2022
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Explore Events</button>
            <button className="btn btn-secondary">Join Our Community</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;