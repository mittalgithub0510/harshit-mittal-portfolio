import { experience } from '../data/experience';

export default function Internship() {
  return (
    <section className="section section--tight" id="internship" aria-labelledby="internship-title">
      <div className="container">
        <p className="section__eyebrow">About me</p>
        <h2 className="section__title" id="internship-title">
          Internship Experience
        </h2>

        {experience.map((job) => {
          const offer = job.documents?.offerLetter;
          const cert = job.documents?.completionCertificate;

          return (
            <article key={job.id} className="entry">
              <div className="timeline__head">
                <h3 className="entry__role">{job.role}</h3>
                <span className="timeline__duration">{job.duration}</span>
              </div>
              <p className="entry__org">{job.company}</p>
              <p className="entry__desc">{job.description}</p>
              {job.tasks?.length ? (
                <ul className="entry__tasks">
                  {job.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              ) : null}
              <div className="entry__docs">
                {offer ? (
                  <a className="btn btn-secondary btn-sm" href={offer} target="_blank" rel="noopener noreferrer">
                    View Offer Letter
                  </a>
                ) : null}
                {cert ? (
                  <a className="btn btn-secondary btn-sm" href={cert} target="_blank" rel="noopener noreferrer">
                    View Completion Certificate
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
