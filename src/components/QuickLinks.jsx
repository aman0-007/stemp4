import { FileText, UserPlus, ExternalLink } from 'lucide-react';
import './QuickLinks.css';

function QuickLinks() {
  const links = [
    {
      title: 'Expression of Interest Form',
      description: 'Register your interest to participate in our seva activities',
      url: 'https://forms.gle/ZtaPQEyjRrS1xDBbA',
      icon: <FileText />,
      color: '#ff6b35'
    },
    {
      title: 'Sai Connect Registration',
      description: 'Join our community network and stay connected',
      url: 'https://share.google/qVSv9gzFUGztUZHop',
      icon: <UserPlus />,
      color: '#f7931e'
    },
    {
      title: 'Organization Website',
      description: 'Visit our main website for comprehensive information',
      url: 'https://www.dharmakshetra.org/',
      icon: <ExternalLink />,
      color: '#004e89'
    }
  ];

  return (
    <section className="quick-links section">
      <div className="container">
        <h2 className="section-title">Quick Links</h2>
        <p className="section-subtitle">Access important forms and resources</p>

        <div className="links-grid">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
              style={{ '--card-color': link.color }}
            >
              <div className="link-icon" style={{ color: link.color }}>
                {link.icon}
              </div>
              <h3 className="link-title">{link.title}</h3>
              <p className="link-description">{link.description}</p>
              <div className="link-arrow">
                <ExternalLink size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickLinks;
