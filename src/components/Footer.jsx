import './Footer.css';
import gmailIcon from '../assets/icons/gmail.jpg';
import linkedinIcon from '../assets/icons/linkedin.png';
import instaIcon from '../assets/icons/insta.webp';
import twitterIcon from '../assets/icons/twitter.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">ECESS</h3>
            <p className="footer-description">
              Electronics & Communication Engineering Students' Society<br/>
              National Institute of Technology, Durgapur
            </p>
            <div className="footer-social">
              <a href="mailto:ecess@nitdgp.ac.in" className="social-link">
                <img src={gmailIcon} alt="Email" />
              </a>
              <a href="#" className="social-link">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="#" className="social-link">
                <img src={instaIcon} alt="Instagram" />
              </a>
              <a href="#" className="social-link">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Research Papers</a></li>
              <li><a href="#">Alumni Network</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Info</h4>
            <div className="system-info">
              <div className="info-line">
                <span className="info-label">Status:</span>
                <span className="info-value online">Active</span>
              </div>
              <div className="info-line">
                <span className="info-label">Since:</span>
                <span className="info-value">2022</span>
              </div>
              <div className="info-line">
                <span className="info-label">Members:</span>
                <span className="info-value">200+</span>
              </div>
              <div className="info-line">
                <span className="info-label">Location:</span>
                <span className="info-value">NIT Durgapur</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              &copy; 2024 ECESS | Electronics & Communication Engineering Students' Society
            </p>
            <p className="footer-tech">
              Built with React.js by ECESS Web Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;