import React from 'react'
import { useState } from 'react';

export const FormComment = (props) => {
    const [text, setText] = useState('')
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
        <button className="comment-form-button" disabled={text.length === 0 && true}>
          {props.submitLabel}
        </button>
        
      </form>
    );
  };