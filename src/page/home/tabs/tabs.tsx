import { FC, useCallback, useEffect, useMemo, useState } from "react";
import HorizontalTabs from "../../components/horizontal-tabs";
import ExperienceTab from "./experience-tab";
import TechStackTab from "./tech-stack-tab";
import ProjectsTab from "./projects-tab";
import EducationTab from "./education-tab";
import { toast } from "react-toastify";
import { IPostComment, IPostCommon } from "@nawaaz-dev/portfolio-types";
import debounce from "lodash.debounce";
import { API_BASE_URL } from "@/config/urls";
import { TabsEnum } from "../home.types";

const Tabs: FC = () => {
  const [data, setData] = useState<IPostCommon[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);

  const fetchPosts = () => {
    setIsDataLoading(true);

    fetch(`${API_BASE_URL}/posts`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.error(res.error);
          toast.error("Failed to fetch experiences data");
        }
        setData(res.data || []);
      })
      .finally(() => {
        setIsDataLoading(false);
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
        setData((prev) =>
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

  const { experiences, techStacks, projects, educations } = useMemo(() => {
    const sortByOrder = (a: IPostCommon, b: IPostCommon) => {
      return a.order - b.order;
    };
    const experiences = data
      .filter((item) => item.tab === TabsEnum.Experience)
      .sort(sortByOrder);
    const techStacks = data
      .filter((item) => item.tab === TabsEnum.TechStack)
      .sort(sortByOrder);
    const projects = data
      .filter((item) => item.tab === TabsEnum.Project)
      .sort(sortByOrder);
    const educations = data
      .filter((item) => item.tab === TabsEnum.Education)
      .sort(sortByOrder);

    return { experiences, techStacks, projects, educations };
  }, [data]);

  const detailTime = (time: { start: string; end: string }) => {
    return `${time.start} - ${time.end}`;
  };

  const tabs = [
    {
      title: "Experiences",
      content: (
        <div className="flex flex-col gap-4">
          {experiences.map((experience, index) => (
            <ExperienceTab
              key={index}
              image={experience.image}
              title={experience.title}
              time={detailTime(experience.time)}
              company={experience.details.company}
              location={experience.details.location}
              website={experience.details.website}
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
              time={detailTime(techStack.time)}
              skills={techStack.details.skills}
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
              image={project.image}
              title={project.title}
              time={detailTime(project.time)}
              link={project.details.link}
              position={project.details.position}
              description={project.details.description}
              techStack={project.details.techStack}
              responsibilities={project.details.responsibilities}
              images={project.details.images}
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
          {educations.map((education) => (
            <EducationTab
              key={education.title}
              title={education.title}
              time={detailTime(education.time)}
              image={education.image}
              degree={education.details.degree}
              location={education.details.location}
              institution={education.details.institution}
              description={education.details.description}
              duration={education.details.duration}
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
  return (
    <HorizontalTabs
      isDataLoading={isDataLoading}
      tabs={tabs}
      defaultActiveIndex={0}
    />
  );
};

export default Tabs;
