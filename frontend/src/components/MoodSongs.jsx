
import { useState } from "react"
import "./MoodSongs.css"

const MoodSongs = ({Songs}) => {

    const[isPlaying , setIsPlaying] = useState(null);

    const hanhlePlayPause = (index) => {
        if(isPlaying===index){
            setIsPlaying(null);
        }else{
            setIsPlaying(index)
        }
    }

  return (
    <div className='mood-songs'>
        <h1>Recommended Songs ✨</h1>
        {Songs.map((songs,index)=>(
            <div className="song" key={index}>
            <div className='title'>
                <h3>{songs.title}</h3>
                <p>{songs.artist}</p>

                    </div>
                <div className='play-pause-button'>
                    {
                        isPlaying===index &&
                        <audio src={songs.audio} controls
                        autoPlay={isPlaying===index}></audio>
                    }
                    <button onClick={()=>hanhlePlayPause(index)}>
                        {isPlaying===index?
                        <i className="ri-pause-fill"></i>:
                        <i className="ri-play-fill"></i>
                    }
                    </button>
                    </div>
                
        </div>
    ))}
        </div>
      
  )
}

export default MoodSongs
