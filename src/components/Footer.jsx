import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <img src="/src/assets/ecess.png" alt="ECESS" className="h-20 w-20 mb-4" />
            <p className="text-slate-400 text-sm mb-4">
              Electronics & Communication Engineering Society - Fostering innovation and excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" title="Facebook" className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/src/assets/facebook.png" alt="Facebook" className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
              </a>
              <a href="#" title="Instagram" className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/src/assets/instagram.png" alt="Instagram" className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
              </a>
              <a href="#" title="LinkedIn" className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/src/assets/linkedin.png" alt="LinkedIn" className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-section-title">Quick Links</h3>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/team" className="footer-link">Our Team</Link>
            <Link to="/events" className="footer-link">Events</Link>
            <Link to="/faculty" className="footer-link">Faculty</Link>
          </div>

          <div>
            <h3 className="footer-section-title">Resources</h3>
            <a href="#" className="footer-link">Workshops</a>
            <a href="#" className="footer-link">Projects</a>
            <a href="#" className="footer-link">Blog</a>
          </div>

          <div>
            <h3 className="footer-section-title">Contact</h3>
            <p className="text-slate-400 text-sm mb-2">Email: info@ecess.edu</p>
            <p className="text-slate-400 text-sm mb-2">Phone: +91 XXXX XXXX XX</p>
            <p className="text-slate-400 text-sm">Location: ECE Department</p>
          </div>
        </div>

        <div className="footer-divider">
          <div className="text-center text-slate-400 text-sm">
            <p>&copy; 2026 ECESS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
