import React from "react";
import moment from "moment";
import TextareaAutosize from "react-textarea-autosize";

const Form = ({inputTitle,inputText,setInputText,setInputTitle,notes,setNotes}) => {
  const inputTitleHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const addNotesHandler = (e) => {
    e.preventDefault()
    setNotes([
      ...notes,
      {
        title: inputTitle,
        text: inputText,
        date: moment().format("MMMM Do YYYY,h:mm:ss a"),
      },
    ]);

    const newTodoList = [...notes];
      setNotes(newTodoList);
      setInputTitle("");
     setInputText("");
  };


  return (
    <form>
      <div className="form-container">
        <input
          type="text"
          value={inputTitle}
          onChange={inputTitleHandler}
          className="title-input"
          placeholder="Title"
        />
        <TextareaAutosize
          value={inputText}
          onChange={inputTextHandler}
          className="notes-input"
          placeholder="Note"
        />
        <button
          onClick={addNotesHandler}
          type="submit"
          className="notes-button"
        >
          Add to List
        </button>
      </div>
    </form>
  );
};

export default Form;