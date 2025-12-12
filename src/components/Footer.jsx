import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">ECESS</h3>
            <p className="footer-description">
              Electronics & Communication Engineering Students' Society at NIT Durgapur. 
              Building the future through innovation and collaboration.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                <img src="/src/assets/icons/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="#" className="social-link">
                <img src="/src/assets/icons/insta.webp" alt="Instagram" />
              </a>
              <a href="#" className="social-link">
                <img src="/src/assets/icons/twitter.jpeg" alt="Twitter" />
              </a>
              <a href="#" className="social-link">
                <img src="/src/assets/icons/gmail.jpg" alt="Email" />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Events</h4>
            <ul className="footer-links">
              <li><a href="#">Technical Workshops</a></li>
              <li><a href="#">Coding Competitions</a></li>
              <li><a href="#">Guest Lectures</a></li>
              <li><a href="#">Project Exhibitions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <p>NIT Durgapur</p>
              <p>Mahatma Gandhi Rd, A-Zone</p>
              <p>Durgapur, West Bengal 713209</p>
              <p>ecess@nitdgp.ac.in</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ECESS - NIT Durgapur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;