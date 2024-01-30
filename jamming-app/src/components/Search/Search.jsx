import React from 'react'
import { CiSearch } from "react-icons/ci";
import './Search.css';

const Search = () => {
  return (
    <div >
      <form className='searchContainer'>
        <input type='text' placeholder='Enter a song title or artist name...'></input>
        <button className='searchButton' type='submit'>
        <CiSearch style={{color: 'black', fontSize: '2rem'}}/>
        </button>
        </form>
    </div>
  )
}

export default Search
