import Track from "../Track/Track"
import './Results.css'

   
  export function Results({songs}) {
    return  (
      <div className="resultsContainer">
          <h1>Results</h1>
          {songs.map((song) => {
              return (
              <Track 
              song={song}/>
              )
          })}
      </div>
    )
  }
  