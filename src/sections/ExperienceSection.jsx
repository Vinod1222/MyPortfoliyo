import { useState } from "react";
import { EXPERIENCE } from "../constants/portfolioData";

export function ExperienceSection() {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);
  const activeExperience = EXPERIENCE[activeExperienceIndex];

  return (
    <section
      className="min-h-screen bg-[#19182d] px-[7vw] py-[118px] pb-[104px] text-white max-[980px]:min-h-0 max-[980px]:px-[22px] max-[760px]:py-[86px] max-[760px]:pb-[76px] max-[620px]:px-4"
      id="experience"
    >
      <h2 className="mb-32 text-center text-[clamp(40px,4.2vw,60px)] font-black leading-[1.08] tracking-normal max-[760px]:mb-[42px] max-[760px]:text-4xl max-[620px]:text-[32px] max-[420px]:text-[30px]">
        Industry Experience
      </h2>
      <div className="relative mx-auto mb-[132px] grid max-w-[1180px] grid-cols-2 items-center gap-[180px] before:absolute before:left-0 before:right-0 before:top-1/2 before:h-1.5 before:-translate-y-1/2 before:rounded-full before:bg-[linear-gradient(90deg,#ff654d,#367dff,#8c5cff,#14bf8c)] max-[760px]:mb-10 max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:before:hidden">
        {EXPERIENCE.map((job, index) => {
          const isActive = activeExperienceIndex === index;
          const isAbove = index % 2 === 0;

          return (
            <button
              className={`relative z-10 mx-auto grid min-h-[138px] w-[150px] content-center justify-items-center gap-[5px] rounded-xl border bg-white p-3 text-center text-[#19192d] shadow-[0_18px_44px_rgba(0,0,0,0.16)] transition-all duration-200 ${
                isAbove ? "-translate-y-32 max-[760px]:translate-y-0" : "translate-y-32 max-[760px]:translate-y-0"
              } ${
                isActive
                  ? "border-[var(--accent)] shadow-[0_24px_48px_rgba(0,0,0,0.24),0_0_0_4px_rgba(255,102,77,0.12)]"
                  : "border-transparent"
              }`}
              style={{ "--accent": job.color }}
              type="button"
              aria-pressed={isActive}
              onPointerEnter={() => setActiveExperienceIndex(index)}
              onClick={() => setActiveExperienceIndex(index)}
              key={job.company}
            >
              <span
                className={`absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-[var(--accent)] shadow-[0_0_0_12px_rgba(255,102,77,0.14)] max-[760px]:hidden ${
                  isAbove ? "bottom-[-92px]" : "top-[-92px]"
                }`}
              />
              <span
                className={`absolute left-1/2 h-[74px] w-0.5 -translate-x-1/2 bg-[var(--accent)] max-[760px]:hidden ${
                  isAbove ? "bottom-[-74px]" : "top-[-74px]"
                }`}
              />
              <div className="grid h-10 w-10 place-items-center rounded-[10px] bg-[#f7f8fb] text-[15px] font-black text-[var(--accent)]">
                {job.mark}
              </div>
              <h3 className="text-sm font-black leading-snug">{job.company}</h3>
              <p className="m-0 text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#9aa3b3]">
                {job.period}
              </p>
              {job.current && (
                <small className="rounded-full bg-[#fff2ed] px-2 py-[3px] text-[9px] font-black uppercase tracking-[0.06em] text-[#ff664d]">
                  Current
                </small>
              )}
              <strong className="text-[13px] text-[var(--accent)]">{job.year}</strong>
            </button>
          );
        })}
      </div>
      <div className="mx-auto max-w-[1120px] rounded-[18px] border border-white/10 bg-white/[0.035] p-[38px] shadow-[0_24px_70px_rgba(0,0,0,0.2)] max-[620px]:p-6 max-[420px]:p-5">
        <h3 className="mb-5 text-[24px] font-black tracking-normal">
          {activeExperience.company}{" "}
          <span className="text-base font-black text-white/35">
            Roles & Responsibilities
          </span>
        </h3>
        <ul className="grid gap-3 pl-5 text-base leading-[1.6] text-white/70">
          {activeExperience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
