import { useState } from "react";
import { EXPERIENCE } from "../constants/portfolioData";

export function ExperienceSection() {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);
  const activeExperience = EXPERIENCE[activeExperienceIndex];
  const getTimelinePosition = (index) =>
    EXPERIENCE.length === 1 ? 50 : 18 + (index * 64) / (EXPERIENCE.length - 1);

  return (
    <section
      className="min-h-[90vh] bg-[#19182d] px-[7vw] py-24 pb-24 text-white max-[980px]:min-h-0 max-[980px]:px-[22px] max-[760px]:py-20 max-[760px]:pb-16 max-[620px]:px-4"
      id="experience"
    >
      <h2 className="mb-4 text-center text-[clamp(36px,3.7vw,50px)] font-black leading-[1.08] tracking-normal max-[760px]:text-[34px] max-[620px]:text-[31px] max-[420px]:text-[29px]">
        Industry Experience
      </h2>
      <p className="mx-auto mb-24 max-w-[760px] text-center text-base leading-7 text-white/45 max-[760px]:mb-10">
        A journey across frontend engineering, fintech workflows, responsive
        products, and production-ready React delivery.
      </p>
      <div className="relative mx-auto mb-24 h-[360px] max-w-[1240px] before:absolute before:left-4 before:right-4 before:top-1/2 before:h-1.5 before:-translate-y-1/2 before:rounded-full before:bg-[linear-gradient(90deg,#ff654d,#367dff,#8c5cff,#14bf8c)] max-[760px]:mb-10 max-[760px]:grid max-[760px]:h-auto max-[760px]:gap-8 max-[760px]:before:hidden">
        {EXPERIENCE.map((job, index) => {
          const isActive = activeExperienceIndex === index;
          const isAbove = index % 2 === 0;
          const timelinePosition = `${getTimelinePosition(index)}%`;

          return (
            <button
              className={`absolute left-[var(--timeline-left)] z-10 grid min-h-[158px] w-[170px] -translate-x-1/2 content-center justify-items-center gap-1.5 rounded-xl border bg-white p-4 text-center text-[#19192d] shadow-[0_18px_44px_rgba(0,0,0,0.16)] transition-all duration-200 max-[760px]:relative max-[760px]:left-auto max-[760px]:top-auto max-[760px]:bottom-auto max-[760px]:mx-auto max-[760px]:w-full max-[760px]:max-w-[260px] max-[760px]:translate-x-0 ${
                isAbove ? "bottom-[calc(50%+52px)]" : "top-[calc(50%+52px)]"
              } ${
                isActive
                  ? "border-[var(--accent)] shadow-[0_24px_48px_rgba(0,0,0,0.24),0_0_0_4px_rgba(255,102,77,0.12)]"
                  : "border-transparent"
              }`}
              style={{ "--accent": job.color, "--timeline-left": timelinePosition }}
              type="button"
              aria-pressed={isActive}
              onPointerEnter={() => setActiveExperienceIndex(index)}
              onClick={() => setActiveExperienceIndex(index)}
              key={job.company}
            >
              <span
                className={`absolute left-1/2 h-0.5 w-[52px] -translate-x-1/2 bg-[var(--accent)] opacity-70 max-[760px]:hidden ${
                  isAbove
                    ? "bottom-[-27px] rotate-90"
                    : "top-[-27px] rotate-90"
                }`}
              />
              <span
                className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--accent)]/20 shadow-[0_0_0_12px_rgba(255,102,77,0.08)] max-[760px]:hidden"
                style={{
                  top: isAbove ? "calc(100% + 52px)" : "auto",
                  bottom: isAbove ? "auto" : "calc(100% + 52px)",
                }}
              >
                <span
                  className={`h-6 w-6 rounded-full border-4 border-white bg-[var(--accent)] ${
                    isActive ? "shadow-[0_0_0_7px_rgba(255,255,255,0.16)]" : ""
                  }`}
                />
              </span>
              <span
                className={`absolute left-1/2 h-[52px] w-0.5 -translate-x-1/2 bg-[var(--accent)] max-[760px]:hidden ${
                  isAbove ? "bottom-[-52px]" : "top-[-52px]"
                }`}
              />
              <div className="grid h-10 w-10 place-items-center rounded-[10px] bg-[#f7f8fb] text-[15px] font-black text-[var(--accent)]">
                {job.mark}
              </div>
              <h3 className="text-sm font-black leading-snug">{job.company}</h3>
              <p className="m-0 text-[10px] font-extrabold leading-tight text-[#667085]">
                {job.role}
              </p>
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
      <div className="mx-auto max-w-[1080px] rounded-[18px] border border-white/10 bg-white/[0.035] p-8 shadow-[0_22px_60px_rgba(0,0,0,0.18)] max-[620px]:p-6 max-[420px]:p-5">
        <h3 className="mb-5 text-[22px] font-black tracking-normal">
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
