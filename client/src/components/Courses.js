import React from 'react'

import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './css/Courses.css'
import Popup2 from './Popup2';
import Navbar from './Navbar';
export default function Courses(props) {
    const location = useLocation();
    const [allimg, setAllimg] = useState(null);
    const [pop, setPop] = useState(false);
    const [myele, setMyele] = useState(null);

    useEffect(()=>{
        fetcher();
      },[])


    const fetcher = async()=>{
        try{
          const result = await axios.get("http://localhost:3510/courses");
          console.log(result.data);
          setAllimg(result.data);
        }
        catch(err){
          alert(err);
        }
      }

    const handlePop = (data)=>{
      setPop(data);
    }


  return (
    <>
    {
      location.state.id== '' ?
      <Navbar name="Sign Up" name2="Log In"  /> :
      <Navbar name={location.state.id} />
      }
      
    <div className='header-course container'><h3>Course List</h3></div>
    
    <div className='imgboxer1 container'>
    {
          allimg && allimg.map( (acourse) =>{

            return(
              <div onClick={()=>{setPop(true); setMyele(acourse._id)}}  className='coimg1'>
              <img alt ="" key={acourse._id} src={require(`../images/${acourse.img}`) } height={200} width={320}/>
              
              
              <div className='concon1'>
              <b>{acourse.cname}</b><br/>
              <small>{acourse.handler}</small> <br/>
              {acourse.desc} <br/>
              {acourse.hours} Hours<br/>
              <b> ₹{acourse.price}</b> <br/>
               
              </div>

              </div>
          )
          })}

        </div>
        <Popup2 trigger={pop} ele={myele} setTrigger={handlePop} usr={location.state.id}></Popup2>

     
    </>
  )
}
