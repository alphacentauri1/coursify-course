import React, { useEffect } from 'react'
import Runtext from './Runtext'
import './css/AdminPage.css'
import axios, * as others from 'axios';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


export default function AdminPage() {
  const [cname, setCname] = useState('');
  const [hours, setHours] = useState(0);
  const [_id, setCid] = useState('');
  const [desc, setDesc] = useState('');
  const [handler, setHandler] = useState('');
  const [tag, setTag] = useState('');
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState('');
  const [link, setLink] = useState('');

  const[allimg, setAllimg] = useState(null);

  const navi = useNavigate();
  const loco = useLocation();

  var counter=0;
  
  !loco.state ? navi("/") : counter+=1


  useEffect(()=>{
    fetcher();
  },[])

  
  async function submit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("CourseName", cname);
    formData.append("CourseId", _id);
    formData.append("Hours", hours);
    formData.append("Description", desc);
    formData.append("Tag", tag);
    formData.append("Handler", handler);
    formData.append("Price", price);
    formData.append("img", img);
    formData.append("Link", link);



    try{

        const result = await axios.post(
          'http://localhost:3510/courses',
            formData,
            {
              headers:{"Content-Type" : "multipart/form-data"},
            }
        )
        .then(res=>{
            
            if(res.data=="success"){
              alert("Entry was successfull");
            }

            else if(res.data=="cid duplicate"){
              alert("Duplicate Course Id");
            }
            else{
                alert("Some error from DB");
            }
        })

    

    }
    catch(err){
        console.log(err);
        alert("Field type mismatch");
    }
}

const onInputChange = (e)=>{
 
  setImg(e.target.files[0]);
}


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

  return (

    <>
    <Runtext first="Coursify" second="Admin Dashboard"></Runtext>
    <div className='container' id="maining">
          <form action='/admin' encType="multipart/form-data">
              Course: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" placeholder="Course Name" onChange={(e)=>setCname(e.target.value)}required/>
              <br/>
              <br/>
              Course ID:&nbsp;
              <input type="text" placeholder="Course ID(Unique key)" onChange={(e)=>setCid(e.target.value)}required/>
              <br/><br/>
              Hours:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="number" placeholder="Hours" onChange={(e)=>setHours(e.target.value)}required/>
              <br/><br/>
              Course Description:&nbsp;&nbsp;
              <input type="text" placeholder="Description" onChange={(e)=>setDesc(e.target.value)}required/>
              <br/><br/>
              Course Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" placeholder="Course Tag" onChange={(e)=>setTag(e.target.value)}required/>
              <br/><br/>
              
              Image Upload: 
              <input accept='image/*' type='file' onChange={onInputChange} required/>

              {/* {img==''|| img==null?<p></p>: <img width={200} height={200} src={`../images/${img}`}/>} */}
              <br/><br/>
              Subject Handler:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" placeholder="Handler Name" onChange={(e)=>setHandler(e.target.value)}required/>
              <br/><br/>
              Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="number" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}required/>
              <br/><br/>
              Youtube Playlist(must be private):
              <input type='text' placeholder="Link" onChange={(e)=>setLink(e.target.value)} required/>
              <br/><br/>
              <button id="submiter"  type='submit' onClick={submit}>Submit</button>
          </form>

 

    </div>

    <div className='imgboxer container'>
    {
          allimg && allimg.map( (acourse) =>{

            return(
              <div className='coimg'>
              <img key={acourse._id} src={require(`../images/${acourse.img}`) } height={200} width={320}/>
              {acourse.cname} <br/>
              {acourse._id} <br/>
              {acourse.desc} <br/>
              {acourse.hours} Hours<br/>
                Tag:   {acourse.tag} <br/>
              {acourse.handler} <br/>
              ₹{acourse.price} <br/>
              Link:{acourse.link}<br/>

              
              </div>
          )
          })}

     </div>
    </>
  )
}
