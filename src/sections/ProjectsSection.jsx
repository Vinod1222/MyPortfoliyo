import { ChevronDown } from "lucide-react";
import { PROJECTS } from "../constants/portfolioData";
import { getProjectSections } from "../utils/sectionUtils";

function ProjectDetail({ activeSection, onSectionChange, project }) {
  const selectedSection = getProjectSections(project)[activeSection];

  return (
    <div className="col-span-full mt-8 grid grid-cols-[320px_1fr] overflow-hidden border-t border-white/10 max-lg:grid-cols-1">
      <aside
        className="border-r border-white/10 p-8 max-lg:border-b max-lg:border-r-0 max-md:p-5"
        aria-label={`${project.name} detail contents`}
      >
        <strong className="mb-5 block text-xs font-black uppercase tracking-[0.22em] text-white/45">
          Contents
        </strong>
        {project.contents.map((item, itemIndex) => (
          <button
            type="button"
            className={`mb-3 flex min-h-14 w-full items-center gap-3 rounded-xl border-0 px-4 text-left text-base font-black transition-all duration-200 ${
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

      <div className="max-h-[360px] overflow-auto p-8 max-md:p-5">
        <section>
          <h4 className="mb-4 text-2xl font-black tracking-normal text-white">
            {selectedSection.title}
          </h4>
          <p className="text-base leading-7 text-[#c8d2f5]">
            {selectedSection.intro}
          </p>
        </section>

        {selectedSection.type === "table" && (
          <div
            className="mt-6 overflow-hidden rounded-[18px] border border-white/10"
            role="table"
            aria-label={`${project.name} before and after`}
          >
            <div className="grid grid-cols-[0.7fr_1fr_1fr] bg-[#2d2b55] max-md:grid-cols-1" role="row">
              <strong className="p-4 text-white">Area</strong>
              <strong className="p-4 text-white">Before</strong>
              <strong className="p-4 text-white">After</strong>
            </div>
            {project.table.map(([area, before, after]) => (
              <div
                className="grid grid-cols-[0.7fr_1fr_1fr] border-t border-white/10 max-md:grid-cols-1"
                role="row"
                key={area}
              >
                <strong className="p-4 text-white">{area}</strong>
                <span className="p-4 text-[#c8d2f5]">{before}</span>
                <span className="p-4 text-[#c8d2f5]">{after}</span>
              </div>
            ))}
          </div>
        )}

        {selectedSection.type === "layers" && (
          <div className="mt-8 grid gap-4">
            {selectedSection.layers.map(([layer, items]) => (
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5" key={layer}>
                <h5 className="mb-3 text-lg font-black text-white">{layer}</h5>
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
          <div className="mt-8 grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {selectedSection.modules.map((module) => (
              <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-5" key={module.area}>
                <h5 className="mb-2 text-lg font-black text-white">{module.area}</h5>
                <p className="leading-7 text-[#c8d2f5]">{module.detail}</p>
              </article>
            ))}
          </div>
        )}

        {selectedSection.type === "capabilities" && (
          <section className="mt-8">
            <ul className="grid gap-4 pl-5 text-lg leading-8 text-[#c8d2f5]">
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
    <section className="bg-[#19182d] px-[5.5vw] py-16 text-white max-md:px-4 max-md:py-12" id="projects">
      <h2 className="mb-10 max-w-[1120px] text-[clamp(32px,4vw,54px)] font-black leading-tight tracking-normal">
        Solutions Built for Impact, Speed, and Reliability
      </h2>
      <div className="grid gap-8">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;
          const isOpen = openProject === index;

          return (
            <article
              className={`relative grid cursor-pointer grid-cols-[78px_1fr_50px] overflow-hidden rounded-[22px] border bg-[#21203b] shadow-[0_22px_60px_rgba(0,0,0,0.2)] transition-all duration-300 max-md:grid-cols-1 max-md:p-0 ${
                isOpen
                  ? "border-[#ff664d] shadow-[0_28px_70px_rgba(0,0,0,0.28)]"
                  : "border-white/10 hover:-translate-y-1 hover:border-[#ff664d]/70"
              }`}
              onClick={(event) => {
                if (event.target.closest("button, a")) return;
                onProjectToggle(index);
              }}
              key={project.name}
            >
              <div className="grid content-start justify-items-center gap-3 p-6 max-md:flex max-md:items-center max-md:justify-start max-md:p-5">
                <span className="grid h-14 w-14 place-items-center rounded-[16px] bg-[#ff664d]/15 text-[#ff664d]">
                  <Icon size={24} />
                </span>
                <small className="text-xs font-black uppercase tracking-[0.16em] text-[#24e58a]">
                  {project.status}
                </small>
              </div>

              <div className="p-6 pl-0 max-md:p-5 max-md:pt-0">
                <h3 className="mb-3 text-2xl font-black tracking-normal text-white max-md:text-[19px]">
                  {project.name}
                </h3>
                <p className="mb-4 text-base leading-7 text-[#c8d2f5]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-[#c8d2f5]" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {isOpen && (
                  <p className="mt-6 text-lg font-black text-white/75">
                    {project.impact}
                  </p>
                )}
              </div>

              <button
                type="button"
                aria-label={`Toggle ${project.name}`}
                aria-expanded={isOpen}
                className="m-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-white transition-all duration-300 max-md:absolute max-md:right-0 max-md:top-0"
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
