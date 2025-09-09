import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">
            &gt; About <span className="highlight">ECESS</span>
          </h2>
          <p className="section-subtitle">
            Who we are and what we're all about
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">LAB</div>
              <h3>Innovation Lab</h3>
              <p>
                We're all about hands-on learning. Our lab is where crazy ideas 
                become real projects, and where you'll spend way too many late nights 
                debugging circuits (but loving every minute of it).
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">NET</div>
              <h3>Tech Community</h3>
              <p>
                Think of us as your tech family. We connect students, alumni, and 
                industry folks who actually know what they're doing. Great for 
                finding study buddies or future job references.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">DEV</div>
              <h3>Skill Building</h3>
              <p>
                From beginner-friendly workshops to advanced seminars, we help you 
                level up your skills. Because let's face it, YouTube tutorials can 
                only take you so far.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">FUT</div>
              <h3>Future Ready</h3>
              <p>
                Technology moves fast, and we help you keep up. Whether it's AI, 
                IoT, or whatever comes next, we'll make sure you're not left behind 
                when the industry evolves.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-value">15+</div>
              <div className="stat-desc">Technical Domains</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">100+</div>
              <div className="stat-desc">Projects Completed</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">25+</div>
              <div className="stat-desc">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;