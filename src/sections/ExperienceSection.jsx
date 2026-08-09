import { useState } from "react";
import { EXPERIENCE } from "../constants/portfolioData";

export function ExperienceSection() {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);
  const activeExperience = EXPERIENCE[activeExperienceIndex];
  const getTimelinePosition = (index) =>
    EXPERIENCE.length === 1 ? 50 : 26 + (index * 48) / (EXPERIENCE.length - 1);

  return (
    <section
      className="min-h-[90vh] bg-[#19182d] px-[7vw] py-28 pb-24 text-white max-[980px]:min-h-0 max-[980px]:px-[22px] max-[760px]:py-20 max-[760px]:pb-16 max-[620px]:px-4"
      id="experience"
    >
      <h2 className="mb-4 text-center text-[clamp(36px,3.7vw,50px)] font-black leading-[1.08] tracking-normal max-[760px]:text-[34px] max-[620px]:text-[31px] max-[420px]:text-[29px]">
        Industry Experience
      </h2>
      <p className="mx-auto mb-20 max-w-[760px] text-center text-base leading-7 text-white/45 max-[760px]:mb-10">
        A journey across frontend engineering, fintech workflows, responsive
        products, and production-ready React delivery.
      </p>
      <div className="relative mx-auto mb-20 h-[330px] max-w-[980px] before:absolute before:left-4 before:right-4 before:top-1/2 before:h-1.5 before:-translate-y-1/2 before:rounded-full before:bg-[linear-gradient(90deg,#ff654d,#367dff,#8c5cff,#14bf8c)] max-[760px]:mb-10 max-[760px]:grid max-[760px]:h-auto max-[760px]:gap-8 max-[760px]:before:hidden">
        {EXPERIENCE.map((job, index) => {
          const isActive = activeExperienceIndex === index;
          const isAbove = index % 2 === 0;
          const timelinePosition = `${getTimelinePosition(index)}%`;

          return (
            <button
              className={`absolute left-[var(--timeline-left)] z-10 grid min-h-[148px] w-[164px] -translate-x-1/2 content-center justify-items-center gap-1.5 rounded-xl border bg-white p-3.5 text-center text-[#19192d] shadow-[0_18px_40px_rgba(0,0,0,0.14)] transition-all duration-200 max-[760px]:relative max-[760px]:left-auto max-[760px]:top-auto max-[760px]:bottom-auto max-[760px]:mx-auto max-[760px]:w-full max-[760px]:max-w-[260px] max-[760px]:translate-x-0 ${
                isAbove ? "bottom-[calc(50%+42px)]" : "top-[calc(50%+42px)]"
              } ${
                isActive
                  ? "border-[var(--accent)] shadow-[0_20px_42px_rgba(0,0,0,0.22),0_0_0_3px_rgba(255,102,77,0.1)]"
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
                className={`absolute left-1/2 h-0.5 w-[42px] -translate-x-1/2 bg-[var(--accent)] opacity-70 max-[760px]:hidden ${
                  isAbove
                    ? "bottom-[-22px] rotate-90"
                    : "top-[-22px] rotate-90"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-[var(--accent)]/20 shadow-[0_0_0_9px_rgba(255,102,77,0.07)] max-[760px]:hidden ${
                  isAbove ? "-translate-y-1/2" : "translate-y-1/2"
                }`}
                style={{
                  top: isAbove ? "calc(100% + 42px)" : "auto",
                  bottom: isAbove ? "auto" : "calc(100% + 42px)",
                }}
              >
                <span
                  className={`h-5 w-5 rounded-full border-[3px] border-white bg-[var(--accent)] ${
                    isActive ? "shadow-[0_0_0_6px_rgba(255,255,255,0.14)]" : ""
                  }`}
                />
              </span>
              <span
                className={`absolute left-1/2 h-[42px] w-0.5 -translate-x-1/2 bg-[var(--accent)] max-[760px]:hidden ${
                  isAbove ? "bottom-[-42px]" : "top-[-42px]"
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
