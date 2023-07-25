import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        
        setNotes(prevNotes =>{
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(noteId){
        
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem, index) =>{
                return index !== noteId; 
            });
        })
    }

    return (<div>
        <Header />
        {/* {notes.map(function(note){
            return(<Note title = {note.title} content = {note.content}/>);
        })} */}

        <CreateArea onAdd={addNote}/>

        {notes.map((noteItem, index) =>{
            return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}></Note>
        })}
        
        
        <Footer/>
        
    </div> );
    
    
}

export default App;