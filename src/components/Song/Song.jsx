import React, { useState } from 'react';
import DeleteSongBtn from '../DeleteSongBtn/DeleteSongBtn';
import UpdateSongInfoForm from '../UpdateSongInfo/UpdateSongInfoForm';
// import axios from "axios";
const Song = (props) => {
    
    // async function deleteSong(id) {
    //     // axios.post to update the database with song's information submitted by AddANewSong component
    //     await axios.post(`http://127.0.0.1:8000/api/music/${id}`);
    //     props.getAllSongs();
    //   }    

    const song_id = props.song.id;

    const [showUpdateSongForm, setShowUpdateSongForm] = useState(false)
    const showUpdateSongFormClick = () => {
        setShowUpdateSongForm(!showUpdateSongForm)
    }

    const [formSubmit, setFormSubmit] = useState(false)
    const formSubmitFn = () => {
        // console.log('form submitted ')
        setFormSubmit(!formSubmit)
    }

    return (
        <div>
            <ul>
                {/* <id>{i}</id> */}
                <li>{song_id}</li>
                <li>{props.song.title}</li>
            
                <li>{props.song.artist}</li>
                <li>{props.song.album}</li>
                <li>{props.song.release_date}</li>
                <li>{props.song.genre}</li>
                <DeleteSongBtn deleteSongIdProp={song_id}/>
                {/* <UpdateSongInfoForm updateSongIdProp={song_id} UpdateSongInfoFormSubmitProp={formSubmitFn}/> */}
                <button onClick={showUpdateSongFormClick}>show update song form </button>
           
                {
                    showUpdateSongForm && <UpdateSongInfoForm updateSongIdProp={song_id} UpdateSongInfoFormSubmitProp={formSubmitFn}/>
                } 
                {/* make a delete button compoenent
                pass in the props.song.id into the button compoenent
                <button>delete</button> */}
            </ul>
        </div>
    );
}
 
export default Song;