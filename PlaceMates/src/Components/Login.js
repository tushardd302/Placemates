import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const [data,setData]= useState({
        email:"",
        password:"",
    })
       const history = useNavigate();

    const handleChange=(e)=>{
        setData(prev=>({ ...prev, [e.target.name] : e.target.value}));
        console.log(data);
    }
    const handlClick=async e=>{
        e.preventDefault()
        console.log(data)
        try{
            const resp= await axios.post("http://localhost:8700/login",data);
            console.log(resp,'aaaaaaaaaa')
            localStorage.setItem("designation", resp.data.user.designation);
      
            history('/');
            alert("Logged In Successfully")
           
        }catch(err){
            console.log(err);
        }
        
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="form">
                <div className='left'>
                    <div className='lefthead'>
                        <h1>
                            Welcome Back!
                        </h1>
                        <h4>
                            To keep connected with us please login with your personal info
                        </h4>
                    </div>
                </div>
                <form className='right'>
                    <div className="heading">
                        <h1>Login</h1>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Email address</label>
                        <input  onChange={handleChange} type="email" name="email"id="form2Example1" className="form-control"  />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example2">Password</label>
                        <input  onChange={handleChange} type="password" name="password"id="form2Example2" className="form-control" />
                    </div>
                    <button type="button" onClick={handlClick} className="btn btn-danger btn-block mb-4" id='loginbtn' >Login in</button>
                </form>
            </div>
        </>
    )
}
