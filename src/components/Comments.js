import React, { useState, useEffect } from "react";
import {
  getAllComments,
  createNewComment,
  deleteCommentApi,
  updateNewComment,
} from "../backend/api";
import { Comment } from "./Comment";
import { FormComment } from "./FormComment";

export const Comments = (props) => {
  const [apiComments, setApiComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const firstComments = apiComments.filter(
    (apiComments) => apiComments.parentId === null
  );

  console.log(apiComments);

  const getReplies = (commentId) =>
    apiComments
      .filter((apiComments) => apiComments.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  const addComment = (text, parentId) => {
    createNewComment(text, parentId).then((comment) => {
      setApiComments([comment, ...apiComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateNewComment(text).then(() => {
      const updatedBackendComments = apiComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setApiComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("This will delete your comment!")) {
      deleteCommentApi(commentId).then(() => {
        const updatedApiComments = apiComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setApiComments(updatedApiComments);
      });
    }
  };

  useEffect(() => {
    getAllComments().then((data) => {
      setApiComments(data);
    });
  }, []);

  return (
    <div className="comments-field">
      <div className="comments-body">
        {firstComments.map((apiComments) => (
          <Comment
            key={apiComments.id}
            comment={apiComments}
            replies={getReplies(apiComments.id)}
            currentUserId={props.currentUserId}
            deleteComment={deleteComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            updateComment={updateComment}
          />
        ))}
      </div>
      <div className="comments-header-title">Write comment</div>
      <FormComment submitLabel="Write" handleSubmit={addComment} />
    </div>
  );
};
