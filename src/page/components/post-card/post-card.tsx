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
    <div className="flex flex-col gap-2 border-b border-gray-600 px-4">
      <div className="flex gap-4">
        <div className="flex flex-shrink-0">
          <img src={image} alt={title} className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex flex-col gap-2 flex-1 pb-3">
          <div className="flex gap-1">
            <div className="font-bold">{title}</div>
            <span className="text-gray-400">·</span>{" "}
            <div className="text-gray-400">{time}</div>
          </div>
          <div>{description}</div>
          <div className="flex w-full py-2">
            <button className="flex-1 " onClick={onLike}>
              <img src="/img/like.svg" alt="Like" className="w-4 h-4" />
            </button>
            <button className="flex-1 " onClick={onComment}>
              <img src="/img/comment.svg" alt="Comment" className="w-4 h-4" />
            </button>
            <button className="" onClick={onShare}>
              <img src="/img/share.svg" alt="Share" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
