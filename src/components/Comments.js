import React, { useState, useEffect } from "react";
import { getAllComments } from "../backend/api";
import { Comment } from './Comment';

export const Comments = (props) => {
  const [apiComments, setApiComments] = useState([]);
  const firstComments = apiComments.filter((apiComments)=> apiComments.parentId === null);
  console.log(apiComments)

  useEffect(() => {
    getAllComments().then((data) => {
      setApiComments(data);
    });
  }, []);

  return (
    <div className="comments-field">
      <h2 className="comments-header">Hello</h2>
      <div className="comments-body">
        {firstComments.map((apiComments)=> (
        <Comment key={apiComments.id} comment={apiComments} />
        ))}
      </div>
    </div>
  );
};
