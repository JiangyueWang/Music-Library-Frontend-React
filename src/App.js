import axios from "axios";
import { useEffect, useState } from "react";
import DisplayMusic from "./components/DisplayMusic/DisplayMusic";

function App() {

  const [songs, setSongs] = useState([]);
  
  //displays all the songs in the database when the page first render 
  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    const musicDataBase = await axios('http://127.0.0.1:8000/api/music/');
    setSongs(musicDataBase.data)
  }

  return (
    <div>
      <DisplayMusic songs={songs} />
    </div>
  );
}

export default App;
