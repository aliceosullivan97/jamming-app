import React from 'react'
import Track from '../Track'

const Tracklist = ({tracks, onClick, buttonAction}) => {
  return (
    <div className='trackList'>
        {tracks.map((track) => {
            return (
            <Track 
            track={track} onClick={onClick} buttonAction={buttonAction}/>
            )
        })}
    </div>
  )
}

export default Tracklist
