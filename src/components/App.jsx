import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(valores) {
    setNotes(prevValue => {
      return [...prevValue, valores];
    });
  }

  function deleteNote(id) {
    setNotes(prevValues => prevValues.filter((item, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((item, index) => (
        <Note
          deleteNote={deleteNote}
          key={index}
          id={index}
          title={item.title}
          content={item.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
