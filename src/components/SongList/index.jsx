import React, { useState } from 'react'
import SongItem from '../SongItem'

const List= [
    {song: "Down", liked: false}, 
    {song: "Right with me", liked: false},
    {song: "Ride It", liked: false}
]

const SongList = () => {
    
    const likedSong = () => {

    }

    const dislikedSong = () => {
        
    }

  return (
    <div>
        <h2>Song List</h2>
        <ul>
            {List.map((song, i) =>(<SongItem song={song} key={i} likedSong={likedSong} dislikedSong={dislikedSong} />))}
        </ul>
    </div>
  )
}




export default SongList
