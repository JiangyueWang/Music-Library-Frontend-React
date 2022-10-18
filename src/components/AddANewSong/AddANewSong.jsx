import React, { useState } from 'react';

const AddANewSong = (props) => {
    const[title, setTitle] = useState('');
    const[artist, setArtist] = useState('');
    const[album, setAlbum] = useState('');
    const[release_date, setReleaseDate] = useState('');
    const[genre, setGenre] = useState('');
    
    function handleAddNewSongForm(event) {
        event.preventDefault();
        const newSongInfo = {
            "title": title,
            "artist": artist,
            "album": album,
            "release_date": release_date,
            "genre": genre,
        };
        props.addSong(newSongInfo);

    }

    return (
        <form onSubmit={handleAddNewSongForm}>
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
        <button type='submit'>add a new song</button>
    </form>
    );
}
 
export default AddANewSong;