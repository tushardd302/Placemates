import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'

export default function StudentEntry() {
    const [data,setData]= useState({
        FirstName:"",
        LastName:"",
        Branch:"",
        Batch:"",
        Designation:"",
        Company:"",
        Package:"",
        ContactNo:"",
        Email:"",
        Url:"",
    })

    const handleChange=(e)=>{
        setData(prev=>({ ...prev, [e.target.name] : e.target.value}));
        // console.log(data);
    }
console.log(data);
    const handlClick=async e=>{
        e.preventDefault()
        try{
            // const newdata = {
            //     FirstName:data.FirstName,
            //     LastName:data.LastName,
            //     Designation:data.Designation,
            //     id:data.id,
            //     college_name:data.college_name,
            //     branch:data.branch,
            //     email:data.email,
            //     password:data.password,
            // }
    
            // console.log(newdata);
    
             await axios.post("http://localhost:8700/ll",data);
             alert("data storedd");
            // .then((result)=>{
            //     if(result.data.Status === 'Invalid'){
            //         alert('Invalid User')
            //     }
            //     else{
            //         history('/signup');
            //     }
            // }); 
        }catch(err){
            console.log(err);
        }
        
    }
    return (
        <>
            <Navbar />
            <div className="StudentRegistration">
                <div id="head">
                    <h1>New Student Registration</h1>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="inputFirstName">First Name</label>
                        <input type="text" name="FirstName" className="form-control" placeholder="First name" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label for="inputlastName">Last Name</label>
                        <input type="text" name="LastName" className="form-control" placeholder="Last name" onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="inputBrach">Brach</label>
                        <input type="text" name="Branch" className="form-control" placeholder="Brach" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label for="inputBatch">Batch</label>
                        <input type="number" name="Batch" className="form-control" placeholder="Batch" onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="inputRole">Designation</label>
                        <input type="text" name="Designation"className="form-control" placeholder="Role" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label for="inputCompany">Company</label>
                        <input type="text" name="Company" className="form-control" placeholder="Company" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label for="inputPackage">Package</label>
                        <input type="text" name="Package" className="form-control" placeholder="Package in LPA" onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="inputContact">Contact No</label>
                        <input type='text' name="ContactNo"className="form-control" placeholder="Contact No" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label for="inputCompany">Email</label>
                        <input type="text" name="Email" className="form-control" placeholder="Email" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label for="inputPackage">Social Link</label>
                        <input type="text" name="Url"className="form-control" placeholder="Ex.LinkedIn" onChange={handleChange}/>
                    </div>
                </div>
                <div className="add">
                    <button type="submit" className="btn btn-danger mx-1 my-3" id='addBtn' onClick={handlClick}>Add</button>
                </div>
            </div>
        </>
    )
}
