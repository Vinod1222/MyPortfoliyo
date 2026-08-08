import { BriefcaseBusiness, ChevronDown, Github } from "lucide-react";
import { CASE_STUDIES } from "../constants/portfolioData";

export function CaseStudiesSection({ onCaseToggle, openCase }) {
  return (
    <section className="scroll-mt-[88px] bg-[#f7f8fa] px-[5.5vw] py-20" id="case-studies">
      <h2 className="mx-auto mb-10 max-w-[1180px] text-4xl font-black text-[#19192d] lg:text-[54px]">
        Case Studies
      </h2>
      <div className="mx-auto grid max-w-[1180px] gap-5">
        {CASE_STUDIES.map((study, index) => (
          <article
            className="relative grid gap-5 overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[56px_minmax(0,1fr)_48px]"
            key={study.title}
          >
            <span className={`grid size-12 place-items-center rounded-lg ${
              study.color === "cool"
                ? "bg-sky-100 text-sky-600"
                : "bg-[#ff664d]/10 text-[#ff664d]"
            }`}>
              <BriefcaseBusiness size={24} />
            </span>
            <div>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-black text-[#19192d]">{study.title}</h3>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-extrabold text-slate-600 transition hover:border-[#ff664d]/30 hover:text-[#ff664d]"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
              <p className="mb-4 text-base leading-relaxed text-slate-600">{study.summary}</p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-extrabold text-slate-700" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {openCase === index && (
                <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm font-bold text-slate-600">
                  Focus areas: reusable components, clear state boundaries,
                  production-ready flows, and responsive behavior across web and
                  mobile.
                </p>
              )}
            </div>
            <button
              className="grid size-12 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-[#ff664d]/30 hover:text-[#ff664d] md:justify-self-end"
              type="button"
              aria-label={`Toggle ${study.title}`}
              onClick={() => onCaseToggle(index)}
            >
              <ChevronDown className={openCase === index ? "rotate-180 transition-transform" : "transition-transform"} size={18} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
