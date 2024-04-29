import React from 'react'
import './css/Navbar.css'
import {  useNavigate } from "react-router-dom"


export default function Navbar(props) {

const navi = useNavigate();
const {setCoursecard, name} = props;
const navigator = ()=>{
  navi("/courses", {state: {id:name}})
}

  return (
    
<>
<div className="navi">
      <div className="pl1"></div>
            
        <div className="main">
              <div className="lef">
                <div  onClick={navigator} className="courses">Courses</div>
              </div>

              <div  className="cen">
                <div className="coname"><b>Coursify</b></div>
                <div className="logo"><img src="https://i.imgur.com/XgAeTdo.png" alt="logo" height="30px" width="30px" /></div>
              </div>


              <div className="rig">
                {
                props.name=="Sign Up" ? 
                <>
                <a href='/register' className="sign">{name}</a>
                <a href='/login' className="sign">Log In</a></>:
                ( <>
                <a href={`/user/${name}`} className='sign'>{props.name}</a>
                <box-icon name='user-circle'/>
                </>
                )
                }  
              </div>
              
        </div>

      <div className="pl2"></div>
</div>

</>
  )
}
