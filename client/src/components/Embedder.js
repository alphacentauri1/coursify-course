import React from 'react'
import './css/Embedder.css'
import YoutubeEmbed from './yt'
import { useLocation } from 'react-router-dom';
export default function Embedder() {
  const location = useLocation();
  return (
    <div>
      <h2 className='container'>{location.state.name}</h2>
        <YoutubeEmbed embedId={location.state.link}/>
    </div>
  )
}
