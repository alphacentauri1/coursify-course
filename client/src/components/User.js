import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './css/User.css'
export default  function User(props) {



const [resset, setResset] = useState(null);

const {slug} = useParams();

useEffect(()=>{
 fetcher();
},[])

const  fetcher= async()=>{
try{
  

  await axios.get(`http://localhost:3510/user:${slug}`)
  .then(resultset=>{
    console.log(resultset)
    setResset(resultset);
  })
}
catch(err){
  alert(err);
}
}

  return (
    <>
    <br/>
    <br/>

    {
      (resset)?(
    <div className='usrpanel container'>
     

           <h2> {resset.data._id}</h2> <br/>
           { 
           (resset.data.spent)?(<>
            <h2>₹{resset.data.spent}</h2> <br/>
            </>):
            null
          }
            <h3>Enrolled Courses</h3>
        {
            resset.data.courses.map((shitele)=>{

              return(
                <>
                
                {shitele}<br/>
                </>
              )

            })
        }  
    
     </div>
      ) : "No Courses Bought Yet"
}
     </>
    
  )
}
