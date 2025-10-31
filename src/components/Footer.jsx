import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Sri Sathya Sai Seva Organization</h3>
            <p className="footer-description">
              Dedicated to selfless service and spiritual transformation through the teachings of Bhagawan Sri Sathya Sai Baba
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="https://www.dharmakshetra.org/" target="_blank" rel="noopener noreferrer">Main Website</a></li>
              <li><a href="https://forms.gle/ZtaPQEyjRrS1xDBbA" target="_blank" rel="noopener noreferrer">Register Interest</a></li>
              <li><a href="https://share.google/qVSv9gzFUGztUZHop" target="_blank" rel="noopener noreferrer">Sai Connect</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>Maharashtra West 1 Region</span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@sssso-mw1.org</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+91 XXXXX XXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Sri Sathya Sai Seva Organization, Maharashtra West 1. All rights reserved.
          </p>
          <p className="footer-tagline">
            <Heart size={16} fill="currentColor" />
            Love All, Serve All
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
