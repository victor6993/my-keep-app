import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={event => {
          props.deleteNote(props.id);
          event.preventDefault();
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
