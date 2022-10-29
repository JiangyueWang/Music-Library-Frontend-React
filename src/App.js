import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import DisplayMusic from "./components/DisplayMusic/DisplayMusic";
import AddANewSong from "./components/AddANewSong/AddANewSong";
import SearchSong from "./components/SearchSong/SearchSong";
import './App.css';
function App() {

  // delcatre state variable song to hold all the songs from database
  const [songs, setSongs] = useState([]);
  
  //displays all the songs in the database when the page first render 
  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    // when the page render the first time use axios.get to retrive all songs stored in the database
    const response = await axios.get(`http://127.0.0.1:8000/api/music/`);
    // setSongs will updated the state variable songs to response.data
    setSongs(response.data);
  }

  async function addSong(newSongInfo) {
    // axios.post to update the database with song's information submitted by AddANewSong component
    await axios.post('http://127.0.0.1:8000/api/music/', newSongInfo);
    // when a new song added to the database, call getAllSongs again to display the recent updated song to the page
    getAllSongs();
  }

  // decalare a state variable searchType to hold the 
  const [searchType, setSearchType] = useState('')
  async function searchResult(searchValue, serachType) {
    setSearchType(serachType);

    if (serachType === 'id') {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/music/${searchValue}/`);
        setSongs(response.data);
      } catch(err) {
        alert(err.response.data.detail);
      } finally {
        // console.log(response.data)
      }
      
    
    }
    else {

      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/music/?${serachType}=${searchValue}`);
        setSongs(response.data);
      } catch(err) {
        alert(err.response.data.detail)
      } finally {
        //
      }
      
    }
  }

  // toggle SearchSong and AddANewSong buttont
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

  return (
    <div>
      <NavBar />
      <div className="search-add-song-wrapper">
        <div className="search-add-a-song-buttons">
          <button type="button" onClick={() => chooseSearchSong()}>Search for a song</button>
          <button type="button" onClick={() => chooseAddSong()}>Add a new song </button>
        </div>
        <div className="search-add-song-forms">
          { showSearchSong 
              && <SearchSong searchResult={searchResult} searchType={searchType}/>
          }

          {showAddSong && 
              <AddANewSong addSong={addSong}/>  
          }
        </div>

      </div>
      <DisplayMusic songs={songs} getAllSongsProp={getAllSongs}/>
    </div>
  );
}

export default App;
