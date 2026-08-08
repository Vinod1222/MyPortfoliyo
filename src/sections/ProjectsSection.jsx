import { ChevronDown } from "lucide-react";
import { PROJECTS } from "../constants/portfolioData";
import { getProjectSections } from "../utils/sectionUtils";

function ProjectDetail({ activeSection, onSectionChange, project }) {
  const selectedSection = getProjectSections(project)[activeSection];

  return (
    <div className="project-detail">
      <aside
        className="project-detail-nav"
        aria-label={`${project.name} detail contents`}
      >
        <strong>Contents</strong>
        {project.contents.map((item, itemIndex) => (
          <button
            type="button"
            className={activeSection === itemIndex ? "selected" : ""}
            key={item}
            onMouseEnter={() => onSectionChange(itemIndex)}
            onFocus={() => onSectionChange(itemIndex)}
            onClick={() => onSectionChange(itemIndex)}
          >
            <small>{itemIndex + 1}.</small>
            {item}
          </button>
        ))}
      </aside>

      <div className="project-detail-body">
        <section className="detail-block">
          <h4>{selectedSection.title}</h4>
          <p>{selectedSection.intro}</p>
        </section>

        {selectedSection.type === "table" && (
          <div
            className="project-table"
            role="table"
            aria-label={`${project.name} before and after`}
          >
            <div className="table-row table-head" role="row">
              <strong>Area</strong>
              <strong>Before</strong>
              <strong>After</strong>
            </div>
            {project.table.map(([area, before, after]) => (
              <div className="table-row" role="row" key={area}>
                <strong>{area}</strong>
                <span>{before}</span>
                <span>{after}</span>
              </div>
            ))}
          </div>
        )}

        {selectedSection.type === "layers" && (
          <div className="architecture-layers">
            {selectedSection.layers.map(([layer, items]) => (
              <div className="architecture-layer" key={layer}>
                <h5>{layer}</h5>
                <div className="chips">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedSection.type === "modules" && (
          <div className="module-grid">
            {selectedSection.modules.map((module) => (
              <article key={module.area}>
                <h5>{module.area}</h5>
                <p>{module.detail}</p>
              </article>
            ))}
          </div>
        )}

        {selectedSection.type === "capabilities" && (
          <section className="detail-block">
            <ul>
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
    <section className="projects-section dark-section" id="projects">
      <h2>Solutions Built for Impact, Speed, and Reliability</h2>
      <div className="project-list">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;
          const isOpen = openProject === index;

          return (
            <article
              className={isOpen ? "project-card open" : "project-card"}
              onPointerEnter={() => onProjectToggle(index)}
              onClick={(event) => {
                if (event.target.closest("button, a")) return;
                onProjectToggle(index);
              }}
              key={project.name}
            >
              <div className="project-status">
                <span className="project-icon">
                  <Icon size={24} />
                </span>
                <small>{project.status}</small>
              </div>

              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="chips">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {isOpen && <p className="impact">{project.impact}</p>}
              </div>

              <button
                type="button"
                aria-label={`Toggle ${project.name}`}
                aria-expanded={isOpen}
                onClick={() => onProjectToggle(index)}
              >
                <ChevronDown size={18} />
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
