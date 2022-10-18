import React from 'react';

const Song = (props) => {
    return (
        <div>
            <ul>
                <li>{props.song.id}</li>
                <li>{props.song.title}</li>
                <li>{props.song.album}</li>
                <li>{props.song.release_date}</li>
                <li>{props.song.genre}</li>
            </ul>
        </div>
    );
}
 
export default Song;