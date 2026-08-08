import React, { useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownToLine,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Cloud,
  Database,
  Github,
  Landmark,
  Layers3,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Zap,
  Wrench,
  X,
} from "lucide-react";
import "./styles.css";

const resumePath = "/Vinod_Kumar_Yadav_Senior_Frontend_Engineer.pdf";

const skills = [
  {
    title: "Frontend Engineering",
    subtitle: "React.js - Next.js - TypeScript - JavaScript ES6+",
    description:
      "Building scalable, high-performance React.js interfaces with component-based architecture, TypeScript, JavaScript ES6+, and Next.js.",
    details: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "React Hooks",
      "Component Architecture",
    ],
    color: "#ff5bb2",
    icon: Code2,
  },
  {
    title: "API & State Management",
    subtitle: "Redux - Context API - REST API - Axios - Fetch",
    description:
      "Managing complex frontend flows with Redux, Context API, REST integrations, Axios, Fetch, controlled forms, and real-time status updates.",
    details: [
      "Redux",
      "Context API",
      "REST API",
      "Axios",
      "Fetch",
      "Controlled Forms",
    ],
    color: "#2fb8ff",
    icon: Database,
  },
  {
    title: "Styling & UX",
    subtitle: "Tailwind CSS - SCSS - Bootstrap - Mobile-first UI",
    description:
      "Creating responsive, mobile-first screens with Tailwind CSS, SCSS, Bootstrap, pixel-perfect implementation, and WCAG-aware UI details.",
    details: [
      "Tailwind CSS",
      "SCSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
    color: "#ff654d",
    icon: MonitorSmartphone,
  },
  {
    title: "Testing & Quality",
    subtitle: "Jest - React Testing Library - Reviews - Agile",
    description:
      "Improving frontend quality through Jest, React Testing Library, unit and integration testing, Agile collaboration, and peer code reviews.",
    color: "#25c99c",
    details: [
      "Jest",
      "React Testing Library",
      "Unit Testing",
      "Integration Testing",
      "Code Reviews",
      "Agile/Scrum",
    ],
    icon: TestTube2,
  },
  {
    title: "Tools & Deployment",
    subtitle: "Git - GitHub - CI/CD - Docker - AWS S3/EC2",
    description:
      "Working with Git, GitHub, CI/CD pipelines, Docker, AWS S3/EC2, VS Code, npm, and performance practices like lazy loading and code splitting.",
    color: "#f7b500",
    details: [
      "Git",
      "GitHub",
      "CI/CD",
      "Docker",
      "AWS S3",
      "AWS EC2",
      "VS Code",
      "npm",
    ],
    icon: Wrench,
  },
];

