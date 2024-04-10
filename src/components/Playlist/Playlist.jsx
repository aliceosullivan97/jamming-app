import React from 'react'
import './Playlist.css'
import Tracklist from '../Track/Tracklist/Tracklist'

const Playlist = ({playlistTracks, onRemove}) => {
  return (
    <div className='playlistContainer'>
      <input className='playlistName' type='text' placeholder='Playlist Name'></input>
      <Tracklist 
                trackBgColor='#fff2c2dc'
                buttonAction="-"
                emptyState='Nothing in your playlist yet! Add tracks from the search results...'
                emptyFontColor='#918C7C'
                tracks={playlistTracks}
                onClick={onRemove}
                inPlaylist={true}
            />
    </div>
  )
}

export default Playlist


