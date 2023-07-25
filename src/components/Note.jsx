import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

    function handleDeleted(){
        props.onDelete(props.id);
    }

    return (<div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleDeleted}>
            <DeleteIcon />
        </button>
    </div>);
}

export default Note;