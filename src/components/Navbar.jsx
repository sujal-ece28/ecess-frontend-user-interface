import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>ECESS</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#events" className="nav-link">Events</a>
          </li>
          <li className="nav-item">
            <a href="#team" className="nav-link">Team</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {isOpen && (
        <ul className="nav-menu-mobile">
          <li className="nav-item-mobile">
            <a href="#home" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="nav-item-mobile">
            <a href="#about" className="nav-link-mobile" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li className="nav-item-mobile">
            <a href="#events" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Events</a>
          </li>
          <li className="nav-item-mobile">
            <a href="#team" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Team</a>
          </li>
          <li className="nav-item-mobile">
            <a href="#contact" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;