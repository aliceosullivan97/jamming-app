import Tracklist from '../Track/Tracklist/Tracklist'
import './Results.css'

   
  export function Results({songs, onAdd}) {
    return (
      <div className='resultsContainer'>
      <h1>Results</h1>
      <Tracklist 
          trackBgColor='#fff7d9b4'
          buttonAction="+"
          emptyState='Nothing to show here :( Try writing something in the search bar...'
          emptyFontColor='#686868'
          tracks={songs}
          onClick={onAdd}
          inPlaylist={false}
      />
  </div>
    )
  }

  
  