import React from 'react'
import './css/Login.css'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Login(props) {
    const navi = useNavigate();
    //const [usr, handler] = props;
    const usr = props.usr;
    const handleUsr = props.handler;
   // const [usr, setUsr] = useState('');
    const [pswd, setPswd] = useState('');

    async function submit(e){
        e.preventDefault();
        try{
            console.log(usr);
            await axios.post('http://localhost:3510/login',{
                usr, pswd
            })
            .then(res=>{
                console.log(res.data);
                if(res.data==="valid"){
                    navi("/", {state: {id:usr}});
                    
                }
                else if(res.data==="admin")
                    navi("/admin", {state: {id:"ad"}});
                
                else if(res.data==="invalid")
                    alert("Wrong Password..");
                
                else
                    alert("Register Yourself");
                
            })

        }
        catch(err){
            console.log(err);
        }
    }



  return (
    <>
    <div className="login">
        
        <div className="wrapper">
            <form className="user-login" action='POST'>
            <h1>Coursify</h1>
            <div className="input-box-1">
                <input type="text" placeholder="Username" onChange={(e)=>{    console.log(e.target.value);handleUsr(e.target.value)}} required/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box-1">
                <input type="password" placeholder="Password" onChange={(e)=>setPswd(e.target.value)} required/>
                <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit" onClick={submit} className="b1">Login</button>
            <div className="register-link">
                <p>Don't have an account?<a href="/register"> Register</a></p>
            </div>
        </form>
    </div>


    </div>
    
    
    
    
    </>
  )
}