const projects = [
  {
    name: "Loan Origination Platform",
    status: "Delivered",
    description:
      "Customer portal and back-office CRM for customers, admins, supervisors, distributors, agents, and retailers with role-based workflows.",
    tags: ["React.js", "TypeScript", "Redux", "REST API", "Axios", "RBAC"],
    impact:
      "Reduced manual reporting overhead and improved real-time loan/KYC visibility.",
    contents: [
      "Problem & Solution",
      "Architecture & Stack",
      "Workflow Modules",
      "Key Capabilities",
    ],
    problem:
      "Loan operations involve multiple user groups - customers, admins, supervisors, distributors, agents, and retailers - each needing accurate loan status, KYC progress, commissions, and payout visibility without manual back-office follow-ups.",
    table: [
      [
        "Application Flow",
        "Long multi-step forms, validation gaps",
        "Guided React + TypeScript workflow with real-time validation",
      ],
      [
        "User Access",
        "Same screens for different roles",
        "Role-based dashboards with granular access control",
      ],
      [
        "Loan Status",
        "Manual tracking and delayed updates",
        "REST API powered real-time status and KYC visibility",
      ],
      [
        "Reporting",
        "Manual spreadsheets for teams",
        "Interactive tables and dashboards for back-office analytics",
      ],
      [
        "Performance",
        "Heavy screens on mobile devices",
        "Lazy loading, code splitting, memoisation, about 30% faster initial load",
      ],
    ],
    capabilities: [
      "Multi-step loan application forms with conditional rendering and error handling.",
      "Redux and React Hooks based state management across customer and back-office journeys.",
      "KYC verification, commission tracking, loan status, and payout dashboard API integrations.",
      "Reusable dashboard components that helped teams ship new feature screens faster.",
    ],
    icon: ShieldCheck,
  },
  {
    name: "Account Management System",
    status: "Delivered",
    description:
      "Responsive account dashboard with real-time account details, balance tracking, transaction history, and secure update flows.",
    tags: [
      "React.js",
      "REST API",
      "Reusable Components",
      "Forms",
      "Dashboards",
    ],
    impact:
      "Reusable component library reduced new feature delivery time by about 25%.",
    contents: [
      "Problem & Solution",
      "Architecture & Stack",
      "Dashboard UX",
      "Key Capabilities",
    ],
    problem:
      "Account teams needed a fast, reliable interface to view account details, balances, transaction history, and secure update flows without jumping between fragmented tools.",
    table: [
      [
        "Account Overview",
        "Details scattered across screens",
        "Single responsive summary with real-time data",
      ],
      [
        "Transactions",
        "Manual lookup and slow navigation",
        "Recent transaction tables with clean scanning patterns",
      ],
      [
        "Updates",
        "Error-prone account forms",
        "Validated forms with controlled state and clear feedback",
      ],
      [
        "Reusability",
        "Repeated UI work for new features",
        "Shared component library reduced build time by about 25%",
      ],
    ],
    capabilities: [
      "Responsive account summary dashboards with REST API integration.",
      "Balance tracking, transaction history, and secure account update forms.",
      "Reusable React components for tables, forms, summary cards, and status views.",
      "State management patterns that kept account data consistent across screens.",
    ],
    icon: Layers3,
  },
  {
    name: "Credit Card Onboarding",
    status: "Delivered",
    description:
      "End-to-end card application flow covering customer details, KYC submission, review screens, and live application status.",
    tags: [
      "React Hooks",
      "Validation",
      "Controlled Components",
      "Polling",
      "Responsive UI",
    ],
    impact:
      "Created a smoother onboarding experience across desktop and mobile breakpoints.",
    contents: [
      "Problem & Solution",
      "Application Flow",
      "KYC & Status",
      "Key Capabilities",
    ],
    problem:
      "Credit card onboarding required a customer-friendly application journey covering customer details, KYC submission, review states, card limits, usage summaries, and live application progress.",
    table: [
      [
        "Customer Details",
        "Static forms and repeated inputs",
        "Controlled React Hook forms with dynamic validation",
      ],
      [
        "KYC Submission",
        "Unclear document flow",
        "Guided submission and review states for users",
      ],
      [
        "Application Status",
        "Users waited for manual updates",
        "REST API polling for real-time status visibility",
      ],
      [
        "Responsive UX",
        "Inconsistent mobile screens",
        "Pixel-aligned, WCAG-aware layouts across breakpoints",
      ],
    ],
    capabilities: [
      "Full card application journey from details capture to KYC review.",
      "Dynamic validation with controlled components and React Hooks.",
      "Dashboards for card details, credit limits, usage summary, and live status.",
      "Close UI/UX collaboration for polished desktop and mobile layouts.",
    ],
    icon: BadgeCheck,
  },
];

const caseStudies = [
  {
    title: "Multi-Stakeholder Loan Operations",
    summary:
      "Built role-specific dashboards and multi-step application flows that supported customers, channel partners, and internal teams from one React codebase.",
    tags: ["React.js", "TypeScript", "Redux", "KYC", "Commission Tracking"],
    color: "warm",
  },
  {
    title: "Performance-Led Frontend Modernisation",
    summary:
      "Improved mobile load speed through lazy loading, code splitting, memoisation, and more deliberate component boundaries.",
    tags: [
      "Performance",
      "Code Splitting",
      "Memoisation",
      "Mobile UX",
      "Reviews",
    ],
    color: "cool",
  },
];

const experience = [
  {
    company: "Sequro Technologies",
    mark: "SE",
    role: "Frontend Developer",
    period: "Dec 2021 - Present",
    year: "2021",
    current: true,
    color: "#ff654d",
    bullets: [
      "Architected responsive React.js + TypeScript interfaces for fintech loan origination and account platforms.",
      "Built role-based dashboards, real-time API integrations, KYC status tracking, commission views, and payout dashboards.",
      "Led performance improvements with lazy loading, code splitting, and memoisation, improving mobile initial load by about 30%.",
      "Mentored junior developers, reviewed code, and collaborated in Agile/Scrum delivery cycles.",
    ],
  },
  {
    company: "Naresh IT",
    mark: "NA",
    role: "Frontend Developer Intern",
    period: "Jan 2020 - Nov 2021",
    year: "2020",
    current: false,
    color: "#7f5cff",
    bullets: [
      "Completed hands-on training in React.js, JavaScript ES6+, HTML5, CSS3, and Node.js fundamentals.",
      "Delivered responsive UI components and small web applications while learning Git and Agile workflows.",
    ],
  },
];

