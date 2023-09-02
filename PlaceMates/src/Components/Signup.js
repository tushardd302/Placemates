import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';
import axios from 'axios';


export default function Signup() {

    const [data,setData]= useState({
        id:"",
        FirstName:"",
        LastName:"",
        Designation:"",
        CollegeName:"",
        Branch:"",
        Email:"",
        Password:"",
    })

    const handleChange=(e)=>{
        setData(prev=>({ ...prev, [e.target.name] : e.target.value}));
        console.log(data,"aaaaa");
    }


    const handlClick=async(e)=>{
        e.preventDefault()
        try{
            const newdata = {
                firstName:data.FirstName,
                lastName:data.LastName,
                designation:data.Designation,
                id:data.id,
                college_name:data.CollegeName,
                branch:data.Branch,
                email:data.Email,
                password:data.Password,
            }
            const resp= await axios.post("http://localhost:8700/signup",newdata);
            alert("Signed Up Successfully")
            
        } catch(e){
            console.log(e,"Error")
        }
    }

   
    return (
        <>
            
            <Navbar></Navbar>
            <div className="form">
                <div className='leftside'>
                    <div className='lefthead'>
                        <h1>
                            Hello Friend!
                        </h1>
                    </div>
                </div>
                <form className='rightside'>
                    <div className="heading" >
                        <h1>Sign Up</h1>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="inputFirstName">First Name</label>
                            <input type="text" name="FirstName" className="form-control" placeholder="First name" 
                            onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label htmlFor="inputlastName">Last Name</label>
                            <input type="text" name="LastName" className="form-control" placeholder="Last name"
                            onChange={handleChange}  />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputDesignation">Designation</label>
                            <br />
                            <select className="form-select col-md-12" name="Designation" aria-label="Default select example"
                                onChange={handleChange} >
                                <option defaultValue={'Student'}>Student</option>
                                <option value="Institutional User">Institutional User</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputID">Employee Id</label>
                            <input type="number" name="id"className="form-control" id="inputID" placeholder="ID" 
                            onChange={handleChange}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCollege">College Name</label>
                            <input type="text" name="CollegeName" className="form-control" id="inputCollege" placeholder="College Name"
                            onChange={handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputBrach">Brach</label>
                            <input type="text" name="Branch" className="form-control" id="inputBrach" placeholder="Brach"
                            onChange={handleChange}  /> 
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="text" name="Email" className="form-control" id="inputEmail4" placeholder="Email" 
                            onChange={handleChange}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="text" name="Password" className="form-control" id="inputPassword4" placeholder="Password" 
                                onChange={handleChange} />
                        </div>
                        {/* <button type="reset" className="btn btn-danger mx-1">Reset</button> */}
                        <button type="submit" className="btn btn-danger mx-1" onClick={handlClick}>Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}
