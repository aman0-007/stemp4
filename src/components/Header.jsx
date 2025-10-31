import { useState, useEffect } from 'react';
import logo from '../assets/sssso-logo-removebg-preview.png';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <img src={logo} alt="SSSSO Logo" className="logo-image" />
            <div className="org-info">
              <h1 className="org-name">Sri Sathya Sai Seva Organization</h1>
              <p className="org-region">Maharashtra West 1</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
