import axios from "axios";
import { useEffect, useState } from "react";
import DisplayMusic from "./components/DisplayMusic/DisplayMusic";
import AddANewSong from "./components/AddANewSong/AddANewSong";
import SearchSong from "./components/SearchSong/SearchSong";
function App() {

  const [songs, setSongs] = useState([]);
  
  //displays all the songs in the database when the page first render 
  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    // use axios.get to retrive all songs stored in the database
    const musicDataBase = await axios.get(`http://127.0.0.1:8000/api/music/`);
    setSongs(musicDataBase.data);
  }

  async function addSong(newSongInfo) {
    // axios.post to update the database with song's information submitted by AddANewSong component
    await axios.post('http://127.0.0.1:8000/api/music/', newSongInfo);
    getAllSongs();
  }

  const [searchType, setSearchType] = useState('')
  const [song, setSong] = useState('')
  async function searchResult(searchValue, serachType) {
   // console.log('app.js search value', searchValue);
   setSearchType(serachType)
   console.log('searchType', serachType);
   if (serachType === 'id') {
    // const stringValue = String(searchValue);
    // console.log(stringValue);
    const song = await axios.get(`http://127.0.0.1:8000/api/music/${searchValue}`);
    console.log(song);
    setSong(song.data)}
   
  }
  return (
    <div>
      <SearchSong searchResult={searchResult} searchType={searchType}/>
      <br></br>
      <AddANewSong addSong={addSong}/>

      <DisplayMusic songs={songs} />
    </div>
  );
}

export default App;
