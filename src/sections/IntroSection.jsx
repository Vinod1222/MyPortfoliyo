import { Code2 } from "lucide-react";
import { DOMAIN_EXPERIENCE, ORBIT_ITEMS } from "../constants/portfolioData";

export function IntroSection() {
  return (
    <section className="intro-section" id="home">
      <div className="build-loader" aria-hidden="true">
        <span />
        <strong>Building interface</strong>
      </div>
      <div className="intro-copy">
        <div className="availability dark">
          <span />
          Open to Work
        </div>
        <h1>
          Hello! I am
          <strong>Vinod Yadav</strong>
        </h1>
        <p>
          <b>From design to code</b> - scalable React interfaces, engineered
          for fintech and enterprise teams.
        </p>
        <p>
          Driven to build faster, cleaner, and more adaptive frontend systems
          that turn complex workflows into polished product experiences.
        </p>
        <div className="domain-line">
          <span>Experienced in</span>
          <div
            className="domain-roller"
            aria-label="Experienced in Banking Domain and Fintech Domain"
          >
            {DOMAIN_EXPERIENCE.map(({ icon: Icon, label }) => (
              <strong key={label}>
                <Icon size={18} />
                {label}
              </strong>
            ))}
          </div>
        </div>
      </div>

      <div
        className="orbit-wrap"
        aria-label="Frontend engineering capability orbit"
      >
        <div className="orbit outer" />
        <div className="orbit inner" />
        <span className="flow-dot flow-one" />
        <span className="flow-dot flow-two" />
        <span className="flow-dot flow-three" />
        <div className="orbit-core">
          <div className="cube">
            <span className="cube-face face-top" />
            <span className="cube-face face-left" />
            <span className="cube-face face-right" />
            <Code2 size={42} />
          </div>
        </div>

        {ORBIT_ITEMS.map(({ className, icon: Icon, label }) => (
          <div className={`orbit-item ${className}`} key={label}>
            <span>
              <Icon size={21} />
            </span>
            <strong>{label}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
