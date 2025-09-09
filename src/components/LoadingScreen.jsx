import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = [
    'Starting up ECESS...',
    'Loading content...',
    'Getting things ready...',
    'Almost there...',
    'Just a moment more...',
    'Welcome!'
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
        
        <div className="loading-animation">
          <div className="circuit-line"></div>
          <div className="circuit-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;