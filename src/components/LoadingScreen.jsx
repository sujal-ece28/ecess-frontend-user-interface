import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = [
    'Initializing ECESS...',
    'Loading components...',
    'Setting up interface...',
    'Almost ready...',
    'Welcome to ECESS!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const textIndex = Math.floor((progress / 100) * (loadingTexts.length - 1));
    setCurrentText(loadingTexts[textIndex]);
  }, [progress]);

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-logo">
          <span className="logo-text">ECESS</span>
          <div className="logo-subtitle">Electronics & Communication Engineering Students' Society</div>
          <div className="logo-institute">NIT Durgapur</div>
        </div>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{progress}%</div>
        </div>
        
        <div className="loading-text">{currentText}</div>
        
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;