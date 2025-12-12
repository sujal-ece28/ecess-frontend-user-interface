import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <span>ECESS</span>
          </div>

          <nav className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#events" className="nav-link">Events</a>
            <a href="#team" className="nav-link">Team</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <button className="btn btn-primary nav-cta">
            Join ECESS
          </button>

          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="nav-mobile">
            <a href="#home" className="nav-mobile-link">Home</a>
            <a href="#about" className="nav-mobile-link">About</a>
            <a href="#events" className="nav-mobile-link">Events</a>
            <a href="#team" className="nav-mobile-link">Team</a>
            <a href="#contact" className="nav-mobile-link">Contact</a>
            <button className="btn btn-primary">Join ECESS</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;