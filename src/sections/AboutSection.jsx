import { ChevronDown, Send } from "lucide-react";
import { SKILLS } from "../constants/portfolioData";

export function AboutSection({ openSkill, onSkillToggle }) {
  return (
    <section className="scroll-mt-[88px] bg-[#f7f8fa] px-[5.5vw] py-20" id="about">
      <div className="mx-auto grid max-w-[1380px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]">
        <div className="relative grid gap-4" aria-label="Core competency groups">
          <div className="absolute bottom-6 left-6 top-6 hidden w-px bg-slate-200 md:block" />
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            const isOpen = openSkill === index;

            return (
              <article
                className={`relative rounded-lg border bg-white shadow-sm transition-all ${
                  isOpen
                    ? "border-[#ff664d]/35 shadow-[0_18px_40px_rgba(25,24,45,0.10)]"
                    : "border-slate-200"
                }`}
                style={{ "--accent": skill.color }}
                key={skill.title}
              >
                <button
                  className="grid w-full grid-cols-[42px_minmax(0,1fr)_24px] items-center gap-4 p-5 text-left"
                  type="button"
                  onClick={() => onSkillToggle(index)}
                >
                  <span className="absolute left-5 top-1/2 hidden size-3 -translate-y-1/2 rounded-full bg-[var(--accent)] md:block" />
                  <span className="grid size-11 place-items-center rounded-lg bg-slate-100 text-[var(--accent)]">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0">
                    <strong className="block text-lg font-black text-[#19192d]">{skill.title}</strong>
                    <small className="block [overflow-wrap:anywhere] text-sm font-bold text-slate-500">{skill.subtitle}</small>
                  </span>
                  <ChevronDown
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-1">
                    <p className="mb-4 text-[15px] leading-relaxed text-slate-600">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                    {skill.details.map((detail) => (
                      <span
                        className="inline-flex min-h-8 items-center rounded-full bg-slate-100 px-3 text-xs font-extrabold text-slate-700"
                        key={detail}
                      >
                        {detail}
                      </span>
                    ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm lg:p-10">
          <h1 className="mb-6 text-4xl font-black text-[#19192d] lg:text-[44px]">About Me</h1>
          <p className="mb-5 text-lg leading-relaxed text-slate-600">
            I am Vinod Kumar Yadav, a Bangalore-based Frontend Engineer with
            4.5+ years of hands-on experience building scalable,
            high-performance React.js applications for fintech and enterprise
            platforms.
          </p>
          <p className="mb-5 text-lg leading-relaxed text-slate-600">
            I specialize in component-based architecture, Redux state
            management, TypeScript, REST API integration, and responsive UI/UX.
            My work spans customer portals, back-office CRMs, dashboards,
            onboarding flows, account systems, and role-based SaaS products.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            I enjoy turning complex product requirements into clean interfaces
            that are fast, accessible, maintainable, and ready for production
            teams to extend.
          </p>
          <div className="flex gap-4 rounded-lg border border-[#ff664d]/20 bg-[#ff664d]/10 p-5 text-[#19192d]">
            <Send size={20} />
            <strong className="text-base leading-relaxed">
              If you are looking for a React engineer who can ship polished
              fintech and enterprise products with ownership, speed, and care, I
              am ready to bring that value to your team.
            </strong>
          </div>
        </article>
      </div>
    </section>
  );
}
