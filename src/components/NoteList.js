import React from "react";
import Notes from "./Notes";



const NoteList = ({notes, setNotes}) => {
  return (
    <div className="note-container">
      <ul className="note-list">
        {notes.map((note, index) => (
          <Notes 
            setNotes={setNotes}
            notes={notes}
            key={index}
            title={note.title}
            text={note.text}
            date={note.date}s
          />
        ))}
      </ul>
    </div>
  );
};
export default NoteList;