import React, {useState} from 'react'
import './App.css'

import { Bio, SongList } from './components'


const App = () => {

  const [submitValue, setSubmitValue] = useState("")
    const [inputText, setInputText] = useState("")
  return (
    <>
    <div> <Bio /> </div>
    <div><SongList submitValue={submitValue} setSubmitValue={setSubmitValue} inputText={inputText} setInputText={setInputText}/></div>
    </>
  )
}


export default App