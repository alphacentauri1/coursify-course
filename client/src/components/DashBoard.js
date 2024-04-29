import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Dashboard.css'
function DashBoard(props) {
  const navi = useNavigate();
const [resset, setResset] =useState();
const [allcourse, setAllcourse] = useState('');
        useEffect(()=>{
        userInfofetcher();
        courseFetcher();
        },[])

        const  userInfofetcher= async()=>{
        try{
          await axios.get(`http://localhost:3510/user:${props.usr}`)
          .then(resultset=>{
            console.log(resultset)
            setResset(resultset.data);
          })
        }
        catch(err){
          alert(err);
        }
        }

        const courseFetcher = async()=>{
          try{
            const result = await axios.get("http://localhost:3510/courses");
            console.log(result.data);
            setAllcourse(result.data);
          }
          catch(err){
            alert(err);
          }
        }

        function redirectOr(links, cname){
          navi("/player",{state: {link:links, name: cname}} )
        }


  return (
  <>
  <div className='container dash_main'>
    <h2>Welcome {props.usr}<br/><h3>Your Courses</h3></h2>
    <div className='dash_display'>
        {
           !resset ? <h3 className='dash_inner'>You havent enrolled in any courses..</h3> :
           allcourse && resset && allcourse.map(function(acourse){
             if(resset.courses.includes(acourse._id)){
              return(
              <div   className='coimg1'>
              {
              acourse.link ? 
                 <img alt ="" key={acourse._id} onClick={()=>redirectOr(acourse.link,acourse.cname)} src={require(`../images/${acourse.img}`) } height={200} width={320}/>
              :
              <img alt ="" key={acourse._id} src={require(`../images/${acourse.img}`) } height={200} width={320}/>
             }
              
              <div className='concon1'>
              <b>{acourse.cname}</b><br/>
              <small>{acourse.handler}</small> <br/>
              {acourse.desc} <br/>
              {acourse.hours} Hours<br/>
              
               
              </div>

              </div>
              )
             };
            })
        }
    
        </div>


    </div>
  
    
    
  </>
  )
}

export default DashBoard