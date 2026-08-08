import { useState } from "react";
import { EXPERIENCE } from "../constants/portfolioData";

export function ExperienceSection() {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);
  const activeExperience = EXPERIENCE[activeExperienceIndex];

  return (
    <section className="experience-section dark-section" id="experience">
      <h2>Industry Experience</h2>
      <div className="experience-track">
        {EXPERIENCE.map((job, index) => {
          const isActive = activeExperienceIndex === index;

          return (
            <button
              className={`experience-card ${
                index % 2 === 0 ? "above" : "below"
              } ${isActive ? "active" : ""}`}
              style={{ "--accent": job.color }}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveExperienceIndex(index)}
              key={job.company}
            >
              <span className="node" />
              <div className="company-mark">{job.mark}</div>
              <h3>{job.company}</h3>
              <p>{job.period}</p>
              {job.current && <small>Current</small>}
              <strong>{job.year}</strong>
            </button>
          );
        })}
      </div>
      <div className="role-panel">
        <h3>
          {activeExperience.company} <span>Roles & Responsibilities</span>
        </h3>
        <ul>
          {activeExperience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
