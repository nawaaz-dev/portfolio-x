import { FC, ReactNode } from "react";

export type PostCardProps = {
  image: string;
  title: string;
  time: string;
  description: ReactNode;
  onLike: () => void;
  onComment: () => void;
  onShare?: () => void;
};

const PostCard: FC<PostCardProps> = ({
  image,
  title,
  time,
  description,
  onLike,
  onComment,
  onShare,
}) => {
  return (
    <div className="flex flex-col gap-2 border-b border-gray-600 py-1">
      <div className="flex gap-4">
        <div className="flex flex-shrink-0">
          <img src={image} alt={title} className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex gap-1">
            <div className="font-bold">{title}</div>
            <span className="text-gray-400">·</span>{" "}
            <div className="text-gray-400">{time}</div>
          </div>
          <div>{description}</div>
        </div>
      </div>
      <div className="flex [&>button]:flex-1 w-full">
        <button onClick={onLike}>Like</button>
        <button onClick={onComment}>Comment</button>
        <button onClick={onShare}>Share</button>
      </div>
    </div>
  );
};

export default PostCard;
