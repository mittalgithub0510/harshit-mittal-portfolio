import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card glass-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.name} />
        ) : (
          <div className="project-placeholder">
            <span>{project.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        
        <div className="project-tech">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-chip">{tech}</span>
          ))}
        </div>
        
        <div className="project-actions">
          <a href={project.links.project} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            View Project <ExternalLink size={16} />
          </a>
          <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
            View Code <FaGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
