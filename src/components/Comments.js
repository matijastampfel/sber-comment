import React, { useState, useEffect } from "react";
import { getAllComments } from "../backend/api";

export const Comments = (props) => {
  const [apiComments, setApiComments] = useState([]);
  console.log(apiComments)

  useEffect(() => {
    getAllComments().then((data) => {
      setApiComments(data);
    });
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
