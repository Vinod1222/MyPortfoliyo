import { EXPERIENCE } from "../constants/portfolioData";

export function ExperienceSection() {
  const primaryExperience = EXPERIENCE[0];

  return (
    <section className="experience-section dark-section" id="experience">
      <h2>Industry Experience</h2>
      <div className="experience-track">
        {EXPERIENCE.map((job, index) => (
          <article
            className={`experience-card ${index % 2 === 0 ? "above" : "below"}`}
            style={{ "--accent": job.color }}
            key={job.company}
          >
            <span className="node" />
            <div className="company-mark">{job.mark}</div>
            <h3>{job.company}</h3>
            <p>{job.period}</p>
            {job.current && <small>Current</small>}
            <strong>{job.year}</strong>
          </article>
        ))}
      </div>
      <div className="role-panel">
        <h3>
          {primaryExperience.company} <span>Roles & Responsibilities</span>
        </h3>
        <ul>
          {primaryExperience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
