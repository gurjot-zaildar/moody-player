import React, { useState } from 'react'
import FaceExpression from './components/FacialExpression'
import MoodSongs from './components/MoodSongs'

function App() {

    const [Songs, setSongs] = useState([
        
    ])

  return (
    <div>
      <FaceExpression setSongs={setSongs}/>
      <MoodSongs Songs={Songs}/>
    </div>
  )
}

export default App
