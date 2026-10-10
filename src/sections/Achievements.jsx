import { achievements } from '../data/achievements';

export default function Achievements() {
  return (
    <section className="section section--tight" id="achievements" aria-labelledby="achievements-title">
      <div className="container">
        <p className="section__eyebrow">Milestones</p>
        <h2 className="section__title" id="achievements-title">
          Achievements
        </h2>

        <ol className="achieve-list">
          {achievements.map((item) => (
            <li key={item.id} className="achieve-item">
              <span className="achieve-item__num" aria-hidden="true" />
              <div>
                <h3 className="achieve-item__title">{item.title}</h3>
                <p className="achieve-item__meta">{item.issuer}</p>
                {item.bullets?.length ? (
                  <ul className="achieve-item__bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="achieve-item__desc">{item.description}</p>
                )}
                {item.filePath ? (
                  <a
                    className="achieve-item__link"
                    href={item.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View certificate
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
