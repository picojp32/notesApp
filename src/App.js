import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import NoteList from "./components/NoteList";

function App() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Form
        inputTitle={inputTitle}
        inputText={inputText}
        notes={notes}
        setNotes={setNotes}
        setInputTitle={setInputTitle}
        setInputText={setInputText}
      />
      <NoteList 
        setNotes={setNotes}
        notes={notes}
      />
    </div>
  );
}

export default App;
