import React from 'react'
import './css/Footer.css'
export default function Footer() {
  return (
    <>
      <div className='footing'>
        <div className='lefting'>
          <div className='lefting-1'>
        <h4>Coursify</h4> <img src='https://i.imgur.com/XgAeTdo.png' height={35} width={35}/>
        </div>
        <div className='reserved'>All rights Reserved</div>
        
        </div>

        <div className='righting'>
          <div className='footcontent'>
            <h4>Contact Us:</h4>
            <h5>Coursify@courses.com</h5>
            <h5>144-99877990</h5>
          </div>
        </div>
      </div>
    </>
  )
}
