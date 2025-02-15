import { FC, ReactNode } from "react";
import SVG from "../svg/svg";

export type PostCardProps = {
  image: string;
  title: string;
  time: string;
  description: ReactNode;
  likeCount: number;
  commentCount: number;
  onLike: () => void;
  onComment: () => void;
  onShare?: () => void;
};

const PostCard: FC<PostCardProps> = ({
  image,
  title,
  time,
  description,
  likeCount,
  commentCount,
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
            <span className="text-text-secondary">·</span>{" "}
            <div className="text-text-secondary">{time}</div>
          </div>
          <div>{description}</div>
          <div className="flex w-full">
            <button
              className="flex-1 flex items-center gap-1 h-[36px]"
              onClick={onLike}
            >
              <SVG
                src={`/img/${!likeCount ? "like" : "liked"}.svg`}
                alt="Like"
                className="w-4 h-4"
                isActive={!!likeCount}
                filterType="active"
              />
              {likeCount > 0 && (
                <span className="text-sm text-active">{likeCount}</span>
              )}
            </button>
            <button
              className="flex-1 flex items-center gap-1 h-[36px]"
              onClick={onComment}
            >
              <SVG
                src="/img/comment.svg"
                alt="Comment"
                className="w-4 h-4"
                isActive={!!commentCount}
                filterType="active"
              />
              {commentCount > 0 && (
                <span className="text-sm text-active">{commentCount}</span>
              )}
            </button>
            <button
              className="flex items-center gap-1 h-[36px]"
              onClick={onShare}
            >
              <SVG
                src="/img/share.svg"
                alt="Share"
                className="w-4 h-4"
                filterType="active"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
