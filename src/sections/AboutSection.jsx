import { ChevronDown, Send } from "lucide-react";
import { SKILLS } from "../constants/portfolioData";

export function AboutSection({ openSkill, onSkillToggle }) {
  return (
    <section className="bg-[#f7f8fa] px-[5.5vw] py-16 max-md:px-4 max-md:py-10" id="about">
      <div className="grid grid-cols-[minmax(280px,0.78fr)_minmax(0,1fr)] gap-10 max-lg:grid-cols-1">
        <div className="relative grid gap-4" aria-label="Core competency groups">
          <div className="absolute left-[27px] top-0 h-full w-px bg-[#19192d]/10 max-md:hidden" />
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            const isOpen = openSkill === index;

            return (
              <article
                className={`relative z-10 overflow-hidden rounded-[18px] border bg-white shadow-[0_18px_40px_rgba(17,24,39,0.08)] transition-all duration-300 ${
                  isOpen
                    ? "border-[var(--accent)] shadow-[0_24px_55px_rgba(17,24,39,0.12)]"
                    : "border-black/10 hover:-translate-y-1 hover:border-[var(--accent)]"
                }`}
                style={{ "--accent": skill.color }}
                onPointerEnter={() => onSkillToggle(index)}
                onFocus={() => onSkillToggle(index)}
                onClick={(event) => {
                  if (event.target.closest("button, a")) return;
                  onSkillToggle(index);
                }}
                key={skill.title}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[52px_1fr_auto] items-center gap-4 border-0 bg-transparent p-4 text-left text-[#19192d] max-md:grid-cols-[44px_1fr_auto] max-md:p-4"
                  onClick={() => onSkillToggle(index)}
                >
                  <span className="absolute left-[22px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-[var(--accent)] shadow-[0_0_0_8px_rgba(25,25,45,0.06)] max-md:hidden" />
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] max-md:h-11 max-md:w-11">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0">
                    <strong className="block text-base font-black">
                      {skill.title}
                    </strong>
                    <small className="mt-1 block text-[13px] font-bold leading-snug text-[#6b7280]">
                      {skill.subtitle}
                    </small>
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-black/10 px-5 pb-5 pt-0 max-md:px-4">
                    <p className="mb-4 text-sm leading-7 text-[#4b5563]">
                      {skill.description}
                    </p>
                    {skill.details.map((detail) => (
                      <span
                        className="mb-2 mr-2 inline-flex rounded-full bg-[#19192d]/5 px-3 py-2 text-xs font-black text-[#19192d]"
                        key={detail}
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <article className="rounded-[24px] border border-black/10 bg-white p-8 shadow-[0_24px_70px_rgba(17,24,39,0.08)] max-md:p-6">
          <h1 className="mb-5 text-[clamp(34px,4vw,52px)] font-black leading-none tracking-normal text-[#19192d]">
            About Me
          </h1>
          <p className="mb-4 text-base leading-[1.75] text-[#4b5563]">
            I am Vinod Kumar Yadav, a Bangalore-based Frontend Engineer with
            4.5+ years of hands-on experience building scalable,
            high-performance React.js applications for fintech and enterprise
            platforms.
          </p>
          <p className="mb-4 text-base leading-[1.75] text-[#4b5563]">
            I specialize in component-based architecture, Redux state
            management, TypeScript, REST API integration, and responsive UI/UX.
            My work spans customer portals, back-office CRMs, dashboards,
            onboarding flows, account systems, and role-based SaaS products.
          </p>
          <p className="mb-4 text-base leading-[1.75] text-[#4b5563]">
            I enjoy turning complex product requirements into clean interfaces
            that are fast, accessible, maintainable, and ready for production
            teams to extend.
          </p>
          <div className="mt-8 grid grid-cols-[44px_1fr] gap-4 rounded-[18px] border border-[#ff664d]/20 bg-[#ff664d]/10 p-5 text-[#19192d] max-md:grid-cols-1">
            <Send className="text-[#ff664d]" size={20} />
            <strong className="text-base leading-7">
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
