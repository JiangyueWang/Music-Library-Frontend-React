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
            <div className='flex'>
                <form onSubmit={handleAddNewSongForm} className="add-new-song-form flex">
                <div className='form-row'>
                    <div className='form-group'>
                        <label className='add-new-song-form-label'>Song Name</label>
                        <input type='text' onChange={(event) => setTitle(event.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group'>
                        <label className='add-new-song-form-label'>Artist</label>
                        <input type='text' onChange={(event) => setArtist(event.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group'>
                        <label className='add-new-song-form-label'>Album</label>
                        <input type='text' onChange={(event) => setAlbum(event.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group'>
                        <label className='add-new-song-form-label'>Release Date</label>
                        <input type='date' onChange={(event) => setReleaseDate(event.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group'>
                        <label className='add-new-song-form-label'>Genre</label>
                        <input type='text' onChange={(event) => setGenre(event.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className='add-new-song-button flex'>
                    <button type='submit' className='btn btn-light'>add a new song</button>
                </div>
                    
            </form>

            </div>


    );
}
 
export default AddANewSong;