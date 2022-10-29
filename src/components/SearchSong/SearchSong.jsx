import React, { useState } from 'react';

const SearchSong = (props) => {
    const [searchType, setSearchType] = useState('');
    const [searchValue, setSearchValue] = useState('');
    
    function handleSearchSubmit(event) {
        event.preventDefault();
        props.searchResult(searchValue, searchType);
    }

    return ( 
        <div className='flex'>
                    <div className='search-song-form-wrapper flex'>
            <select value={searchType} onChange={(event) => setSearchType(event.target.value)} className="select">
                <option>choose type of your search</option>
                <option value="id">id</option>
                <option value="title">title</option>
                <option value="artist">artist</option>
                <option value="album">album</option>
                {/* <option value="release_date">release_date</option> */}
                <option value="genre">genre</option>
            </select>
            <form onSubmit={handleSearchSubmit} className="search-song-form flex">
                <input onChange={(event) => setSearchValue(event.target.value)} className="form-control"></input>
                <button type='submit' className='btn btn-light'>search</button>
            </form>
        </div>
        </div>

    );
}
 
export default SearchSong;