import { projects } from '../data/projects';
import { profile } from '../data/profile';

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <p className="section__eyebrow">Skill experiments</p>
        <h2 className="section__title" id="projects-title">
          Projects
        </h2>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.id} className="project-item">
              <h3 className="project-item__name">{project.name}</h3>
              <p className="project-item__summary">{project.summary}</p>
            </article>
          ))}
        </div>

        <div className="project-more">
          <a
            className="btn btn-secondary"
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
