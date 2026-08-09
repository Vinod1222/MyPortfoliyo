import { useState } from "react";
import { EXPERIENCE } from "../constants/portfolioData";

export function ExperienceSection() {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);
  const activeExperience = EXPERIENCE[activeExperienceIndex];

  return (
    <section className="bg-[#19182d] px-[5.5vw] py-20 text-white max-md:px-4 max-md:py-12" id="experience">
      <h2 className="mb-14 text-[clamp(36px,5vw,64px)] font-black tracking-normal">
        Industry Experience
      </h2>
      <div className="relative mx-auto mb-16 grid min-h-[330px] max-w-[1320px] grid-cols-2 items-center gap-8 before:absolute before:left-0 before:right-0 before:top-1/2 before:h-1.5 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-r before:from-[#ff664d] before:via-[#7f5cff] before:to-[#25c99c] max-lg:min-h-0 max-lg:grid-cols-1 max-lg:before:hidden">
        {EXPERIENCE.map((job, index) => {
          const isActive = activeExperienceIndex === index;

          return (
            <button
              className={`relative z-10 mx-auto grid w-[220px] justify-items-center rounded-[18px] border bg-white p-6 text-center text-[#19192d] shadow-[0_18px_38px_rgba(0,0,0,0.18)] transition-all duration-300 ${
                index % 2 === 0 ? "-translate-y-14 max-lg:translate-y-0" : "translate-y-14 max-lg:translate-y-0"
              } ${
                isActive
                  ? "scale-105 border-[var(--accent)]"
                  : "border-transparent hover:-translate-y-1"
              }`}
              style={{ "--accent": job.color }}
              type="button"
              aria-pressed={isActive}
              onPointerEnter={() => setActiveExperienceIndex(index)}
              onClick={() => setActiveExperienceIndex(index)}
              key={job.company}
            >
              <span className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 rounded-full border-4 border-white bg-[var(--accent)] shadow-[0_0_0_18px_rgba(255,102,77,0.08)] max-lg:hidden" />
              <div className="mb-3 grid h-14 w-14 place-items-center rounded-xl bg-[#f7f8fa] text-sm font-black text-[var(--accent)]">
                {job.mark}
              </div>
              <h3 className="text-lg font-black">{job.company}</h3>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-[#9ca3af]">
                {job.period}
              </p>
              {job.current && (
                <small className="mt-3 rounded-full bg-[#ff664d]/10 px-4 py-2 text-xs font-black uppercase text-[#ff664d]">
                  Current
                </small>
              )}
              <strong className="mt-4 text-[var(--accent)]">{job.year}</strong>
            </button>
          );
        })}
      </div>
      <div className="mx-auto max-w-[1120px] rounded-[22px] border border-white/10 bg-white/[0.04] p-10 shadow-[0_24px_70px_rgba(0,0,0,0.2)] max-md:p-6">
        <h3 className="mb-6 text-3xl font-black tracking-normal">
          {activeExperience.company}{" "}
          <span className="text-base font-black text-white/35">
            Roles & Responsibilities
          </span>
        </h3>
        <ul className="grid gap-4 pl-5 text-lg leading-8 text-white/70 max-md:text-base">
          {activeExperience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
