import React, { useState, useEffect } from "react";
import { getAllComments } from "../backend/api";

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
            <div key={apiComments.id}>{apiComments.body}</div>
        ))}
      </div>
    </div>
  );
};
