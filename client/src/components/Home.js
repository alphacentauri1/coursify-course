import React from 'react'
import Categories from './Categories';
import Courses from './Courses'
import Navbar from './Navbar';
import Content from './Content'
import Runtext from './Runtext';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';
import DashBoard from './DashBoard';



export default function Home() {

const location = useLocation();

const[coursecard, setCoursecard] = useState(false);

const handleCourse = (data) =>{
  setCoursecard(data);
}

  return (

    <>
      {
      location.state==undefined ?
      <>
      <Navbar name="Sign Up" name2="Log In" setCoursecard={handleCourse} usr="" />
      <Runtext first="Coursify" second="Elevate Your Mind, One Course at a Time" />
      </> :
      <>
      <Navbar name={location.state.id} setCoursecard={handleCourse} usr={location.state.id}/>
      <Runtext first={`Hey ${location.state.id}`} second="Welcome to Coursify!" />
      <DashBoard usr={location.state.id}/>
      </>
      }
      
  
      {
        coursecard ? 
        ( location.state!=null? 
              <Courses usr={location.state.id} setCoursecard={handleCourse}/>: <Courses usr=""/> ): 
        <>  
          
          <Content/>
          { location.state==null ? <Categories usr=""/> : <Categories usr={location.state.id} /> }
        </>
      }

      <Footer/>

   
     
    </>
   
  )
}
