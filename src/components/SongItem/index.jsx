import React from "react";
import List from "../SongList";



const SongItem = ({song, likedSong, dislikedSong }) => {

  return (
    <li>
    <span className={`song-item ${List.liked ? "liked" : ""}`}>{song.song}</span>
    <button  onClick={() => likedSong(song)}>Like</button>
    <button onClick={() => dislikedSong(song)}>Dislike</button>
</li>
  )
}

export default SongItem