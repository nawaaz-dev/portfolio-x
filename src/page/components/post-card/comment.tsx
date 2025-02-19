import { IPostComment } from "@nawaaz-dev/portfolio-types";
import { FC, useState } from "react";
import { toast } from "react-toastify";

export type Comment = IPostComment;

export type CommentsProps = {
  comments: Comment[];
  onComment: (comment: IPostComment) => Promise<void>;
};

const Comments: FC<CommentsProps> = ({ comments, onComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (!commentText) {
      toast.error("Comment cannot be empty");
      return;
    }

    const comment: IPostComment = {
      _id: "",
      text: commentText,
      userId: "67b589bfed86a280bd2a82cc",
      userInfo: {
        name: "",
        image: "",
      },
      timestamp: new Date(),
    };

    onComment(comment).then(() => {
      setCommentText("");
    });
  };

  return (
    <div className="flex flex-col gap-2 border-t border-gray-600 pt-2 w-full">
      {comments.map((comment) => (
        <div key={comment._id} className="flex gap-2">
          <div>
            <img
              src={comment.userInfo.image}
              alt={comment.userInfo.name}
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <div className="font-bold">{comment.userInfo.name}</div>
              <div className="text-text-secondary">
                {new Date(comment.timestamp).toLocaleDateString()}
              </div>
            </div>
            <div>{comment.text}</div>
          </div>
        </div>
      ))}

      <div className="flex gap-2">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/56192288?v=4"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <textarea
            className="w-full border border-gray-600 p-2 rounded-lg text-foreground bg-background"
            value={commentText}
            rows={2}
            style={{ resize: "none" }}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <div className="flex justify-end">
            <button className="text-primary" onClick={handleAddComment}>
              Add a comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