const navItems = [
  "About",
  "Projects",
  "Case Studies",
  "Experience",
  "Let's Connect",
];
const intentOptions = [
  "Freelance",
  "Remote Work",
  "Full-Time",
  "Collaboration",
  "Just Connect",
];

const orbitItems = [
  { label: "API", icon: Zap, className: "top" },
  { label: "DB", icon: Database, className: "rightTop" },
  { label: "Cloud", icon: Cloud, className: "rightBottom" },
  { label: "CI/CD", icon: Wrench, className: "bottom" },
  { label: "Auth", icon: LockKeyhole, className: "leftBottom" },
  { label: "UI", icon: MonitorSmartphone, className: "leftTop" },
];

function App() {
  const [openSkill, setOpenSkill] = useState(-1);
  const [openProject, setOpenProject] = useState(-1);
  const [activeProjectSection, setActiveProjectSection] = useState(0);
  const [openCase, setOpenCase] = useState(0);
  const [activeNav, setActiveNav] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState("");
  const [intentOpen, setIntentOpen] = useState(false);
  const intentRef = useRef(null);

  React.useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const observer = useMemo(() => {
    if (typeof window === "undefined") return null;
    return { rootMargin: "-40% 0px -52% 0px", threshold: 0 };
  }, []);

  React.useEffect(() => {
    const sections = navItems
      .map((item) =>
        document.getElementById(
          item.toLowerCase().replaceAll(" ", "-").replaceAll("'", ""),
        ),
      )
      .filter(Boolean);

    const intersection = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const label = navItems.find(
            (item) =>
              item.toLowerCase().replaceAll(" ", "-").replaceAll("'", "") ===
              entry.target.id,
          );
          if (label) setActiveNav(label);
        }
      });
    }, observer);

    sections.forEach((section) => intersection.observe(section));
    return () => intersection.disconnect();
  }, [observer]);

  React.useEffect(() => {
    if (!intentOpen) return undefined;

    const closeIntent = (event) => {
      if (event.key === "Escape") {
        setIntentOpen(false);
        return;
      }

      if (
        event.type === "pointerdown" &&
        intentRef.current &&
        !intentRef.current.contains(event.target)
      ) {
        setIntentOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeIntent);
    document.addEventListener("keydown", closeIntent);

    return () => {
      document.removeEventListener("pointerdown", closeIntent);
      document.removeEventListener("keydown", closeIntent);
    };
  }, [intentOpen]);

  const getSectionId = (item) =>
    item.toLowerCase().replaceAll(" ", "-").replaceAll("'", "");

  const scrollTo = (item) => {
    const target = document.getElementById(getSectionId(item));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const projectSection = (project) => {
    const sections = [
      {
        title: "Problem & Solution",
        intro: project.problem,
        type: "table",
      },
      {
        title: project.contents[1],
        intro:
          "Frontend architecture focused on reusable React components, predictable state, REST API boundaries, and responsive UI patterns that could scale across product screens.",
        type: "layers",
        layers: [
          ["UI Layer", ["React.js", "TypeScript", "React Hooks", "Responsive Components"]],
          ["State & API Layer", ["Redux", "Context API", "Axios", "REST API"]],
          ["Experience Layer", ["Role-based UI", "Validation", "Dynamic Tables", "Mobile-first Layouts"]],
        ],
      },
      {
        title: project.contents[2],
        intro:
          "Core user journeys were broken into clear frontend modules so each flow stayed easier to test, maintain, and extend.",
        type: "modules",
        modules: project.table.map(([area, before, after]) => ({
          area,
          detail: after,
        })),
      },
      {
        title: "Key Capabilities",
        intro:
          "Highlights from the implementation, based on the project responsibilities listed in the resume.",
        type: "capabilities",
      },
    ];

    return sections[activeProjectSection] || sections[0];
  };

  return (
    <>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
            setMenuOpen(false);
          }}
        >
          <Sparkles size={18} fill="currentColor" />
          <span>connect-vinod</span>
        </a>
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <button
              key={item}
              className={activeNav === item ? "active" : ""}
              type="button"
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
          <a className="resume-button" href={resumePath} download>
            <ArrowDownToLine size={18} />
            Resume
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main>
        <section className="intro-section" id="home">
          <div className="intro-copy">
            <div className="availability dark">
              <span />
              Open to Work
            </div>
            <h1>
              Hello! I am
              <strong>Vinod Yadav</strong>
            </h1>
            <p>
              <b>From design to code</b> - scalable React interfaces, engineered
              for fintech and enterprise teams.
            </p>
            <p>
              Driven to build faster, cleaner, and more adaptive frontend
              systems that turn complex workflows into polished product
              experiences.
            </p>
            <div className="domain-line">
              <span>Experienced in</span>
              <div
                className="domain-roller"
                aria-label="Experienced in Banking Domain and Fintech Domain"
              >
                <strong>
                  <Landmark size={18} />
                  Banking Domain
                </strong>
                <strong>
                  <BriefcaseBusiness size={18} />
                  Fintech Domain
                </strong>
              </div>
            </div>
          </div>

          <div
            className="orbit-wrap"
            aria-label="Frontend engineering capability orbit"
          >
            <div className="orbit outer" />
            <div className="orbit inner" />
            <span className="flow-dot flow-one" />
            <span className="flow-dot flow-two" />
            <span className="flow-dot flow-three" />
            <div className="orbit-core">
              <div className="cube">
                <span className="cube-face face-top" />
                <span className="cube-face face-left" />
                <span className="cube-face face-right" />
                <Code2 size={42} />
              </div>
            </div>
            {orbitItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  className={`orbit-item ${item.className}`}
                  key={item.label}
                >
                  <span>
                    <Icon size={21} />
                  </span>
                  <strong>{item.label}</strong>
                </div>
              );
            })}
          </div>
        </section>

        <section className="hero-section" id="about">
          <div className="hero-grid">
            <div className="skills-rail" aria-label="Core competency groups">
              <div className="timeline-line" />
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const isOpen = openSkill === index;
                return (
                  <article
                    className={isOpen ? "skill-card expanded" : "skill-card"}
                    style={{ "--accent": skill.color }}
                    key={skill.title}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenSkill(isOpen ? -1 : index)}
                    >
                      <span className="rail-dot" />
                      <span className="skill-icon">
                        <Icon size={22} />
                      </span>
                      <span className="skill-copy">
                        <strong>{skill.title}</strong>
                        <small>{skill.subtitle}</small>
                      </span>
                      <ChevronDown size={18} />
                    </button>
                    {isOpen && (
                      <div className="skill-details">
                        <p>{skill.description}</p>
                        {skill.details.map((detail) => (
                          <span key={detail}>{detail}</span>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            <article className="about-panel">
              <h1>About Me</h1>
              <p>
                I am Vinod Kumar Yadav, a Bangalore-based Frontend Engineer with
                4.5+ years of hands-on experience building scalable,
                high-performance React.js applications for fintech and
                enterprise platforms.
              </p>
              <p>
                I specialize in component-based architecture, Redux state
                management, TypeScript, REST API integration, and responsive
                UI/UX. My work spans customer portals, back-office CRMs,
                dashboards, onboarding flows, account systems, and role-based
                SaaS products.
              </p>
              <p>
                I enjoy turning complex product requirements into clean
                interfaces that are fast, accessible, maintainable, and ready
                for production teams to extend.
              </p>
              <div className="callout">
                <Send size={20} />
                <strong>
                  If you are looking for a React engineer who can ship polished
                  fintech and enterprise products with ownership, speed, and
                  care, I am ready to bring that value to your team.
                </strong>
              </div>
            </article>
          </div>
        </section>

        <section className="projects-section dark-section" id="projects">
          <h2>Solutions Built for Impact, Speed, and Reliability</h2>
          <div className="project-list">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isOpen = openProject === index;
              return (
                <article
                  className={isOpen ? "project-card open" : "project-card"}
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
                    onClick={() => {
                      setOpenProject(isOpen ? -1 : index);
                      setActiveProjectSection(0);
                    }}
                  >
                    <ChevronDown size={18} />
                  </button>
                  {isOpen && (
                    <div className="project-detail">
                      <aside
                        className="project-detail-nav"
                        aria-label={`${project.name} detail contents`}
                      >
                        <strong>Contents</strong>
                        {project.contents.map((item, itemIndex) => (
                          <button
                            type="button"
                            className={activeProjectSection === itemIndex ? "selected" : ""}
                            key={item}
                            onClick={() => setActiveProjectSection(itemIndex)}
                          >
                            <small>{itemIndex + 1}.</small>
                            {item}
                          </button>
                        ))}
                      </aside>
                      <div className="project-detail-body">
                        {(() => {
                          const section = projectSection(project);
                          return (
                            <>
                              <section className="detail-block">
                                <h4>{section.title}</h4>
                                <p>{section.intro}</p>
                              </section>
                              {section.type === "table" && (
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
                              {section.type === "layers" && (
                                <div className="architecture-layers">
                                  {section.layers.map(([layer, items]) => (
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
                              {section.type === "modules" && (
                                <div className="module-grid">
                                  {section.modules.map((module) => (
                                    <article key={module.area}>
                                      <h5>{module.area}</h5>
                                      <p>{module.detail}</p>
                                    </article>
                                  ))}
                                </div>
                              )}
                              {section.type === "capabilities" && (
                                <section className="detail-block">
                                  <ul>
                                    {project.capabilities.map((capability) => (
                                      <li key={capability}>{capability}</li>
                                    ))}
                                  </ul>
                                </section>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="case-section" id="case-studies">
          <h2>Case Studies</h2>
          <div className="case-list">
            {caseStudies.map((study, index) => (
              <article className={`case-card ${study.color}`} key={study.title}>
                <span className="case-icon">
                  <BriefcaseBusiness size={24} />
                </span>
                <div>
                  <div className="case-heading">
                    <h3>{study.title}</h3>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={18} />
                      View on GitHub
                    </a>
                  </div>
                  <p>{study.summary}</p>
                  <div className="chips light">
                    {study.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {openCase === index && (
                    <p className="case-extra">
                      Focus areas: reusable components, clear state boundaries,
                      production-ready flows, and responsive behavior across web
                      and mobile.
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  aria-label={`Toggle ${study.title}`}
                  onClick={() => setOpenCase(openCase === index ? -1 : index)}
                >
                  <ChevronDown size={18} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section dark-section" id="experience">
          <h2>Industry Experience</h2>
          <div className="experience-track">
            {experience.map((job, index) => (
              <article
                className={`experience-card ${index % 2 === 0 ? "above" : "below"}`}
                style={{ "--accent": job.color }}
                key={job.company}
              >
                <span className="node" />
                <div className="company-mark">{job.mark}</div>
                <h3>{job.company}</h3>
                <p>{job.period}</p>
                {job.current && <small>Current</small>}
                <strong>{job.year}</strong>
              </article>
            ))}
          </div>
          <div className="role-panel">
            <h3>
              Sequro Technologies <span>Roles & Responsibilities</span>
            </h3>
            <ul>
              {experience[0].bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="connect-section" id="lets-connect">
          <div className="connect-copy">
            <h2>Let's create something together</h2>
            <p>
              Whether it is a full-time role, freelance project, or a product
              conversation, I would love to hear from you.
            </p>
            <div className="availability">
              <span />
              Open to Work
            </div>
            <a href="mailto:deepyadav153107@gmail.com">
              <Mail size={18} />
              deepyadav153107@gmail.com
            </a>
            <a href="tel:+918542824307">
              <Phone size={18} />
              +91 8542824307
            </a>
            <span>
              <MapPin size={18} />
              Bangalore, India
            </span>
            <div className="socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github size={20} />
                GitHub
              </a>
              <a
                className="linkedin"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          <form
            className="connect-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label>
              Your Email
              <input type="email" placeholder="email@example.com" />
            </label>
            <label>
              Reaching Out For
              <div
                ref={intentRef}
                className={intentOpen ? "custom-select open" : "custom-select"}
              >
                <button
                  type="button"
                  onClick={() => setIntentOpen(!intentOpen)}
                  aria-expanded={intentOpen}
                >
                  <span>{selectedIntent || "Select intent..."}</span>
                  <ChevronDown size={18} />
                </button>
                {intentOpen && (
                  <div className="select-options">
                    {intentOptions.map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => {
                          setSelectedIntent(option);
                          setIntentOpen(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </label>
            <button
              className="connect-submit"
              type="submit"
              disabled={!selectedIntent}
            >
              Let's Connect
            </button>
          </form>
        </section>
      </main>

      <footer>© 2026 Vinod Kumar Yadav. All rights reserved.</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
