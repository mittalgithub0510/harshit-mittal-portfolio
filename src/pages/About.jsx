import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import CertificateCard from '../components/CertificateCard';
import LearningCard from '../components/LearningCard';
import { skills } from '../data/skills';
import { certificates } from '../data/certificates';
import { learning } from '../data/learning';
import { experience } from '../data/experience';
import { GraduationCap, CheckCircle } from 'lucide-react';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const About = () => {
  return (
    <div className="about-page fade-in">
      <div className="about-header section bg-alt">
        <div className="container">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="page-title">
            About Me
          </motion.h1>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="about-intro-content glass-card">
            <p>I am a B.Tech Computer Science student with a strong interest in full stack development and problem solving. I enjoy building real-world applications that solve practical problems and improve user experience.</p>
            <p>I have hands-on experience in frontend and backend development using React, Node.js, and MySQL. Along with development, I continuously work on improving my Data Structures & Algorithms and core computer science concepts.</p>
            <p>Currently, I am looking for internship opportunities where I can apply my skills, learn from experienced developers, and contribute to real-world projects.</p>
          </motion.div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card glass-card">
            <div className="edu-icon">
              <GraduationCap size={40} />
            </div>
            <div className="edu-content">
              <h3>B.Tech in Computer Science Engineering</h3>
              <p className="edu-college">Noida Institute of Engineering and Technology, Greater Noida</p>
              <p className="edu-year">Expected Graduation: 2028</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <h2 className="section-title">Skills Deep Dive</h2>
          <div className="skills-grid">
            <div className="glass-card skill-box-wrapper"><SkillCard title="Programming Languages" items={skills.languages} isProgress={true} /></div>
            <div className="glass-card skill-box-wrapper"><SkillCard title="Frontend Stack" items={skills.frontend} isProgress={false} /></div>
            <div className="glass-card skill-box-wrapper"><SkillCard title="Backend & DB" items={[...skills.backend, ...skills.database]} isProgress={false} /></div>
          </div>
          <div className="skills-full-row mt-4">
            <div className="glass-card skill-box-wrapper"><SkillCard title="Tools & Core Subjects" items={[...skills.tools, ...skills.coreSubjects]} isProgress={false} /></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-detailed glass-card">
            <h3>{experience[0].role} – {experience[0].company}</h3>
            <p className="duration">{experience[0].duration}</p>
            <p className="desc">{experience[0].description}</p>
            <div className="tasks">
              <p><strong>Key tasks:</strong></p>
              <ul>
                {experience[0].tasks.map((task, idx) => (
                  <li key={idx}><CheckCircle size={16} className="text-accent" /> {task}</li>
                ))}
              </ul>
            </div>
            <div className="exp-actions">
              <a href={experience[0].offerLetterLink} className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">Open Offer Letter</a>
              <a href={experience[0].certificateLink} className="btn btn-secondary btn-sm" target="_blank" rel="noreferrer">Open Certificate</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <h2 className="section-title">All Certifications</h2>
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} certificate={cert} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Learning Goals</h2>
          <div className="learning-carousel-wrapper">
            <div className="learning-track">
              <div className="learning-slide-group">
                {learning.map((item, idx) => (
                  <div className="slide-item" key={`A-${idx}`}>
                    <LearningCard {...item} />
                  </div>
                ))}
              </div>
              <div className="learning-slide-group">
                {learning.map((item, idx) => (
                  <div className="slide-item" key={`B-${idx}`}>
                    <LearningCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
