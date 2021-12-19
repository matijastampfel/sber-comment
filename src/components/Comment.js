import React from "react";

export const Comment = (props) => {

    const createdAtDate = new Date(props.comment.createdAt).toLocaleDateString()
    const createdAtTime = new Date(props.comment.createdAt).toLocaleTimeString()

  return (
    <div className="comment">
      <div className="user-image">
        <img src="../ui/user.png" />
      </div>
      <div className="comment-right">
        <div className="comment-data">
          <div className="comment-author-details">{props.comment.username}</div>
          <div>{createdAtDate} {createdAtTime}</div>
        </div>
        <div className="comment-text">{props.comment.body}</div>
        <div className="comment-action-button">Replay</div>
        <div className="comment-action-button">Edit</div>
        <div className="comment-action-button" onClick={()=> props.deleteComment(props.comment.id)}>Delete</div>


        <div className="replies">
          {props.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              replies={[]}
              currentUserId={props.currentUserId}
              deleteComment={props.deleteComment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
