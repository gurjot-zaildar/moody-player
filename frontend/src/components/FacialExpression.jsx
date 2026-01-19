import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import "./facialExpression.css"
import axios from "axios";

export default function FacialExpression({setSongs}) {
  const videoRef = useRef();

   const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };
    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing webcam: ", err));
    };
   

    async function detectMood(){
        
        const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

          let mostProableExpression = 0;
          let _expression = "";

          if(!detections || detections.length ===0 ){
            console.log("no face dertected");
            return;
          }
     
          for(const expression of Object.keys(detections[0].expressions)){
            if(detections[0].expressions[expression] > mostProableExpression){
                mostProableExpression = detections[0].expressions[expression]
                _expression = expression;
            }
          }

          console.log(_expression)

          axios.get(`http://moody-player-production-67cd.up.railway.app/songs?mood=${_expression}`)
           .then(response=>{
            console.log(response.data)
            setSongs(response.data.songs)
           }) 
        }

  useEffect(() => {

   

    loadModels().then(startVideo);
  }, []);
  return (
    <div className='mood-element'>
      <h1>Live Mood Detection</h1>
      <div className='main-box'>
      <div className='video-box'>
      <video
        ref={videoRef}
        autoPlay
        muted
        className='user-video-feed'
        />
        </div>
        <div className='side-box'>
          <h2>Live Mood Detection</h2>
        <p>Your Current mood is being analyzed in real-<br/>
          time. Enjoy music tailored to your feelings.  </p>
      <button onClick={detectMood}>Detect Mood</button>
        </div>
        </div>
</div>
);
}