import { ChevronDown, Send } from "lucide-react";
import { SKILLS } from "../constants/portfolioData";

export function AboutSection({ openSkill, onSkillToggle }) {
  return (
    <section
      className="min-h-[calc(100vh-76px)] bg-[linear-gradient(90deg,#f5f6f8_0%,#ffffff_56%,#fbf8f7_100%)] px-[7vw] py-24 pb-20 max-[980px]:px-[22px] max-[980px]:pt-[54px] max-[620px]:px-4 max-[620px]:py-[34px] max-[620px]:pb-[54px]"
      id="about"
    >
      <div className="mx-auto grid max-w-[1460px] grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] items-start gap-14 max-[980px]:grid-cols-1">
        <div
          className="relative grid gap-2.5 pl-[46px]"
          aria-label="Core competency groups"
        >
          <div className="absolute bottom-[68px] left-[18px] top-1.5 w-[3px] rounded-full bg-[linear-gradient(#ff5bb2,#24b5ff,#ff654d,#27d5a1,#f7b500)] opacity-50 max-md:hidden" />
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            const isOpen = openSkill === index;

            return (
              <article
                className={`relative z-10 overflow-hidden rounded-xl border bg-[#19182d] text-white shadow-[0_16px_34px_rgba(25,24,45,0.16)] transition-all duration-200 ${
                  isOpen
                    ? "border-[var(--accent)] shadow-[0_16px_34px_rgba(25,24,45,0.16),inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                    : "border-white/[0.05] hover:border-[var(--accent)]"
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
                  className="grid min-h-[66px] w-full min-w-0 grid-cols-[42px_1fr_28px] items-center gap-3 border-0 bg-transparent px-4 py-3 text-left text-inherit"
                  onClick={() => onSkillToggle(index)}
                >
                  <span className="absolute left-[-32px] top-7 h-3.5 w-3.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_7px_rgba(255,255,255,0.7)] max-md:hidden" />
                  <span className="grid h-[42px] w-[42px] place-items-center rounded-[9px] bg-white/10 text-[var(--accent)]">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0">
                    <strong className="block [overflow-wrap:anywhere] text-base font-black">
                      {skill.title}
                    </strong>
                    <small className="mt-1 block [overflow-wrap:anywhere] text-sm font-bold leading-[1.35] text-white/45">
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
                  <div className="flex flex-wrap gap-2 px-[18px] pb-[18px] pl-[76px] max-[620px]:pl-[18px]">
                    <p className="mb-2 w-full text-[15px] leading-[1.55] text-white/60">
                      {skill.description}
                    </p>
                    {skill.details.map((detail) => (
                      <span
                        className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-[var(--accent)]"
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

        <article className="rounded-[14px] border-t-4 border-t-[#ff654d] bg-white px-7 py-7 shadow-[0_24px_64px_rgba(30,29,52,0.12)] max-[620px]:p-6 max-[420px]:p-5">
          <h1 className="mb-5 text-[clamp(32px,3vw,40px)] font-black leading-none tracking-normal text-[#19192d]">
            About Me
          </h1>
          <p className="mb-5 text-base leading-[1.65] text-[#6b7280]">
            I am Vinod Kumar Yadav, a Bangalore-based Frontend Engineer with
            4.5+ years of hands-on experience building scalable,
            high-performance React.js applications for fintech and enterprise
            platforms.
          </p>
          <p className="mb-5 text-base leading-[1.65] text-[#6b7280]">
            I specialize in component-based architecture, Redux state
            management, TypeScript, REST API integration, and responsive UI/UX.
            My work spans customer portals, back-office CRMs, dashboards,
            onboarding flows, account systems, and role-based SaaS products.
          </p>
          <p className="mb-5 text-base leading-[1.65] text-[#6b7280]">
            I enjoy turning complex product requirements into clean interfaces
            that are fast, accessible, maintainable, and ready for production
            teams to extend.
          </p>
          <div className="mt-6 grid grid-cols-[42px_1fr] items-start gap-3.5 rounded-xl border border-[#ff664d]/20 bg-[linear-gradient(135deg,#fff6ee,#fff0ef)] p-5 text-[#465063] max-[620px]:grid-cols-1">
            <Send className="text-[#ff664d]" size={20} />
            <strong className="text-base leading-[1.6]">
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
