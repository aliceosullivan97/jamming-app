import React from 'react'
import './Track.css'
import { FaPlus } from "react-icons/fa";


const Track = ({track, onClick, buttonAction}) => {
  const trackAction = (event) => onClick(track);

  return (
    <div className='eachTrack'>
      <div className='trackInformation'>
      <h3 className='songTitle'>{track.name}</h3>
      <h4 className='songInfo'>{track.artists[0].name} | {track.album.name}</h4>
      </div>
      <button className='addButton' onClick={trackAction}>
        {buttonAction}
        </button>
    </div>

  )
  }


export default Track;
