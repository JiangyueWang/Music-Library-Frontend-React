import axios from "axios";
import { useEffect, useState } from "react";
import DisplayMusic from "./components/DisplayMusic/DisplayMusic";
import AddANewSong from "./components/AddANewSong/AddANewSong";

function App() {

  const [songs, setSongs] = useState([]);
  
  //displays all the songs in the database when the page first render 
  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    // use axios.get to retrive all songs stored in the database
    const musicDataBase = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(musicDataBase.data)
  }

  async function addSong(newSongInfo) {
    // axios.post to update the database with song's information submitted by AddANewSong component
    await axios.post('http://127.0.0.1:8000/api/music/', newSongInfo);
    getAllSongs();
  }

  return (
    <div>
      <AddANewSong addSong={addSong}/>
      <DisplayMusic songs={songs} />
    </div>
  );
}

export default App;
