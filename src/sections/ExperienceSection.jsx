import { EXPERIENCE } from "../constants/portfolioData";

export function ExperienceSection() {
  const primaryExperience = EXPERIENCE[0];

  return (
    <section className="scroll-mt-[88px] bg-[#19182d] px-[5.5vw] py-20 text-white" id="experience">
      <h2 className="mx-auto mb-12 max-w-[1180px] text-4xl font-black lg:text-[54px]">Industry Experience</h2>
      <div className="mx-auto grid max-w-[1180px] gap-5 md:grid-cols-2">
        {EXPERIENCE.map((job, index) => (
          <article
            className="rounded-lg border border-white/10 bg-white/[0.06] p-6"
            style={{ "--accent": job.color }}
            key={job.company}
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="grid size-14 place-items-center rounded-lg bg-[var(--accent)] text-lg font-black text-white">
                {job.mark}
              </div>
              <strong className="text-3xl font-black text-white/15">{job.year}</strong>
            </div>
            <h3 className="text-2xl font-black text-white">{job.company}</h3>
            <p className="mt-2 text-sm font-bold text-white/55">{job.period}</p>
            {job.current && (
              <small className="mt-4 inline-flex rounded-full bg-emerald-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                Current
              </small>
            )}
          </article>
        ))}
      </div>
      <div className="mx-auto mt-8 max-w-[1180px] rounded-lg border border-white/10 bg-white/[0.06] p-6">
        <h3 className="mb-4 text-2xl font-black text-white">
          {primaryExperience.company} <span>Roles & Responsibilities</span>
        </h3>
        <ul className="grid gap-3">
          {primaryExperience.bullets.map((bullet) => (
            <li className="ml-5 list-disc text-base leading-relaxed text-white/65 marker:text-[#ff664d]" key={bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
