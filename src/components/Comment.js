import React from "react";

export const Comment = (props) => {
  return (
    <div className="comment">
      <div className="user-image">
        <img src="../ui/user.png" />
      </div>
      <div className="comment-right">
        <div className="comment-data">
          <div className="comment-author-details">{props.comment.username}</div>
          <div>{props.comment.createdAt}</div>
        </div>
        <div className="comment-text">
            {props.comment.body}
        </div>
      </div>
    </div>
  );
};
