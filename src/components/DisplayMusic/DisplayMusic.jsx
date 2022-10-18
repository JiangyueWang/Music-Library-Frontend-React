import React from 'react';
import Song from '../Song/Song';

const DisplayMusic = (props) => {
    return (
        <div>
            {props.songs.map((song) => {
                return  (
                    <Song song={song} key={song.id} />
                )

            })}
        </div>
    );
}
 
export default DisplayMusic;