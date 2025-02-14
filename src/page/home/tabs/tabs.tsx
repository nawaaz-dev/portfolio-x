import { FC } from "react";
import HorizontalTabs from "../../components/horizontal-tabs";
import ExperienceTab from "./experience-tab";
import TechStackTab from "./tech-stack-tab";
import { tabConfig } from "./tabs.config";
import ProjectsTab from "./projects-tab";
import EducationTab from "./education-tab";

const Tabs: FC = () => {
  const { experiences, techStacks, projects, education } = tabConfig;

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
      content: (
        <div className="flex flex-col gap-4">
          {techStacks.map((techStack) => (
            <TechStackTab
              key={techStack.title}
              title={techStack.title}
              time={techStack.time}
              speciality={techStack.speciality}
              image={techStack.image}
              onLike={() => console.log("Like 2")}
              onComment={() => console.log("Comment 2")}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectsTab
              key={project.title}
              title={project.title}
              time={project.time}
              image="https://placehold.co/150"
              screenshots={project.screenshots}
              techStack={project.techStack}
              duration={project.duration}
              role={project.role}
              responsibilities={project.responsibilities}
              link={project.link}
              onLike={() => console.log("Like 3")}
              onComment={() => console.log("Comment 3")}
            />
          ))}
        </div>
      ),
    },
    // {
    //   title: "Clients",
    //   content: <div>Tab 4 Content</div>,
    // },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-4">
          {education.map((education) => (
            <EducationTab
              key={education.title}
              title={education.title}
              time={education.time}
              image="https://placehold.co/150"
              degree={education.degree}
              location={education.location}
              institution={education.institution}
              description={education.description}
              duration={education.duration}
              onLike={() => console.log("Like 4")}
              onComment={() => console.log("Comment 4")}
            />
          ))}
        </div>
      ),
    },
    // {
    //   title: "Certificates",
    //   content: <div>Tab 6 Content</div>,
    // },
  ];
  return <HorizontalTabs tabs={tabs} defaultActiveIndex={1} />;
};

export default Tabs;
