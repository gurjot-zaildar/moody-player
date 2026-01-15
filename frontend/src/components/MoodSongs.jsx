import React, { useState } from 'react'
import "./MoodSongs.css"

const MoodSongs = () => {

    const [Songs, setSongs] = useState([
        {
            title:"test-title",
            artist:"test-artist",
            url:"test-url"
        },
         {
            title:"test-title",
            artist:"test-artist",
            url:"test-url"
        },
         {
            title:"test-title",
            artist:"test-artist",
            url:"test-url"
        }
    ])

  return (
    <div className='mood-songs'>
        <h2>Recommended Songs</h2>
        {Songs.map((songs,index)=>(
            <div key={index}>
            <div className='title'>
                <h3>{songs.title}</h3>
                <p>{songs.artist}</p>
                </div>

                <div className='play-pause-button'>
                <i className="ri-pause-line"></i>
                <i className="ri-play-fill"></i>
        </div>
        </div>
    ))}
        </div>
      
  )
}

export default MoodSongs
