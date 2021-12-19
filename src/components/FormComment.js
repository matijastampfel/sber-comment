import React from "react";
import { useState } from "react";

export const FormComment = (
  props,
  { hasCancelButton = false, initialText = "" }
) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {props.submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={props.handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};
