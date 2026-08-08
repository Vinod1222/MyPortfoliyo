import { SKILL_LEVELS } from "../constants/portfolioData";

export function SkillLevelsSection() {
  return (
    <section className="skill-level-section" id="skill-levels">
      <div className="skill-level-heading">
        <span>Skill Matrix</span>
        <h2>Frontend strengths, shown with practical working confidence</h2>
        <p>
          These bars show where I am strongest today and where I keep improving
          through real project work.
        </p>
      </div>

      <div className="skill-meter-grid">
        {SKILL_LEVELS.map((skill) => (
          <article
            className="skill-meter-card"
            style={{ "--level": `${skill.level}%`, "--accent": skill.color }}
            key={skill.name}
          >
            <div className="skill-meter-top">
              <strong>{skill.name}</strong>
              <span>{skill.level}%</span>
            </div>
            <div
              className="skill-meter-track"
              role="meter"
              aria-label={`${skill.name} skill level`}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={skill.level}
            >
              <span />
            </div>
            <small>{100 - skill.level}% growth space</small>
          </article>
        ))}
      </div>
    </section>
  );
}
