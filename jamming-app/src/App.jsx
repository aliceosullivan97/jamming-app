import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Search from './components/Search/Search'

function App() {

  const [input, setInput] = useState('Search for an artist, song etc. ')

  


  return (
    <>
      <Header />
      <Search input={input}/>
    </>
  )
}

export default App
