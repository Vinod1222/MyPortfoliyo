import { ChevronDown } from "lucide-react";
import { PROJECTS } from "../constants/portfolioData";
import { getProjectSections } from "../utils/sectionUtils";

function ProjectDetail({ activeSection, onSectionChange, project }) {
  const selectedSection = getProjectSections(project)[activeSection];

  return (
    <div className="col-span-full grid gap-5 border-t border-white/10 pt-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside
        className="grid content-start gap-2 rounded-lg border border-white/10 bg-white/5 p-4"
        aria-label={`${project.name} detail contents`}
      >
        <strong className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-white/45">Contents</strong>
        {project.contents.map((item, itemIndex) => (
          <button
            type="button"
            className={`grid grid-cols-[28px_minmax(0,1fr)] items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-extrabold transition ${
              activeSection === itemIndex
                ? "bg-[#ff664d] text-white"
                : "text-white/65 hover:bg-white/10 hover:text-white"
            }`}
            key={item}
            onClick={() => onSectionChange(itemIndex)}
          >
            <small className="text-white/55">{itemIndex + 1}.</small>
            {item}
          </button>
        ))}
      </aside>

      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#151428] p-5">
        <section>
          <h4 className="mb-3 text-2xl font-black text-white">{selectedSection.title}</h4>
          <p className="mb-5 text-base leading-relaxed text-white/65">{selectedSection.intro}</p>
        </section>

        {selectedSection.type === "table" && (
          <div
            className="overflow-x-auto"
            role="table"
            aria-label={`${project.name} before and after`}
          >
            <div className="min-w-[760px] overflow-hidden rounded-lg border border-white/10">
              <div className="grid grid-cols-[minmax(160px,0.85fr)_minmax(190px,1fr)_minmax(260px,1.55fr)] bg-white/10 text-sm font-black text-white" role="row">
                <strong className="border-r border-white/10 p-4">Area</strong>
                <strong className="border-r border-white/10 p-4">Before</strong>
                <strong className="p-4">After</strong>
              </div>
              {project.table.map(([area, before, after]) => (
                <div
                  className="grid grid-cols-[minmax(160px,0.85fr)_minmax(190px,1fr)_minmax(260px,1.55fr)] border-t border-white/10 text-sm"
                  role="row"
                  key={area}
                >
                  <strong className="border-r border-white/10 p-4 text-white">{area}</strong>
                  <span className="border-r border-white/10 p-4 text-white/55">{before}</span>
                  <span className="p-4 text-emerald-200">{after}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedSection.type === "layers" && (
          <div className="grid gap-4 md:grid-cols-3">
            {selectedSection.layers.map(([layer, items]) => (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4" key={layer}>
                <h5 className="mb-3 text-base font-black text-white">{layer}</h5>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-extrabold text-white/75" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedSection.type === "modules" && (
          <div className="grid gap-4 md:grid-cols-2">
            {selectedSection.modules.map((module) => (
              <article className="rounded-lg border border-white/10 bg-white/5 p-4" key={module.area}>
                <h5 className="mb-2 text-base font-black text-white">{module.area}</h5>
                <p className="text-sm leading-relaxed text-white/60">{module.detail}</p>
              </article>
            ))}
          </div>
        )}

        {selectedSection.type === "capabilities" && (
          <section>
            <ul className="grid gap-3">
              {project.capabilities.map((capability) => (
                <li className="ml-5 list-disc text-base leading-relaxed text-white/65 marker:text-[#ff664d]" key={capability}>
                  {capability}
                </li>
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
    <section className="scroll-mt-[88px] bg-[#19182d] px-[5.5vw] py-20 text-white" id="projects">
      <h2 className="mx-auto mb-10 max-w-[1180px] text-4xl font-black leading-tight lg:text-[54px]">
        Solutions Built for Impact, Speed, and Reliability
      </h2>
      <div className="mx-auto grid max-w-[1180px] gap-5">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;
          const isOpen = openProject === index;

          return (
            <article
              className={`grid gap-5 rounded-lg border p-5 transition-all md:grid-cols-[56px_minmax(0,1fr)_48px] ${
                isOpen
                  ? "border-[#ff664d]/35 bg-white/[0.08]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
              key={project.name}
            >
              <div className="flex items-center gap-3 md:block">
                <span className="grid size-12 place-items-center rounded-lg bg-[#ff664d]/15 text-[#ff8a74]">
                  <Icon size={24} />
                </span>
                <small className="mt-3 block text-xs font-black uppercase tracking-[0.18em] text-emerald-300">{project.status}</small>
              </div>

              <div className="min-w-0">
                <h3 className="mb-2 text-2xl font-black text-white">{project.name}</h3>
                <p className="mb-4 text-base leading-relaxed text-white/65">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-extrabold text-white/70" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {isOpen && (
                  <p className="mt-4 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm font-bold text-emerald-100">
                    {project.impact}
                  </p>
                )}
              </div>

              <button
                className="grid size-12 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:justify-self-end"
                type="button"
                aria-label={`Toggle ${project.name}`}
                onClick={() => onProjectToggle(index)}
              >
                <ChevronDown className={isOpen ? "rotate-180 transition-transform" : "transition-transform"} size={18} />
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
