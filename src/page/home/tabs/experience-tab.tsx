import PostCard, { PostCardProps } from "@/page/components/post-card/post-card";
import { FC } from "react";
import { ToastContainer } from "react-toastify";

type ExperienceTabProps = Omit<PostCardProps, "description"> & {
  company: string;
  location: string;
  website: string;
  roles: string[];
};

const ExperienceTab: FC<ExperienceTabProps> = ({
  title,
  time,
  image,
  company,
  location,
  website,
  roles,
  likeCount,
  comments,
  onLike,
  onComment,
  ...rest
}) => {
  console.log(website);
  return (
    <>
      <PostCard
        {...rest}
        image={image}
        title={title}
        time={time}
        description={
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 text-sm items-center">
              <h3 className="">🏢 {company}</h3>
              <p>📍{location}</p>
              {website && (
                <a href={website} className="underline">
                  <div className="inline-flex items-center gap-1">
                    <span>🌐</span>
                    <span className="underline">
                      {" "}
                      {website ? website.split("//")[1].replace(/\/$/, "") : ""}
                    </span>
                  </div>
                </a>
              )}
            </div>
            <div className="flex gap-2 text-sm"></div>
            <div className="flex flex-col mt-2 text-sm">
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
        likeCount={likeCount}
        comments={comments}
        onLike={onLike}
        onComment={onComment}
      />
      <ToastContainer theme="dark" className={""} />
    </>
  );
};

export default ExperienceTab;
