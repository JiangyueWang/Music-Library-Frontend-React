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
    // when the page render the first time use axios.get to retrive all songs stored in the database
    const response = await axios.get(`http://127.0.0.1:8000/api/music/`);
    setSongs(response.data);
  }

  async function addSong(newSongInfo) {
    // axios.post to update the database with song's information submitted by AddANewSong component
    await axios.post('http://127.0.0.1:8000/api/music/', newSongInfo);
    getAllSongs();
  }

  const [searchType, setSearchType] = useState('')
  
  async function searchResult(searchValue, serachType) {

    setSearchType(serachType);

    if (serachType === 'id') {
    const response = await axios.get(`http://127.0.0.1:8000/api/music/${searchValue}/`);
    setSongs(response.data);
    }
    else {
      // console.log(`http://127.0.0.1:8000/api/music?${serachType}=${searchValue}`)
      const response = await axios.get(`http://127.0.0.1:8000/api/music/?${serachType}=${searchValue}`);
      setSongs(response.data);
    }
  }

  // allow user to choose search for songs, add a new song, update a song
  const [showSearchSong, setShowSearchSong] = useState(false)
  const [showAddSong, setAddSong] = useState(false)
  function chooseSearchSong() {
    setShowSearchSong(!showSearchSong);
    setAddSong(false);
  }

  function chooseAddSong() {
    setShowSearchSong(false);
    setAddSong(!showAddSong);
  }

  const updateDisplaySong = () => {
    getAllSongs();
    
    console.log('get all song runs again')
    console.log(songs)
  }
  return (
    <div>
      <p>What would you like to do with you music library?</p>
      <button type="button" onClick={() => chooseSearchSong()}>Search for a song</button>
      <button type="button" onClick={() => chooseAddSong()}>Add a new song </button>

      
      { showSearchSong 
          && <SearchSong searchResult={searchResult} searchType={searchType}/>
      }

      <br></br>
      
      {showAddSong && 
          <AddANewSong addSong={addSong}/>  
      }

      <DisplayMusic songs={songs} updateDisplaySongProp={updateDisplaySong}/>
    </div>
  );
}

export default App;
