import { useState } from "react";
import { EXPERIENCE } from "../constants/portfolioData";

export function ExperienceSection() {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);
  const activeExperience = EXPERIENCE[activeExperienceIndex];

  return (
    <section className="bg-[#19182d] px-[5.5vw] py-14 text-white max-md:px-4 max-md:py-10" id="experience">
      <h2 className="mb-10 text-[clamp(28px,3vw,42px)] font-black tracking-normal">
        Industry Experience
      </h2>
      <div className="relative mx-auto mb-12 grid min-h-[260px] max-w-[1120px] grid-cols-2 items-center gap-8 before:absolute before:left-0 before:right-0 before:top-1/2 before:h-1.5 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-r before:from-[#ff664d] before:via-[#7f5cff] before:to-[#25c99c] max-lg:min-h-0 max-lg:grid-cols-1 max-lg:gap-5 max-lg:before:hidden">
        {EXPERIENCE.map((job, index) => {
          const isActive = activeExperienceIndex === index;
          const isAbove = index % 2 === 0;

          return (
            <button
              className={`relative z-10 mx-auto grid min-h-[150px] w-[170px] justify-items-center rounded-[16px] border bg-white p-4 text-center text-[#19192d] shadow-[0_16px_34px_rgba(0,0,0,0.16)] transition-all duration-300 ${
                isAbove ? "-translate-y-10 max-lg:translate-y-0" : "translate-y-10 max-lg:translate-y-0"
              } ${
                isActive
                  ? "scale-[1.03] border-[var(--accent)]"
                  : "border-transparent hover:-translate-y-1"
              }`}
              style={{ "--accent": job.color }}
              type="button"
              aria-pressed={isActive}
              onPointerEnter={() => setActiveExperienceIndex(index)}
              onClick={() => setActiveExperienceIndex(index)}
              key={job.company}
            >
              <span
                className={`absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-[var(--accent)] shadow-[0_0_0_14px_rgba(255,102,77,0.08)] max-lg:hidden ${
                  isAbove ? "-bottom-[51px]" : "-top-[51px]"
                }`}
              />
              <span
                className={`absolute left-1/2 h-10 w-px -translate-x-1/2 bg-[var(--accent)]/50 max-lg:hidden ${
                  isAbove ? "-bottom-10" : "-top-10"
                }`}
              />
              <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-[#f7f8fa] text-sm font-black text-[var(--accent)]">
                {job.mark}
              </div>
              <h3 className="text-[15px] font-black leading-snug">{job.company}</h3>
              <p className="mt-2 text-[11px] font-black uppercase tracking-[0.1em] text-[#9ca3af]">
                {job.period}
              </p>
              {job.current && (
                <small className="mt-3 rounded-full bg-[#ff664d]/10 px-3 py-1.5 text-[11px] font-black uppercase text-[#ff664d]">
                  Current
                </small>
              )}
              <strong className="mt-3 text-[var(--accent)]">{job.year}</strong>
            </button>
          );
        })}
      </div>
      <div className="mx-auto max-w-[980px] rounded-[18px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.2)] max-md:p-5">
        <h3 className="mb-5 text-xl font-black tracking-normal">
          {activeExperience.company}{" "}
          <span className="text-sm font-black text-white/35">
            Roles & Responsibilities
          </span>
        </h3>
        <ul className="grid gap-3 pl-5 text-[15px] leading-7 text-white/70">
          {activeExperience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
