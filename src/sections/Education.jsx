import { education } from '../data/education';

export default function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container">
        <p className="section__eyebrow">My journey</p>
        <h2 className="section__title" id="education-title">
          Education
        </h2>

        <div className="timeline">
          {education.map((item) => (
            <article key={item.id} className="timeline__item">
              <div className="timeline__head">
                <h3 className="timeline__title">{item.degree}</h3>
                <span className="timeline__duration">{item.duration}</span>
              </div>
              <p className="timeline__subtitle">{item.institution}</p>
              {item.detail ? <p className="timeline__detail">{item.detail}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
