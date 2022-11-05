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
        <div className='card'>
            <div className='card-body'>
                <ul>
                    <li>{props.indexProp+1}</li>
                    <li className='card-title'>{props.song.title}</li>
                    <div className='card-content'>
                        <li>{props.song.artist}</li>
                        <li>{props.song.album}</li>
                        <li className='song-genre'>{props.song.genre}</li>
                    </div>
                    
                    <div className='flex card-buttons'>
                        <DeleteSongBtn deleteSongIdProp={song_id} getAllSongsProp={props.getAllSongsProp}/>
                
                        <button onClick={showUpdateSongFormClick} className="card-button">update song</button>
                    </div>
                        
            
                    {
                        showUpdateSongForm && <UpdateSongInfoForm updateSongIdProp={song_id} UpdateSongInfoFormSubmitProp={formSubmitFn}/>
                    } 

                </ul>
            </div>

        </div>
    );
}
 
export default Song;