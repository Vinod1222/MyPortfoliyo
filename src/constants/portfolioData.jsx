import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Cloud,
  Database,
  Landmark,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  ShieldCheck,
  TestTube2,
  Zap,
  Wrench,
} from "lucide-react";

export const RESUME_PATH = "/Vinod_Kumar_Yadav_Senior_Frontend_Engineer.pdf";

export const NAV_ITEMS = [
  "About",
  "Projects",
  "Case Studies",
  "Experience",
  "Let's Connect",
];

export const INTENT_OPTIONS = [
  "Freelance",
  "Remote Work",
  "Full-Time",
  "Collaboration",
  "Just Connect",
];

export const ORBIT_ITEMS = [
  { label: "API", icon: Zap, className: "top" },
  { label: "DB", icon: Database, className: "rightTop" },
  { label: "Cloud", icon: Cloud, className: "rightBottom" },
  { label: "CI/CD", icon: Wrench, className: "bottom" },
  { label: "Auth", icon: LockKeyhole, className: "leftBottom" },
  { label: "UI", icon: MonitorSmartphone, className: "leftTop" },
];

export const DOMAIN_EXPERIENCE = [
  { label: "Banking Domain", icon: Landmark },
  { label: "Fintech Domain", icon: BriefcaseBusiness },
];

export const SKILLS = [
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

export const SKILL_LEVELS = [
  { name: "React.js", level: 88, color: "#ff654d" },
  { name: "JavaScript ES6+", level: 86, color: "#f7b500" },
  { name: "HTML5", level: 92, color: "#25c99c" },
  { name: "CSS3 / SCSS", level: 84, color: "#2fb8ff" },
  { name: "TypeScript", level: 74, color: "#7f5cff" },
  { name: "Redux", level: 78, color: "#ff5bb2" },
  { name: "REST API", level: 82, color: "#14bf8c" },
  { name: "Tailwind CSS", level: 72, color: "#38bdf8" },
  { name: "Jest", level: 64, color: "#f97316" },
  { name: "Git / GitHub", level: 80, color: "#a3e635" },
];

export const PROJECTS = [
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

export const CASE_STUDIES = [
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

export const EXPERIENCE = [
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
