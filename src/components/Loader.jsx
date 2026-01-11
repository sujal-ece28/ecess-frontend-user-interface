import { useEffect, useState } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader-container">
      <div className="loader">
        <div className="circuit-loader">
          <div className="circuit-dot"></div>
          <div className="circuit-dot"></div>
          <div className="circuit-dot"></div>
          <div className="circuit-dot"></div>
          <div className="circuit-line"></div>
          <div className="circuit-line"></div>
        </div>
        <div className="loader-text">INITIALIZING</div>
      </div>
    </div>
  );
};

export default Loader;
