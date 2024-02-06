import React from 'react'
import './Track.css'
import { FaPlus } from "react-icons/fa";


const Track = ({song}) => {
  return (
    <div className='trackInformation'>
      <h3 className='songTitle'>{song.name}</h3>
      <h4 className='songInfo'>{song.artists[0].name} | {song.album.name}</h4>
      <div className='addButton'>
        <FaPlus/>
        </div>
    </div>

  )
}

export default Track
