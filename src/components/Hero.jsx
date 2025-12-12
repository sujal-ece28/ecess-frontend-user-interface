import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Electronics & Communication Engineering
              <span className="hero-highlight">Students' Society</span>
            </h1>
            
            <p className="hero-description">
              Empowering future engineers at NIT Durgapur through innovation, 
              collaboration, and cutting-edge technology. Join our community 
              of passionate students shaping tomorrow's world.
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-primary">
                Join Our Community
              </button>
              <button className="btn btn-secondary">
                Explore Events
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Events Organized</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image">
              <img src="/src/assets/ecess_nitdgp.jpg" alt="ECESS NIT Durgapur" />
            </div>
            <div className="hero-gradient"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;