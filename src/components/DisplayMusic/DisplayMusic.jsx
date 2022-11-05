import React from 'react';
import Song from '../Song/Song';

const DisplayMusic = (props) => {
    if (props.songs.length > 1) {
            return (
            <div className='grid'>
                {
                    props.songs.map((song, index) => {
                        return  (
                                <Song song={song} key={props.songs.id} indexProp={index} getAllSongsProp={props.getAllSongsProp}/>
                        )}
                    )
                }
            </div>
        )

    }
    else {
        return (

                <Song song={props.songs} key={props.songs.id}/>
        )
    }

}
 
export default DisplayMusic;