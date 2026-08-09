import { BriefcaseBusiness, ChevronDown, Github } from "lucide-react";
import { CASE_STUDIES } from "../constants/portfolioData";

export function CaseStudiesSection({ onCaseToggle, openCase }) {
  return (
    <section className="bg-[#f7f8fa] px-[5.5vw] py-20 max-md:px-4 max-md:py-12" id="case-studies">
      <h2 className="mb-10 text-[clamp(36px,5vw,64px)] font-black tracking-normal text-[#19192d]">
        Case Studies
      </h2>
      <div className="grid gap-6">
        {CASE_STUDIES.map((study, index) => (
          <article
            className="case-card relative grid cursor-pointer grid-cols-[70px_1fr_54px] overflow-hidden rounded-[22px] border border-black/10 bg-white p-8 shadow-[0_22px_55px_rgba(17,24,39,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff664d]/50 max-md:grid-cols-1 max-md:p-5"
            onPointerEnter={() => onCaseToggle(index)}
            onFocus={() => onCaseToggle(index)}
            onClick={(event) => {
              if (event.target.closest("button, a")) return;
              onCaseToggle(index);
            }}
            key={study.title}
          >
            <span className="grid h-[58px] w-[58px] place-items-center rounded-2xl bg-[#ff664d]/10 text-[#ff664d]">
              <BriefcaseBusiness size={24} />
            </span>
            <div>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-2xl font-black tracking-normal text-[#19192d]">
                  {study.title}
                </h3>
                <a
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-black/10 px-4 text-sm font-black text-[#19192d] transition-colors hover:border-[#ff664d] hover:text-[#ff664d] max-md:w-full max-md:justify-center"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
              <p className="mb-5 text-lg leading-8 text-[#4b5563]">
                {study.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                {study.tags.map((tag) => (
                  <span className="rounded-full bg-[#19192d]/5 px-4 py-2 text-xs font-black text-[#19192d]" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {openCase === index && (
                <p className="mt-5 rounded-2xl bg-[#19192d]/5 p-5 text-base leading-7 text-[#4b5563]">
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
              className="grid h-[54px] w-[54px] place-items-center rounded-2xl border border-black/10 bg-[#19192d]/5 text-[#19192d] transition-all duration-300 max-md:absolute max-md:right-5 max-md:top-5"
              onClick={() => onCaseToggle(index)}
            >
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openCase === index ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
