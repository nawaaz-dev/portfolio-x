import { IPostCommon } from "@nawaaz-dev/portfolio-types";

const experienceTabMock: IPostCommon[] = [
  {
    _id: "1",
    tab: "experience",
    title: "Frontend Engineer",
    image: "https://placehold.co/150",
    time: "Jan 2024 - Oct 2024",
    details: {
      company: "Kapstan Infra",
      location: "Remote (India/USA)",
      roles: [
        "💻 Worked on a project that involved building a web application for a client.",
        "⚛️ Developed the frontend using React, Redux, and TypeScript.",
        "🔗 Worked with the backend team to integrate the frontend with the backend.",
      ],
    },
    actions: {
      likes: 16,
      comments: [],
      shares: 0,
    },
    createdAt: new Date("2025-02-19T08:02:14.821Z"),
  },
];

const techStackTabMock: IPostCommon[] = [
  {
    _id: "2",
    tab: "tech_stack",
    title: "React",
    image: "https://placehold.co/150",
    time: "Jan 2024 - Oct 2024",
    details: {
      specialties: ["React", "Redux", "TypeScript"],
    },
    actions: {
      likes: 0,
      comments: [],
      shares: 0,
    },
    createdAt: new Date("2025-02-19T08:02:14.821Z"),
  },
];

const projectTabMock: IPostCommon[] = [
  {
    _id: "3",
    tab: "project",
    title: "Portfolio",
    image: "https://placehold.co/150",
    time: "Jan 2024 - Oct 2024",
    details: {
      role: "Frontend Engineer",
      duration: "10 months",
      techStack: ["React", "Redux", "TypeScript"],
      responsibilities: [
        "🎨 Designed the UI/UX of the website.",
        "🛠 Developed the frontend using React, Redux, and TypeScript.",
        "🔗 Integrated the frontend with the backend.",
      ],
      images: [
        "https://placehold.co/150",
        "https://placehold.co/150",
        "https://placehold.co/150",
      ],
    },
    actions: {
      likes: 0,
      comments: [],
      shares: 0,
    },
    createdAt: new Date("2025-02-19T08:02:14.821Z"),
  },
];

const educationTabMock: IPostCommon[] = [
  {
    _id: "4",
    tab: "education",
    title: "Bachelor of Technology",
    image: "https://placehold.co/150",
    time: "Jan 2024 - Oct 2024",
    details: {
      name: "Bachelor of Technology",
      institution: "Vellore Institute of Technology",
      duration: "4 years",
      location: "Vellore, Tamil Nadu, India",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nunc nec purus malesuada ultricies. Nulla facilisi. Nullam vel semper lacus. Integer id enim nec eros dapibus ultricies. Sed vel sapien auctor, luctus justo nec, tincidunt lectus. Nam nec eros sit amet libero vehicula scelerisque. Sed vel sapien auctor, luctus justo nec, tincidunt lectus. Nam nec eros sit amet libero vehicula scelerisque.",
    },
    actions: {
      likes: 0,
      comments: [],
      shares: 0,
    },
    createdAt: new Date("2025-02-19T08:02:14.821Z"),
  },
];

const tabsMock = {
  experience: experienceTabMock,
  techStack: techStackTabMock,
  project: projectTabMock,
  education: educationTabMock,
};

export default tabsMock;
