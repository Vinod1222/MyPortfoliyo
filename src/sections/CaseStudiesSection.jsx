import { BriefcaseBusiness, ChevronDown, Github } from "lucide-react";
import { CASE_STUDIES } from "../constants/portfolioData";

export function CaseStudiesSection({ onCaseToggle, openCase }) {
  return (
    <section className="case-section" id="case-studies">
      <h2>Case Studies</h2>
      <div className="case-list">
        {CASE_STUDIES.map((study, index) => (
          <article
            className={`case-card ${study.color}`}
            onMouseEnter={() => onCaseToggle(index)}
            onFocus={() => onCaseToggle(index)}
            onClick={(event) => {
              if (event.target.closest("button, a")) return;
              onCaseToggle(index);
            }}
            key={study.title}
          >
            <span className="case-icon">
              <BriefcaseBusiness size={24} />
            </span>
            <div>
              <div className="case-heading">
                <h3>{study.title}</h3>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
              <p>{study.summary}</p>
              <div className="chips light">
                {study.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {openCase === index && (
                <p className="case-extra">
                  Focus areas: reusable components, clear state boundaries,
                  production-ready flows, and responsive behavior across web and
                  mobile.
                </p>
              )}
            </div>
            <button
              type="button"
              aria-label={`Toggle ${study.title}`}
              aria-expanded={openCase === index}
              onClick={() => onCaseToggle(index)}
            >
              <ChevronDown size={18} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
