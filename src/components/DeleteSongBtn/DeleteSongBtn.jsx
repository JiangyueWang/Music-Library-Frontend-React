import React, { useState } from 'react';
import axios from "axios";

const DeleteSongBtn = (props) => {
    const [songs, setSongs]= useState([])
    function handleDeleteClick(){
        // setIsClick(isClick => !isClick)
        // props.DeleteSongBtnProp(isClick)
        // console.log('isClick in deleteSongBtn component', isClick)
        deleteSongfn();
        props.getAllSongsProp();
    }
    async function deleteSongfn() {
        // click delete button will send a Delete request to the database with id of the delete button is attached to
        console.log('data is deleting')
        await axios.delete(`http://127.0.0.1:8000/api/music/${props.deleteSongIdProp}/`)
       
        // window.location.reload(true);
        
        // retirve the songs from the database after delete the song
        const response = await axios.get(`http://127.0.0.1:8000/api/music/`);
        setSongs(response.data)
        console.log(`songs after delete button clicked`, songs)

        
    }

    return (  
    <div>
        <button type='button' onClick={handleDeleteClick} className="card-button">delete song</button>
    </div>);
}
 
export default DeleteSongBtn