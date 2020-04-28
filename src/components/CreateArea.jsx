import React, { useState } from "react";

function CreateArea(props) {
  const [valores, setValores] = useState({
    title: "",
    content: ""
  });

  function getValores(event) {
    const { name, value } = event.target;

    switch (name) {
      case "title":
        return setValores(prevValue => ({
          title: value,
          content: prevValue.content
        }));
      case "content":
        return setValores(prevValue => ({
          title: prevValue.title,
          content: value
        }));
      default:
    }
  }

  return (
    <div>
      <form>
        <input
          onChange={getValores}
          value={valores.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={getValores}
          value={valores.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={event => {
            props.addNote(valores);
            setValores({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
