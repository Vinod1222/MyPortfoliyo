export const getSectionId = (label) =>
  label.toLowerCase().replaceAll(" ", "-").replaceAll("'", "");

export const getProjectSections = (project) => [
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
      [
        "UI Layer",
        ["React.js", "TypeScript", "React Hooks", "Responsive Components"],
      ],
      ["State & API Layer", ["Redux", "Context API", "Axios", "REST API"]],
      [
        "Experience Layer",
        ["Role-based UI", "Validation", "Dynamic Tables", "Mobile-first Layouts"],
      ],
    ],
  },
  {
    title: project.contents[2],
    intro:
      "Core user journeys were broken into clear frontend modules so each flow stayed easier to test, maintain, and extend.",
    type: "modules",
    modules: project.table.map(([area, , after]) => ({
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
