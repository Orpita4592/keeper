import react, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    const [isClicked, setIsClicked] = useState(false);

    function handleChanged(event){

        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function onSubmitted(event){
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content:""
        });
    }

    function handleClicked(){
        setIsClicked(true);
        console.log(isClicked);
    }

    return(
        <form className="create-note">
           
        {isClicked === true? <input type="text" name="title" value={note.title} onChange={handleChanged} placeholder="Title" />: null}

        <textarea name="content" onClick={handleClicked} value={note.content} onChange={handleChanged} placeholder="Take a note..." rows={isClicked? 3 : 1}></textarea>
        <Zoom in={isClicked}>
            <Fab onClick={onSubmitted}>
                <AddIcon />
            </Fab> 
        </Zoom>
            
        </form>
    )
}

export default CreateArea;