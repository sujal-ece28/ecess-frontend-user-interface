import './About.css';

const About = () => {
  return (
    <section className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About <span className="highlight">ECESS</span></h2>
          <p className="section-description">
            We are a vibrant community of electronics and communication engineering students 
            at NIT Durgapur, dedicated to fostering innovation and technical excellence.
          </p>
        </div>
        
        <div className="about-grid">
          <div className="about-card">
            <h3>Innovation Hub</h3>
            <p>Fostering creativity and innovation through cutting-edge projects and research initiatives.</p>
          </div>
          
          <div className="about-card">
            <h3>Community</h3>
            <p>Building strong networks and collaborative relationships among students and industry professionals.</p>
          </div>
          
          <div className="about-card">
            <h3>Learning</h3>
            <p>Providing continuous learning opportunities through workshops, seminars, and technical sessions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;