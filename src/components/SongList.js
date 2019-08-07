import React from "react";

const SongList = (props) => {
  const options = props.songs.map((song, index) => {
  return (
    <li value={index += 1} key={index}>
    <h2> {index + 1}. {song.title.label}</h2>
    </li>


  )
})
return(
  <div className="top-20">
  <ol>{options}</ol>
  </div>
)

}

export default SongList;
