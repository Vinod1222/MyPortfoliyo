import { SKILL_LEVELS } from "../constants/portfolioData";

export function SkillLevelsSection() {
  return (
    <section className="bg-[#19182d] px-[5.5vw] py-20 text-white max-md:px-4 max-md:py-12" id="skill-levels">
      <div className="mx-auto mb-10 max-w-[880px] text-center">
        <span className="text-xs font-black uppercase tracking-[0.22em] text-[#ff7a64]">
          Skill Matrix
        </span>
        <h2 className="mx-auto mt-4 max-w-[820px] text-[clamp(34px,5vw,58px)] font-black leading-tight tracking-normal">
          Frontend strengths, shown with practical working confidence
        </h2>
        <p className="mx-auto mt-4 max-w-[680px] text-lg leading-8 text-white/65">
          These bars show where I am strongest today and where I keep improving
          through real project work.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
        {SKILL_LEVELS.map((skill) => (
          <article
            className="rounded-[18px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.18)]"
            style={{ "--level": `${skill.level}%`, "--accent": skill.color }}
            key={skill.name}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <strong className="text-lg font-black">{skill.name}</strong>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-black text-[var(--accent)]">
                {skill.level}%
              </span>
            </div>
            <div
              className="h-3 overflow-hidden rounded-full bg-white/10"
              role="meter"
              aria-label={`${skill.name} skill level`}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={skill.level}
            >
              <span className="skill-meter-fill block h-full rounded-full bg-[var(--accent)] shadow-[0_0_22px_var(--accent)]" />
            </div>
            <small className="mt-3 block text-sm font-bold text-white/45">
              {100 - skill.level}% growth space
            </small>
          </article>
        ))}
      </div>
    </section>
  );
}
