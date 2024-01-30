import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Search from './components/Search/Search'

function App() {

  const [input, setInput] = useState('')

  //Return search query to console
  const returnSearch = () => {
    const userInput = console.log(document.getElementById('userInput').value)
      return {
        userInput
      }
  }


  return (
    <>
      <Header />
      <Search search={returnSearch}/>
    </>
  )
}

export default App
