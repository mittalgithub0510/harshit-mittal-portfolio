import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaFileAlt } from 'react-icons/fa';
import { profile } from '../data/profile';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-container">
        <div className="footer-content">
          <h3 className="footer-logo">{profile.name}</h3>
          <p className="footer-tagline">
            Building real-world web applications with clean design, strong logic, and continuous learning.
          </p>
        </div>
        <div className="footer-links">
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={`mailto:${profile.email}`} className="social-link" title="Email">
            <FaEnvelope size={20} />
          </a>
          <a href={`tel:${profile.phone}`} className="social-link" title="Call Me">
            <FaPhone size={20} />
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="social-link" title="Resume">
            <FaFileAlt size={20} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
