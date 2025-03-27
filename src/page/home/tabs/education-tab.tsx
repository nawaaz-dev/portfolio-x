import PostCard, { PostCardProps } from "@/page/components/post-card/post-card";
import { FC } from "react";

export type EducationTabProps = Omit<PostCardProps, "description"> & {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
};

const EducationTab: FC<EducationTabProps> = ({
  title,
  time,
  image,
  institution,
  location,
  description,
  ...rest
}) => {
  console.log(image);
  return (
    <PostCard
      {...rest}
      image={image}
      title={title}
      time={time}
      description={
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="inline-flex gap-2 text-sm"></div>
            <div className="inline-flex gap-2 text-sm">
              <p>🏫 {institution}</p>
            </div>
            <div className="inline-flex gap-2 text-sm">
              <p>📍 {location}</p>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <h3 className="font-bold">Description</h3>
            <p>{description}</p>
          </div>
        </div>
      }
    />
  );
};

export default EducationTab;
