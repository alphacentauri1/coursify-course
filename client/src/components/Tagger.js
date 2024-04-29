import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Popup2 from './Popup2';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './css/Tagger.css'
export default function Tagger() {
    const {slug} = useParams();
    const location = useLocation();
    const [resset, setResset] = useState(null);


    useEffect(()=>{
        fetcher();
    },[]);

    const fetcher = async()=>{
        try{
            await axios.get(`http://localhost:3510/tagy/${slug}`)
            .then(res=>{
                    if(res.data=="no entries"){
                        alert("no entries found on db");
                    }
                    else{
                        console.log(res);
                        setResset(res.data);
                    }
            })
        }
        catch(err){
            alert(err);
        }
    }
    const [pop, setPop] = useState(false);
    const [myele, setMyele] = useState(null);
  return (
    <>
    <div className='container titmaro'><h2>{slug}</h2></div>
    
    <div className='imgboxer1 container'>
    {
          resset && resset.map( (shitele) =>{

            return(
              <div onClick={()=>{setPop(true); setMyele(shitele._id)}}  className='coimg1'>
              <img key={shitele._id} src={require(`../images/${shitele.img}`) } height={200} width={320}/>
              
              
              <div className='concon1'>
              <b>{shitele.cname}</b><br/>
              <small>{shitele.handler}</small> <br/>
              {shitele.desc} <br/>
              {shitele.hours} Hours<br/>
              <b> ₹{shitele.price}</b> <br/>
               
              </div>

              </div>
          )
          })}

        </div>
        {
            (location.state)?
        <Popup2 trigger={pop} ele={myele} setTrigger={setPop} usr={location.state.id}></Popup2>:
        <Popup2 trigger={pop} ele={myele} setTrigger={setPop} usr=""></Popup2>
        }
     
    </>
  )
}
