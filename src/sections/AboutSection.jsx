import { ChevronDown, Send } from "lucide-react";
import { SKILLS } from "../constants/portfolioData";

export function AboutSection({ openSkill, onSkillToggle }) {
  return (
    <section className="hero-section" id="about">
      <div className="hero-grid">
        <div className="skills-rail" aria-label="Core competency groups">
          <div className="timeline-line" />
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            const isOpen = openSkill === index;

            return (
              <article
                className={isOpen ? "skill-card expanded" : "skill-card"}
                style={{ "--accent": skill.color }}
                key={skill.title}
              >
                <button type="button" onClick={() => onSkillToggle(index)}>
                  <span className="rail-dot" />
                  <span className="skill-icon">
                    <Icon size={22} />
                  </span>
                  <span className="skill-copy">
                    <strong>{skill.title}</strong>
                    <small>{skill.subtitle}</small>
                  </span>
                  <ChevronDown size={18} />
                </button>

                {isOpen && (
                  <div className="skill-details">
                    <p>{skill.description}</p>
                    {skill.details.map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <article className="about-panel">
          <h1>About Me</h1>
          <p>
            I am Vinod Kumar Yadav, a Bangalore-based Frontend Engineer with
            4.5+ years of hands-on experience building scalable,
            high-performance React.js applications for fintech and enterprise
            platforms.
          </p>
          <p>
            I specialize in component-based architecture, Redux state
            management, TypeScript, REST API integration, and responsive UI/UX.
            My work spans customer portals, back-office CRMs, dashboards,
            onboarding flows, account systems, and role-based SaaS products.
          </p>
          <p>
            I enjoy turning complex product requirements into clean interfaces
            that are fast, accessible, maintainable, and ready for production
            teams to extend.
          </p>
          <div className="callout">
            <Send size={20} />
            <strong>
              If you are looking for a React engineer who can ship polished
              fintech and enterprise products with ownership, speed, and care, I
              am ready to bring that value to your team.
            </strong>
          </div>
        </article>
      </div>
    </section>
  );
}
