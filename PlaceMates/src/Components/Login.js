import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
    const [data,setData]= useState({
        Designation:"",
        Email:"",
        Password:"",
    })

//     const handleChange=(e)=>{
//         setData(prev=>({ ...prev, [e.target.name] : e.target.value}));
//         // console.log(data);
//     }
// // console.log(data);
//     const handlClick=async e=>{
//         e.preventDefault()
//         try{
//             const role= await axios.post("http://localhost:8700/placemates"+Designation);
//             const email= await axios.post("http://localhost:8700/placemates"+Email);
//             const pass= await axios.post("http://localhost:8700/placemates"+Password);

//             if(data.Designation===role && data.Designation===role && data.Designation===role){

//             }
//              alert("data storedd");
           
//         }catch(err){
//             console.log(err);
//         }
        
//     }

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
                        <label for="inputDesignation">Designation</label>
                        <br />
                        <select class="form-select col-md-12 " name="Designation" aria-label="Default select example" id='role'>
                            <option selected>Student</option>
                            <option value="1">Institutional User</option>
                        </select>
                    </div>
                    {/* <label for="inputDesignation">Designation</label>
                <select class="form-select" aria-label="Default select example">
                    <option value="1">Student</option>
                    <option value="2">Institutional User</option>
                </select> */}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Email address</label>
                        <input type="email" name="Email"id="form2Example1" className="form-control"  />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example2">Password</label>
                        <input type="password" name="Password"id="form2Example2" className="form-control" />
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger btn-block mb-4" id='loginbtn' >Sign in</button>
                </form>
            </div>
        </>
    )
}
