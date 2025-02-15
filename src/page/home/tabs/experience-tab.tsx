import PostCard, { PostCardProps } from "@/page/components/post-card/post-card";
import { FC, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

type ExperienceTabProps = Omit<PostCardProps, "description"> & {
  company: string;
  location: string;
  roles: string[];
};

const ExperienceTab: FC<ExperienceTabProps> = ({
  title,
  time,
  image,
  company,
  location,
  roles,
  ...rest
}) => {
  const [likes, setLikes] = useState(0);
  return (
    <>
      <PostCard
        {...rest}
        image={image}
        title={title}
        time={time}
        description={
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 text-sm">
              <h3 className="font-bold">🏢 Company Name</h3>
              <p>{company}</p>
            </div>
            <div className="flex gap-2 text-sm">
              <h3 className="font-bold">🌍 Location</h3>
              <p>{location}</p>
            </div>
            <div className="flex flex-col mt-2">
              <h3 className="font-bold">Roles and Responsibilities</h3>
              <ul className="[&>li]:py-1 [&>li]:ml-3 list-inside text-sm">
                {roles.map((role, index) => (
                  <li key={index}>
                    <span className="relative -left-2">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
        likeCount={likes}
        onLike={() => setLikes((prev) => prev + 1)}
        onComment={() => toast("Comment feature coming soon!")}
      />
      <ToastContainer theme="dark" className={"border-b border-primary"} />
    </>
  );
};

export default ExperienceTab;
