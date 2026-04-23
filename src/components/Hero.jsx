import { ArrowRight, FileText, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { profile } from '../data/profile';
import './Hero.css';

const roles = ["Full Stack Developer", "React Developer", "Problem Solver", "MERN Stack Learner"];

const Hero = () => {
  const navigate = useNavigate();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badges">
            <span className="badge">Open to Internship Opportunities</span>
            <span className="badge">Freelance Ready</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{profile.name}</span>
          </h1>
          <h2 className="hero-role">
            <span className="typing-text">{text}</span><span className="cursor">|</span>
          </h2>
          
          <p className="hero-tagline">
            Turning ideas into real-world web applications using modern technologies
          </p>
          <p className="hero-intro">
            I am a B.Tech CSE student focused on building full-stack web applications using React, Node.js, and MySQL. I have strong fundamentals in DSA, OOPs, DBMS, and OS, and I am actively seeking internship opportunities while staying open to freelance and collaborative projects.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
              Explore Projects <ArrowRight size={18} />
            </button>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Resume <FileText size={18} />
            </a>
            <button className="btn btn-outline" onClick={() => navigate('/contact')}>
              Get in Touch <Mail size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="profile-image-container">
            {profile.heroImage ? (
              <img src={profile.heroImage} alt={profile.name} className="profile-image-actual" />
            ) : (
              <div className="profile-image-placeholder">
                <span>{profile.name.substring(0, 2).toUpperCase()}</span>
              </div>
            )}
            <div className="floating-badge badge-1">Full Stack</div>
            <div className="floating-badge badge-2">MERN</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
