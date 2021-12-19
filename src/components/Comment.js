import React from "react";
import { FormComment } from "./FormComment";

export const Comment = (props) => {
  const createdAtDate = new Date(props.comment.createdAt).toLocaleDateString();
  const createdAtTime = new Date(props.comment.createdAt).toLocaleTimeString();
  const isReplying =
    props.activeComment &&
    props.activeComment.id === props.comment.id &&
    props.activeComment.type === "replying";

  const isEditing =
    props.activeComment &&
    props.activeComment.id === props.comment.id &&
    props.activeComment.type === "editing";

  const replyId = props.parentId ? props.parentId : props.comment.id;

  return (
    <div className="comment">
      <div className="user-image">
        <img src="../ui/user.png" />
      </div>
      <div className="comment-right">
        <div className="comment-data">
          <div className="comment-author-details">{props.comment.username}</div>
          <div>
            {createdAtDate} {createdAtTime}
          </div>
        </div>
        <div className="comment-text">{props.comment.body}</div>
        <div
          className="comment-action-button"
          onClick={() =>
            props.setActiveComment({ id: props.comment.id, type: "replying" })
          }
        >
          Replay
        </div>
        <div
          className="comment-action-button"
          onClick={() =>
            props.setActiveComment({ id: props.comment.id, type: "editing" })
          }
        >
          Edit
        </div>
        <div
          className="comment-action-button"
          onClick={() => props.deleteComment(props.comment.id)}
        >
          Delete
        </div>
        {isReplying && (
          <FormComment
            submitLabel="Reply"
            handleSubmit={(text) => props.addComment(text, replyId)}
          />
        )}
        <div className="replies">
          {props.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              replies={[]}
              currentUserId={props.currentUserId}
              deleteComment={props.deleteComment}
              addComment={props.addComment}
              parentId={props.comment.id}
              activeComment={props.activeComment}
              setActiveComment={props.setActiveComment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
