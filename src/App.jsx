import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Search from './components/Search/Search'
import { Results } from './components/Results/Results'
import Playlist from './components/Playlist/Playlist'
import './credentials'

const CLIENT_ID = ClientID
const CLIENT_SECRET = ClientSecret

function App() {

  const [input, setInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [songs, setSongs] = useState([]);
  const [trackNames, setTrackNames] = useState([]);
  

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

  console.log(songs);

  
 
 




  return (
    <>
      <Header />
      <Search search={returnSearch}/>
      <div className='resultsAndPlaylist'>
        <Results trackNames={trackNames} songs={songs}/>
        <Playlist />
      </div>
      
    </>
  )
}

export default App
