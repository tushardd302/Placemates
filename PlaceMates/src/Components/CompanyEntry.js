import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'

export default function CompanyEntry() {
    const [data,setData]= useState({
        companyname:"",
        role:"",
        package:"",
        branch:"",
        ssc:"",
        hsc:"",
        graduation:"",
        skills:"",
        location:"",
        jobdescription:"",
    })

    const handleChange=(e)=>{
        setData(prev=>({ ...prev, [e.target.name] : e.target.value}));
        // console.log(data);
    }
// console.log(data);
    const handlClick=async e=>{
        e.preventDefault()
        try{
    
             await axios.post("http://localhost:8700/co",data);
             alert("Data Stored Successfully");
           
        }catch(err){
            console.log(err);
        }
        
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="CompanyRegistration">
                <div id="head">
                    <h1>New Recruiters Registration</h1>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="inputRecruiterName">Recruiter's Name</label>
                        <input type="text" name="companyname"className="form-control" placeholder="Recruiter name" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label for="inputRole">Role</label>
                        <input type="text" name="role" className="form-control" placeholder="Role" onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="inputPackage">Package</label>
                        <input type="text" name="package" className="form-control" placeholder="Package in LPA" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label for="inputBrach">Brach</label>
                        <input type="text" name="branch"className="form-control" placeholder="Brach" onChange={handleChange}/>
                    </div>
                </div>
                <div>
                    Criteria*
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="input10th">SSC Marks</label>
                        <input type="text" name="ssc"className="form-control" placeholder="in percentage" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label for="input12th">HSC Marks</label>
                        <input type="text" name="hsc" className="form-control" placeholder="in percentage" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label for="inputGraduationMarks">Graduation Marks</label>
                        <input type="text" name="graduation"className="form-control" placeholder="in CGPA" onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="inputSkills">RequiredSkills</label>
                        <input type="text" name="skills"className="form-control" placeholder="Skills" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label for="inputLocation">Location</label>
                        <input type="text" name="location" className="form-control" placeholder="Location" onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="inputJobDescription">Job Description</label>
                        <br />
                        <textarea id="Description" name="jobdescription" rows="2" cols="50" onChange={handleChange}></textarea>
                    </div>
                </div>

                <div className="add">
                    <button type="submit" className="btn btn-danger mx-1 my-3" id='addBtn' onClick={handlClick}>Add</button>
                </div>
            </div>
        </>
    )
}
