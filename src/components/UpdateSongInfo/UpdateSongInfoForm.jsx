import axios from 'axios';
import React, { useState } from 'react';


const UpdateSongInfoForm = (props) => {
    
    const[title, setTitle] = useState('');
    const[artist, setArtist] = useState('');
    const[album, setAlbum] = useState('');
    const[release_date, setReleaseDate] = useState('');
    const[genre, setGenre] = useState('');

    async function handleUpdateSongFormSubmission(event) {
        event.preventDefault();
        const updateSongInfo = {
            "title": title,
            "artist": artist,
            "album": album,
            "release_date": release_date,
            "genre": genre,
        };
     
        await axios.put(`http://127.0.0.1:8000/api/music/${props.updateSongIdProp}/`, updateSongInfo)
        props.UpdateSongInfoFormSubmitProp()
        // window.location.reload(true);
    }
    return (
        <div className='flex'>
            <form onSubmit={handleUpdateSongFormSubmission} className="add-new-song-form flex">
            <label>Title</label>
            <input onChange={(event) => setTitle(event.target.value)}></input>
            <label>Artist</label>
            <input onChange={(event) => setArtist(event.target.value)}></input>
            <label>Album</label>
            <input onChange={(event) => setAlbum(event.target.value)}></input>
            <label>Realease Date</label>
            <input onChange={(event) => setReleaseDate(event.target.value)}></input>
            <label>Genre</label>
            <input onChange={(event) => setGenre(event.target.value)}></input>
            <button type='submit' className='btn btn-secondary btn-lg'>update</button>
        </form>
    
        </div>

    );
}
 
export default UpdateSongInfoForm;