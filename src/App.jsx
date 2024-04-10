import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Search from './components/Search/Search'
import { Results } from './components/Results/Results'
import Playlist from './components/Playlist/Playlist'

const CLIENT_ID = 'a15b0fb9f2964bb6b1edeec7d0041d85'
const CLIENT_SECRET = 'af60194bd8f14d1785d0f5e94d938469'

function App() {

  const [input, setInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [songs, setSongs] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
  
  

  useEffect(() => {

    const authParameters = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
      }
  
      fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setAccessToken(data.access_token))
    }, [])


  //Return search query to console
  const returnSearch = async () => {
    setInput(document.getElementById('userInput').value)
    console.log('Search for ' + input)

    //Get request using search to get the Artist ID
    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    const artistID = await fetch('https://api.spotify.com/v1/search?q=' + input + '&type=artist', searchParameters)
    .then(response => response.json())
    .then(data => {return data.artists.items[0].id})
     
    console.log('Artists ID is ' +artistID)

  //Get the artists top tracks using the artist ID
    const returnedSongs = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/top-tracks' + '?market=ES', searchParameters)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setSongs(data.tracks);
    })
  
  
  }

  //Add track to playlist
  const addTrack = (track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;

    setPlaylistTracks((prev) => [...prev, track]);
  };


  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) => 
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  };
  


  return (
    <>
      <Header />
      <Search search={returnSearch}/>
      <div className='resultsAndPlaylist'>
        <Results songs={songs} onAdd={addTrack}/>
        <Playlist songs={songs} playlistTracks={playlistTracks} onRemove={removeTrack}/>
      </div>
      
    </>
  )
}

export default App
