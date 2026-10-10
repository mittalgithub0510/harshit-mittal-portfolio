import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section className="section section--tight" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <p className="section__eyebrow">What I know</p>
        <h2 className="section__title" id="skills-title">
          Skills
        </h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skills-block">
              <h3 className="skills-block__label">{category.label}</h3>
              <ul className="skills-block__list">
                {category.items.map((skill) => (
                  <li
                    key={skill.name}
                    className={`skill-tag${skill.emphasis ? ' skill-tag--strong' : ''}`}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}