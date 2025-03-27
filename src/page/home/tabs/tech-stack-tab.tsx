import PostCard, { PostCardProps } from "@/page/components/post-card/post-card";
import { FC } from "react";

export type TechStackTabProps = Omit<PostCardProps, "description"> & {
  skills: {
    name: string;
    icon: string;
    experience: string;
  }[];
  image: string;
};

const TechStackTab: FC<TechStackTabProps> = ({
  title,
  time,
  skills,
  image,
  ...rest
}) => {
  return (
    <PostCard
      {...rest}
      image={image}
      title={title}
      time={time}
      description={
        <div className="flex flex-col mt-2">
          <h3 className="font-bold">Skills</h3>
          <ul className="[&>li]:py-1 [&>li]:ml-3 list-inside text-sm grid grid-cols-2">
            {skills.map((item, index) => (
              <li key={index}>
                <span className="relative -left-2">
                  {item.icon} {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
};

export default TechStackTab;
