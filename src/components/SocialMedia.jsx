import { Instagram, Facebook, Youtube } from 'lucide-react';
import './SocialMedia.css';

function SocialMedia() {
  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@sssso_maharashtra_west_1',
      url: 'https://www.instagram.com/sssso_maharashtra_west_1?igsh=MXUyZ2dhaGUxZDRraQ==',
      icon: <Instagram />,
      color: '#E4405F',
      gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
    },
    {
      name: 'Facebook',
      handle: 'SSSSO Maharashtra West 1',
      url: 'https://www.facebook.com/share/1JzZR9BLD2/',
      icon: <Facebook />,
      color: '#1877F2',
      gradient: 'linear-gradient(135deg, #1877F2 0%, #0e5fbd 100%)'
    },
    {
      name: 'YouTube',
      handle: 'Sri Sathya Sai Seva Organisation',
      url: 'https://youtube.com/@srisathyasaisevaorganisati8419?si=W14yqiNzRwMI7Mcb',
      icon: <Youtube />,
      color: '#FF0000',
      gradient: 'linear-gradient(135deg, #FF0000 0%, #cc0000 100%)'
    }
  ];

  return (
    <section className="social-media section">
      <div className="container">
        <h2 className="section-title">Connect With Us</h2>
        <p className="section-subtitle">Follow us on social media for updates and inspiration</p>

        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div
                className="social-icon-wrapper"
                style={{ background: social.gradient }}
              >
                <div className="social-icon">
                  {social.icon}
                </div>
              </div>
              <div className="social-content">
                <h3 className="social-name">{social.name}</h3>
                <p className="social-handle">{social.handle}</p>
                <span className="social-cta">Follow Us</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
