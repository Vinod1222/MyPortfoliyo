import { ChevronDown } from "lucide-react";
import { PROJECTS } from "../constants/portfolioData";
import { getProjectSections } from "../utils/sectionUtils";

function ProjectDetail({ activeSection, onSectionChange, project }) {
  const selectedSection = getProjectSections(project)[activeSection];

  return (
    <div className="col-span-full -mx-6 -mb-[26px] mt-1.5 grid min-h-[500px] grid-cols-[280px_minmax(0,1fr)] overflow-hidden border-t border-white/15 bg-[#121126]/40 max-lg:grid-cols-1 max-[620px]:-mx-[18px]">
      <aside
        className="border-r border-white/10 bg-white/[0.02] px-6 py-7 max-lg:border-b max-lg:border-r-0 max-md:p-4"
        aria-label={`${project.name} detail contents`}
      >
        <strong className="mb-4 block text-xs font-black uppercase tracking-[0.16em] text-white/35">
          Contents
        </strong>
        {project.contents.map((item, itemIndex) => (
          <button
            type="button"
            className={`mb-2 flex min-h-11 w-full items-center gap-3 rounded-xl border-0 px-3 text-left text-sm font-black transition-all duration-200 ${
              activeSection === itemIndex
                ? "bg-[#ff664d] text-white shadow-[0_12px_26px_rgba(255,102,77,0.2)]"
                : "bg-white/[0.05] text-white/55 hover:bg-white/10 hover:text-white"
            }`}
            key={item}
            onMouseEnter={() => onSectionChange(itemIndex)}
            onFocus={() => onSectionChange(itemIndex)}
            onClick={() => onSectionChange(itemIndex)}
          >
            <small className="font-black opacity-60">{itemIndex + 1}.</small>
            {item}
          </button>
        ))}
      </aside>

      <div className="max-h-[500px] overflow-auto p-8 max-md:p-4">
        <section>
          <h4 className="mb-3 text-[24px] font-black tracking-normal text-white">
            {selectedSection.title}
          </h4>
          <p className="text-base leading-[1.65] text-[#c8d2f5]">
            {selectedSection.intro}
          </p>
        </section>

        {selectedSection.type === "table" && (
          <div
            className="mt-5 overflow-hidden rounded-[16px] border border-white/10 text-sm"
            role="table"
            aria-label={`${project.name} before and after`}
          >
            <div className="grid grid-cols-[0.7fr_1fr_1fr] bg-[#2d2b55] max-md:grid-cols-1" role="row">
              <strong className="p-3 text-white">Area</strong>
              <strong className="p-3 text-white">Before</strong>
              <strong className="p-3 text-white">After</strong>
            </div>
            {project.table.map(([area, before, after]) => (
              <div
                className="grid grid-cols-[0.7fr_1fr_1fr] border-t border-white/10 max-md:grid-cols-1"
                role="row"
                key={area}
              >
                <strong className="p-3 text-white">{area}</strong>
                <span className="p-3 text-[#c8d2f5]">{before}</span>
                <span className="p-3 text-[#c8d2f5]">{after}</span>
              </div>
            ))}
          </div>
        )}

        {selectedSection.type === "layers" && (
          <div className="mt-5 grid gap-3">
            {selectedSection.layers.map(([layer, items]) => (
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4" key={layer}>
                <h5 className="mb-3 text-base font-black text-white">{layer}</h5>
                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-black text-[#c8d2f5]" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedSection.type === "modules" && (
          <div className="mt-5 grid grid-cols-2 gap-3 max-md:grid-cols-1">
            {selectedSection.modules.map((module) => (
              <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-4" key={module.area}>
                <h5 className="mb-2 text-base font-black text-white">{module.area}</h5>
                <p className="text-sm leading-7 text-[#c8d2f5]">{module.detail}</p>
              </article>
            ))}
          </div>
        )}

        {selectedSection.type === "capabilities" && (
          <section className="mt-5">
            <ul className="grid gap-3 pl-5 text-sm leading-7 text-[#c8d2f5]">
              {project.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection({
  activeProjectSection,
  onProjectSectionChange,
  onProjectToggle,
  openProject,
}) {
  return (
    <section
      className="min-h-[90vh] bg-[#19182d] px-[7vw] py-24 pb-28 text-white max-[980px]:min-h-0 max-[980px]:px-[22px] max-[980px]:py-20 max-[980px]:pb-20 max-[620px]:px-4 max-[620px]:py-10"
      id="projects"
    >
      <h2 className="mx-auto mb-12 max-w-[1020px] text-center text-[clamp(34px,3.7vw,48px)] font-black leading-[1.08] tracking-normal max-[760px]:mb-9 max-[760px]:text-[34px] max-[620px]:text-[30px] max-[420px]:text-[28px]">
        Solutions Built for Impact, Speed, and Reliability
      </h2>
      <div className="mx-auto grid max-w-[1320px] gap-5">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;
          const isOpen = openProject === index;

          return (
            <article
              className={`relative grid cursor-pointer grid-cols-[76px_minmax(0,1fr)_44px] items-center gap-5 overflow-hidden rounded-[20px] border border-[#ff664d]/40 border-t-[3px] border-t-[#ff664d] bg-[#21203b] px-5 py-5 shadow-[0_20px_48px_rgba(0,0,0,0.12)] transition-all duration-300 max-[980px]:grid-cols-1 max-[620px]:rounded-2xl max-[620px]:px-4 max-[620px]:py-5 ${
                isOpen
                  ? "items-start border-[#ff664d]"
                  : "hover:border-[#ff664d]/70"
              }`}
              onClick={(event) => {
                if (event.target.closest("button, a")) return;
                onProjectToggle(index);
              }}
              key={project.name}
            >
              <div className="grid justify-items-center gap-2.5 max-[980px]:flex max-[980px]:items-center max-[980px]:justify-start">
                <span className="grid h-12 w-12 place-items-center rounded-[13px] bg-[#ff664d]/15 text-[#ff664d]">
                  <Icon size={24} />
                </span>
                <small className="text-xs font-black uppercase tracking-[0.08em] text-[#20d071]">
                  {project.status}
                </small>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-black tracking-normal text-white max-[620px]:text-lg">
                  {project.name}
                </h3>
                <p className="mb-3 text-base leading-[1.65] text-white/55">
                  {project.description}
                </p>
                <div className="flex min-w-0 flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className="rounded-full bg-white/[0.09] px-3 py-1.5 text-xs font-bold text-white/60" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {isOpen && (
                  <p className="mt-4 text-base font-black text-white/75">
                    {project.impact}
                  </p>
                )}
              </div>

              <button
                type="button"
                aria-label={`Toggle ${project.name}`}
                aria-expanded={isOpen}
                className="grid h-[42px] w-[42px] place-items-center justify-self-end rounded-[11px] border border-white/10 bg-white/[0.05] text-white/55 transition-all duration-300"
                onClick={() => onProjectToggle(index)}
              >
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>

              {isOpen && (
                <ProjectDetail
                  activeSection={activeProjectSection}
                  onSectionChange={onProjectSectionChange}
                  project={project}
                />
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
