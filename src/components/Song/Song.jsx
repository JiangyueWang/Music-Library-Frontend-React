import React, { useState } from 'react';
import DeleteSongBtn from '../DeleteSongBtn/DeleteSongBtn';
import UpdateSongInfoForm from '../UpdateSongInfo/UpdateSongInfoForm';

const Song = (props) => {
    
    const song_id = props.song.id;
    const [showUpdateSongForm, setShowUpdateSongForm] = useState(false)
    const showUpdateSongFormClick = () => {
        setShowUpdateSongForm(!showUpdateSongForm)
    }

    const [formSubmit, setFormSubmit] = useState(false)
    const formSubmitFn = () => {
        setFormSubmit(!formSubmit)
        props.getAllSongsProp();
    }

    return (
        <div>
            <ul>
                {/* <li>{song_id}</li> */}
                <li>{props.song.title}</li>
                <li>{props.song.artist}</li>
                <li>{props.song.album}</li>
                <li>{props.song.genre}</li>
                <DeleteSongBtn deleteSongIdProp={song_id}/>
               
                <button onClick={showUpdateSongFormClick}>show update song form </button>
           
                {
                    showUpdateSongForm && <UpdateSongInfoForm updateSongIdProp={song_id} UpdateSongInfoFormSubmitProp={formSubmitFn}/>
                } 

            </ul>
        </div>
    );
}
 
export default Song;