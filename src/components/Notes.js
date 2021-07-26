import React,{useState} from 'react'
import Modal from 'react-modal'


Modal.setAppElement('#root')

const Notes = ({setNotes,notes,title,text,date}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const removeHandler = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete your note?")) {
            setNotes(notes.filter((notes => notes.date !== date)));
        }
    };

    //   function updateHandler(e) {
	//     e.preventDefault();
    //     notes.editTask({ ...noteSave, dateUpdated: moment().format('MMMM Do YYYY, h:mm:ss a')});
    //     setModalIsOpen(false);
	// }
 
    return(
       <div className="notes">
            <li className="note-item">
                <div className="date">{date}</div>
                <button onClick={removeHandler} className="remove-btn">DELETE</button> 
                <button onClick={()=> setModalIsOpen(true)}className="modal-btn">OPEN</button>
                <div>{title}</div>
                <div>{text}</div>
            </li>
           <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <li className="note-item">
                <div className="date">{date}</div>
                <div>{title}</div>
                <div>{text}</div>
                <button onClick={()=> setModalIsOpen(false)} className="close-btn">Close</button>
            </li>
            </Modal>
       </div>     
    );
}

export default Notes;