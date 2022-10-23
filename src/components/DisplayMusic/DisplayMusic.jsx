import React from 'react';
import Song from '../Song/Song';

const DisplayMusic = (props) => {


        if (props.songs.length > 1) {
        return (
            <div>
                {
                    props.songs.map((song) => {
                        return  (
                            <div>
                                <Song song={song} key={song.id}/>
                            </div>
                        
                        )}
                    )
                }
            </div>
        )
        }
        else {
            return (
                <Song song={props.songs} />
            )
        }



}
 
export default DisplayMusic;