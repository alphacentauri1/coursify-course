import React from 'react'
import './css/Runtext.css'
import Typewriter from "typewriter-effect";
export default function Runtext(props) {
  var main1 = props.first;
  var main2 = props.second;

  return (
    <>
     <div className="typewriter">
            <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString(main1)
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(main2)
                        .start();
                }}
            />
        </div>
    </>
    
  )
}
