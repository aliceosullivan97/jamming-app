import React from 'react'
import { CiSearch } from "react-icons/ci";
import './Search.css';

const Search = ({search}) => {

  return (
    <div className='searchContainer'>
        <input id='userInput' type='text' placeholder='Enter a song title or artist name...'></input>
        <button className='searchButton' onClick={search} >
        <CiSearch style={{color: 'black', fontSize: '2rem'}}/>
        </button>
    </div>
  )
}

export default Search
