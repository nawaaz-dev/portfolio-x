import { FC } from "react";
import HorizontalTabs from "../../components/horizontal-tabs";
import ExperienceTab from "./experience-tab";

const Tabs: FC = () => {
  const experiences = [
    {
      title: "Frontend Engineer",
      time: "Jan 2024 - Oct 2024",
      image: "https://placehold.co/150",
      company: "Kapstan Infra",
      location: "Remote (India/USA)",
      roles: [
        "💻 Worked on a project that involved building a web application for a client.",
        "⚛️ Developed the frontend using React, Redux, and TypeScript.",
        "🔗 Worked with the backend team to integrate the frontend with the backend.",
      ],
    },
    {
      title: "Software Engineer",
      time: "Jan 2023 - Oct 2023",
      image: "https://placehold.co/150",
      company: "Kapstan Infraa",
      location: "Remote (India/USA)",
      roles: [
        "💻 Worked on a project that involved building a web application for a client.",
        "⚛️ Developed the frontend using React, Redux, and TypeScript.",
        "🔗 Worked with the backend team to integrate the frontend with the backend.",
      ],
    },
    {
      title: "Frontend Engineer",
      time: "Jan 2022 - Oct 2022",
      image: "https://placehold.co/150",
      company: "Kapstan Infraaa",
      location: "Remote (India/USA)",
      roles: [
        "💻 Worked on a project that involved building a web application for a client.",
        "⚛️ Developed the frontend using React, Redux, and TypeScript.",
        "🔗 Worked with the backend team to integrate the frontend with the backend.",
      ],
    },
  ];
  const tabs = [
    {
      title: "Experiences",
      content: (
        <div className="flex flex-col gap-4">
          {experiences.map((experience) => (
            <ExperienceTab
              key={experience.company}
              image="https://placehold.co/150"
              title={experience.title}
              time={experience.time}
              company={experience.company}
              location={experience.location}
              roles={experience.roles}
              onLike={() => console.log("Like 1")}
              onComment={() => console.log("Comment 1")}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Tech Stack",
      content: <div>Tab 2 Content</div>,
    },
    {
      title: "Projects",
      content: <div>Tab 3 Content</div>,
    },
    {
      title: "Clients",
      content: <div>Tab 4 Content</div>,
    },
    {
      title: "Education",
      content: <div>Tab 5 Content</div>,
    },
    {
      title: "Certificates",
      content: <div>Tab 6 Content</div>,
    },
  ];
  return <HorizontalTabs tabs={tabs} />;
};

export default Tabs;
