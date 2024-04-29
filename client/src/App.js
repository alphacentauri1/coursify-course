import Login from './components/Login'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import AdminPage from './components/AdminPage';
import Register from './components/Register';
import User from './components/User';
import Tagger from './components/Tagger';
import Embedder from './components/Embedder';
import Courses from './components/Courses';
import { useState } from 'react';

function App() {

  const [usr, setUsr] = useState('');
  const handleUsr = (name)=>setUsr(name);
  
  
  

  
  

  return (
  <>
  <Router>
    <Routes>
      <Route path="/login" element = {<Login usr={usr} handler={handleUsr}/>}/>
      <Route path="/" element = {<Home/>}/>
      <Route path="/courses" element = {<Courses usr={usr} handler={handleUsr}/>}/>
      <Route path="/admin" element = {<AdminPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/player" element={<Embedder/>}/>
      <Route exact path="/user/:slug" element={<User usr={usr}/>}/>
      <Route exact path="/tag/:slug" element={<Tagger/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
