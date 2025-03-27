import { FC, ReactNode, useState } from "react";
import SVG from "../svg/svg";
import Comments, { Comment } from "./comment";
import { IPostComment } from "@nawaaz-dev/portfolio-types";
import { toast } from "react-toastify";

export type PostCardComment = Comment;

export type PostCardProps = {
  image: string;
  title: string;
  time: string;
  description: ReactNode;
  likeCount: number;
  comments: PostCardComment[];
  onLike: () => void;
  onComment: (comment: IPostComment) => Promise<void>;
  onShare?: () => void;
};

const PostCard: FC<PostCardProps> = ({
  image,
  title,
  time,
  description,
  likeCount,
  comments,
  onLike,
  onComment,
  onShare,
}) => {
  const [commentsActive] = useState(false);

  const handleCommentActionClick = () => {
    toast(
      <div>
        <strong>Comment </strong> feature coming soon! 🚀
      </div>
    );
    // setCommentsActive(!commentsActive);
  };

  const handleShareActionClick = () => {
    toast(
      <div>
        <strong>Share </strong> feature coming soon! 🚀
      </div>
    );
    onShare?.();
  };

  return (
    <div className="flex flex-col gap-2 border-b border-gray-600 px-4">
      <div className="flex gap-4">
        <div className="flex flex-shrink-0">
          <img src={image} alt={title} className="w-10 h-10 rounded-full" />
        </div>
        <div className="flex flex-col gap-2 flex-1 pb-3">
          <div className="flex gap-1 items-center">
            <div className="font-bold">{title}</div>
            <span className="text-text-secondary">·</span>{" "}
            <div className="text-text-secondary text-sm">{time}</div>
          </div>
          <div>{description}</div>
          <div className="flex w-full">
            <div className="flex-1">
              <button
                className=" flex w-fit items-center gap-1 h-[36px]"
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
            </div>
            <div className="flex-1">
              <button
                className="w-fit flex items-center gap-1 h-[36px]"
                onClick={handleCommentActionClick}
              >
                <SVG
                  src="/img/comment.svg"
                  alt="Comment"
                  className="w-4 h-4"
                  // isActive={!!comments.length}
                  filterType="active"
                />
                {/* {comments.length > 0 && (
                  <span className="text-sm text-active">{comments.length}</span>
                )} */}
              </button>
            </div>
            <div className="">
              <button
                className="w-fit flex items-center gap-1 h-[36px]"
                onClick={handleShareActionClick}
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
          {commentsActive && (
            <div className="flex w-full">
              <Comments comments={comments} onComment={onComment} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
