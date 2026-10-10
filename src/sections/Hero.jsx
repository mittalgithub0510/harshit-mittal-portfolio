import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="container hero__inner">
        <div className="hero__photo-wrap">
          <img
            className="hero__photo hero__photo--blur"
            src={profile.heroImage}
            alt=""
            aria-hidden="true"
            width={190}
            height={190}
          />
          <img
            className="hero__photo hero__photo--main"
            src={profile.heroImage}
            alt={`${profile.name} — profile photo`}
            width={190}
            height={190}
          />
        </div>

        <h1 className="hero__name">{profile.name}</h1>

        <div className="btn-group">
          <a className="btn btn-primary" href="#contact">
            Get in Touch
          </a>
          <a
            className="btn btn-secondary"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <p className="hero__summary">{profile.summary}</p>

        <div className="hero__meta">
          <p className="hero__availability">
            <strong>{profile.availability}</strong>
          </p>
          <div className="hero__socials">
            <a className="btn btn-secondary btn-sm" href={`mailto:${profile.email}`}>
              Email
            </a>
            <a
              className="btn btn-secondary btn-sm"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-secondary btn-sm"
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
