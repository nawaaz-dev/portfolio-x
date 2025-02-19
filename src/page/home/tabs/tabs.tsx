import { FC, useCallback, useEffect, useState } from "react";
import HorizontalTabs from "../../components/horizontal-tabs";
import ExperienceTab from "./experience-tab";
import TechStackTab from "./tech-stack-tab";
import { tabConfig } from "./tabs.config";
import ProjectsTab from "./projects-tab";
import EducationTab from "./education-tab";
import { toast } from "react-toastify";
import { IPostComment, IPostCommon } from "@nawaaz-dev/portfolio-types";
import debounce from "lodash.debounce";
import { API_BASE_URL } from "@/config/urls";

const Tabs: FC = () => {
  const { techStacks, projects, education } = tabConfig;
  const [experiencesData, setExperiencesData] = useState<IPostCommon[]>([]);
  const [likeLoading, setLikeLoading] = useState(false);

  const fetchPosts = () => {
    fetch(`${API_BASE_URL}/posts`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.error(res.error);
          toast.error("Failed to fetch experiences data");
        }
        setExperiencesData(res.data || []);
      });
  };

  const handleLike = (data: IPostCommon) => {
    if (likeLoading) return;

    setLikeLoading(true);

    fetch(`${API_BASE_URL}/posts/${data._id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: data._id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.error(res.error);
          toast.error("Failed to like the post");
        }
        setExperiencesData((prev) =>
          prev.map((post) => (post._id === data._id ? res.data : post))
        );
      })
      .finally(() => {
        setLikeLoading(false);
      });
  };

  const debouncedHandleLike = useCallback(debounce(handleLike, 500), []);

  const handleComment =
    (data: IPostCommon) => async (comment: IPostComment) => {
      const res = await fetch(`${API_BASE_URL}/posts/${data._id}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: data._id,
          comment,
        }),
      });
      const res_1 = await res.json();
      if (res_1.error) {
        console.error(res_1.error);
        toast.error("Failed to comment on the post");
      }
      fetchPosts();
    };

  const debouncedHandleComment = useCallback(
    (data: IPostCommon, promiseResolved: () => void) =>
      debounce((comment: IPostComment) => {
        handleComment(data)(comment).then(() => {
          promiseResolved();
        });
      }, 500),
    []
  );

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(experiencesData);

  const tabs = [
    {
      title: "Experiences",
      content: (
        <div className="flex flex-col gap-4">
          {experiencesData.map((experience, index) => (
            <ExperienceTab
              key={index}
              image="https://placehold.co/150"
              title={experience.title}
              time={experience.time}
              company={experience.details.company}
              location={experience.details.location}
              roles={experience.details.roles}
              likeCount={experience.actions.likes}
              comments={experience.actions.comments}
              onLike={() => debouncedHandleLike(experience)}
              onComment={(comment) => {
                return new Promise((resolve) => {
                  return debouncedHandleComment(experience, resolve)(comment);
                });
              }}
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
              likeCount={0}
              comments={[]}
              onLike={() => console.log("Like 2")}
              onComment={() => Promise.resolve(console.log("Comment 2"))}
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
              likeCount={0}
              comments={[]}
              onLike={() => console.log("Like 3")}
              onComment={() => Promise.resolve(console.log("Comment 3"))}
            />
          ))}
        </div>
      ),
    },
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
              likeCount={0}
              comments={[]}
              onLike={() => console.log("Like 4")}
              onComment={() => Promise.resolve(console.log("Comment 4"))}
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
  return <HorizontalTabs tabs={tabs} defaultActiveIndex={0} />;
};

export default Tabs;
