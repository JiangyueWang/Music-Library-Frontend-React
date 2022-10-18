import React, { useState } from 'react';

const SearchSong = (props) => {
    const [searchType, setSearchType] = useState('');
    const [searchValue, setSearchValue] = useState('');
    // console.log('serachType',searchType)
    function handleSearchSubmit(event) {
        event.preventDefault();
        props.searchResult(searchValue)
    }
    return ( 
        <div>
            <select value={searchType} onChange={(event) => setSearchType(event.target.value)}>
                <option>choose type of your search</option>
                <option value="id">id</option>
                <option value="title">title</option>
                <option value="artist">artist</option>
                <option value="album">album</option>
                <option value="release_date">release_date</option>
                <option value="genre">genre</option>
            </select>
            <form onSubmit={handleSearchSubmit}>
                <input onChange={(event) => setSearchValue(event.target.value)}></input>
                <button type='submit'>search</button>
            </form>
        </div>
    );
}
 
export default SearchSong;