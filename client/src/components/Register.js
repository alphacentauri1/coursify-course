import React from 'react'
import './css/Register.css'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Register() {
const [name, setName] = useState('');
const [id, setId] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [pswd, setPswd] = useState('');
const [cpswd, setcPswd] = useState('');
const navi = useNavigate();
async function submit(e){
    e.preventDefault();
    try{
        if(pswd!==cpswd) alert("Passwords Mismatch!...");
        else{
            await axios.post('http://localhost:3510/register',{
                name, id, email, phone, pswd
            })
            .then(res=>{
                if(res.data==="success"){
                    navi("/login");
                }
                else if(res.data==="exists"){
                    alert("Username already exists...");
                }
                else{
                    alert("User cannot be created...");
                }
            })
        }
    }
    catch(err){
        console.log(err);
    }
}



  return (
    <div className="register">
    <div className="wrapper-2">
        <form className="user-register">
            <h1>Coursify</h1>
            <div className="input-box-2">
                <div className="input-field-1">
                    <input type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)}required/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-field-1">
                    <input type="text" placeholder="Username" onChange={(e)=>setId(e.target.value)} required/>
                    <i className='bx bxs-user'></i>
                </div>
            </div>
            <div className="input-box-2">
                <div className="input-field-1">
                    <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
                    <i className='bx bxs-envelope' ></i>
                </div>
                <div className="input-field-1">
                    <input type="number" placeholder="Mobile Number" onChange={(e)=>setPhone(e.target.value)} required/>
                    <i className='bx bxs-phone' ></i>
                </div>
            </div>

            <div className="input-box-2">
                <div className="input-field-1">
                    <input type="password" placeholder="Password" onChange={(e)=>setPswd(e.target.value)} required/>
                    <i className='bx bxs-lock-alt' ></i>
                </div>
                <div className="input-field-1">
                    <input type="password" placeholder="Confirm Password" onChange={(e)=>setcPswd(e.target.value)} required/>
                    <i className='bx bxs-lock-alt' ></i>
                </div>
            </div>

            <label><input type="checkbox"/>I hereby declare that the above information provided is true and correct</label>
            <button type="submit" className="b2" onClick={submit}>Register</button>
        </form>
    </div>

</div>

  )
}
