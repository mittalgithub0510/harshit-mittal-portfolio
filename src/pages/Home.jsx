import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import LearningCard from '../components/LearningCard';
import CertificateCard from '../components/CertificateCard';
import { Code, Server, Database, Brain, Rocket, MessageSquare, Briefcase, FileCode, CheckCircle, Video } from 'lucide-react';
import { FaHeart, FaBullseye, FaLightbulb, FaDraftingCompass, FaVial, FaRocket } from 'react-icons/fa';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { learning } from '../data/learning';
import { certificates } from '../data/certificates';
import { experience } from '../data/experience';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page fade-in">
      <Hero />

      {/* Highlights Strip */}
      <div className="highlights-strip">
        <div className="container strip-container">
          <div className="strip-item glass">
            <h4 className="strip-num">4+</h4>
            <p className="strip-text">Projects Built</p>
          </div>
          <div className="strip-item glass">
            <h4 className="strip-num">8+</h4>
            <p className="strip-text">Languages Known</p>
          </div>
          <div className="strip-item glass">
            <h4 className="strip-num">1</h4>
            <p className="strip-text">Internship Experience</p>
          </div>
          <div className="strip-item glass">
            <h4 className="strip-num">5</h4>
            <p className="strip-text">Certifications Earned</p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section id="projects" className="section bg-alt">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="section-title">Featured Projects</h2>
          </motion.div>
          <motion.div 
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, idx) => (
              <motion.div key={project.id} variants={fadeUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Technical Skills</h2>
          </motion.div>
          <motion.div 
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="glass-card skill-box-wrapper">
              <SkillCard title="Languages" items={skills.languages} isProgress={true} />
            </motion.div>
            <motion.div variants={fadeUp} className="glass-card skill-box-wrapper">
              <SkillCard title="Frontend" items={skills.frontend} />
            </motion.div>
            <motion.div variants={fadeUp} className="glass-card skill-box-wrapper">
              <SkillCard title="Backend & DB" items={[...skills.backend, ...skills.database]} />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="skills-full-row mt-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="glass-card skill-box-wrapper">
              <SkillCard title="Core & Tools" items={[...skills.coreSubjects, ...skills.tools]} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What I'm Learning Preview */}
      <section className="section bg-alt">
        <div className="container">
          <motion.div className="learning-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Currently Learning</h2>
            <p className="section-subtitle">I believe in continuous learning and regularly improve my skills through online resources and real-world projects.</p>
          </motion.div>
          <motion.div 
            className="learning-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {learning.slice(0, 3).map((item, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <LearningCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internship Preview */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Internship Experience</h2>
          </motion.div>
          <motion.div 
            className="internship-card glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="internship-badge">
              <Briefcase size={24} />
            </div>
            <div className="internship-content">
              <h3>{experience[0].role} – {experience[0].company}</h3>
              <p className="duration">{experience[0].duration}</p>
              <p className="desc">{experience[0].description}</p>
              <div className="tasks">
                <p><strong>Key tasks:</strong></p>
                <ul>
                  {experience[0].tasks.map((task, idx) => (
                    <li key={idx}><CheckCircle size={16} className="task-icon" /> {task}</li>
                  ))}
                </ul>
              </div>
              <div className="internship-actions">
                <a href={experience[0].offerLetterLink} className="btn btn-secondary btn-sm" target="_blank" rel="noreferrer">
                  View Offer Letter
                </a>
                <a href={experience[0].certificateLink} className="btn btn-secondary btn-sm" target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="section bg-alt">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="section-title">Certifications</h2>
          </motion.div>
          <motion.div 
            className="certificates-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certificates.slice(0, 5).map((cert) => (
              <motion.div key={cert.id} variants={fadeUp}>
                <CertificateCard certificate={cert} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work With Me Section */}
      <section className="section work-with-me">
        <div className="container">
          <motion.div 
            className="work-container glass-card"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
          >
            <div className="work-content">
              <h2>Let’s Work Together</h2>
              <span className="badge mt-2 mb-4 d-inline-block">Available for Freelance & Internship Opportunities</span>
              <p>I am open to freelance projects and real-world development work. If you have an idea, project, or need help building a web application, I’d be happy to collaborate and help bring your vision to life.</p>
              
              <div className="services-grid">
                <div className="service-item"><FileCode size={20} className="text-accent" /> Website Development</div>
                <div className="service-item"><Database size={20} className="text-accent" /> Backend Build</div>
                <div className="service-item"><Rocket size={20} className="text-accent" /> Bug Fixing Code</div>
                <div className="service-item"><Brain size={20} className="text-accent" /> UI Optimization</div>
              </div>

              <div className="how-i-work">
                <h4>How I Work:</h4>
                <div className="work-steps">
                  <span className="step"><FaHeart className="mx-icon" /> Empathize</span>
                  <ArrowRight size={16} className="arrow-icon"/>
                  <span className="step"><FaBullseye className="mx-icon" /> Define</span>
                  <ArrowRight size={16} className="arrow-icon"/>
                  <span className="step"><FaLightbulb className="mx-icon" /> Ideate</span>
                  <ArrowRight size={16} className="arrow-icon"/>
                  <span className="step"><FaDraftingCompass className="mx-icon" /> Prototype</span>
                  <ArrowRight size={16} className="arrow-icon"/>
                  <span className="step"><FaVial className="mx-icon" /> Test</span>
                  <ArrowRight size={16} className="arrow-icon"/>
                  <span className="step"><FaRocket className="mx-icon" /> Implement</span>
                </div>
              </div>

              <div className="work-actions">
                <button className="btn btn-primary" onClick={() => navigate('/contact', { state: { reason: 'project' } })}>
                  Start a Project
                </button>
                <button className="btn btn-outline" onClick={() => navigate('/contact', { state: { reason: 'collab' } })}>
                  Discuss Your Idea
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

function ArrowRight(props) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}
