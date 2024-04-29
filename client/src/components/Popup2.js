import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import './css/Popup.css'
import axios from 'axios';

import 'boxicons'

export default function Popup2(props) {
    const navi = useNavigate();
    const [resset, setResset] = useState(null);
    
    
    useEffect(()=>{  
      fetcher();
    },[props.trigger])
  
    const fetcher = async()=>{
      try{
        const link = "http://localhost:3510/courses/" +props.ele;
        await axios.get(link)
        .then(ressing=>{
        setResset(ressing);
        })
      }
  
      catch(err){
        console.log(err);
      }
  
    }

    

    const purchase = async(courses, spent)=>{
      const _id = props.usr;
        if(props.usr==""){
            alert("Enter username");
            navi("/login");
        }
        else{
          try{

          await axios.post('http://localhost:3510/user',{
              _id, courses , spent         
          }

          )
          .then(res=>{
            if(res.data=="already bought")
              alert("Already purchased");
            
            else if(res.data=="success")
              alert("purchase Successfull");
            
            else
              alert("Failed");
            
          });

          }
          catch(err){
            alert(err);
          }
        }
    }

    
  return (props.trigger)?
    (
    <div className='pop-main'>
    <div className='poper-main'>
   
    <box-icon name='x' id="closers" onClick={()=>{props.setTrigger(false)}}> </box-icon>
    
    <div className='popping'>  
      {(resset.data.img==null)? <img src={require(`../images/1699093831399.png`)} width={420}height={300}/>
      : <img src={require(`../images/${resset.data.img}`)} width={420}height={300}/>
      }
     
      <div className='conconcon'>
        <div className='conconcon2'>
      <b>Course Name: </b>{resset.data.cname} <br/>
      <b>Course Code: </b>{resset.data._id}<br/>
      <b>Author: </b>{resset.data.handler}<br/>
      <b>Course Duration: </b>{resset.data.hours} Hours<br/>
      <b>Course Description: </b>{resset.data.desc}<br/>
      <h3>Price: {resset.data.price}</h3><br/>
      <button id="pur"  onClick={()=>purchase(resset.data._id,resset.data.price)}> Purchase</button><br/>
  
      </div>
      </div>
     
    </div>

    </div>
    </div>
  ) : null;
}
