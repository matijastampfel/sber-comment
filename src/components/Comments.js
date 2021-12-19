import React, { useState, useEffect } from "react";
import { getAllComments, createNewComment } from "../backend/api";
import { Comment } from "./Comment";
import { FormComment } from "./FormComment";

export const Comments = (props) => {
  const [apiComments, setApiComments] = useState([]);
  const firstComments = apiComments.filter(
    (apiComments) => apiComments.parentId === null
  );
  const [activeComment, setActiveComment] = useState(null);
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

  useEffect(() => {
    getAllComments().then((data) => {
      setApiComments(data);
    });
  }, []);

  return (
    <div className="comments-field">
      <h2 className="comments-header">Hello</h2>
      <div className="comments-header-title">Write comment</div>
      <FormComment submitLabel = 'Write' handleSubmit={addComment}/>
      <div className="comments-body">
        {firstComments.map((apiComments) => (
          <Comment key={apiComments.id} comment={apiComments} replies = {getReplies(firstComments.id)}/>
        ))}
      </div>
    </div>
  );
};
