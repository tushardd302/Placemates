import React from 'react'
import Navbar from './Navbar'
import Linkedin from './images/Linkedin.png'
import email from './images/email.png'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


export default function PlacedStudents() {
    const role = localStorage.getItem("designation");
    const [dataa,setData]  = useState([])
       
        useEffect(() =>{
            const fetchAllStudents = async () => {
                try{
                    const res = await axios.get("http://localhost:8700/ll/")
                    setData(res.data);
                }
                catch(err){
                    console.log(err)
                }
            }

            fetchAllStudents()
        }, [])

    const handleDelete=async(email)=>{
        try{
            alert(email)
            const res = await axios.delete("http://localhost:8700/deleteS/",{ data: { email } })
            alert("success")

        }catch(e){
            console.log(e)
        }
    }
    return (
        <>
            <Navbar></Navbar>
            <div className='box'>
            {dataa.map((data1)=>(
                <div class="gridContainerStudent">
                   { role==="Institutional User"&& <button id='delete' onClick={() => handleDelete(data1.Email)}>Delete</button>}
                    <div class="row gridRow">
                        <div class="col gridCol  my-2">
                            <h5 id='names'>{data1.FirstName} &nbsp;</h5>
                            <h5 id='names'>{data1.LastName}</h5>  
                        </div>
                    </div>
                    <div class="row gridRow">
                        <div class="col gridCol  my-2">
                            <h5>Designation</h5>
                            <h6>{data1.Designation}</h6>
                        </div>
                        <div class="col gridCol  my-2">
                            <h5>Company Name</h5>
                            <h6>{data1.Company}</h6>
                        </div>
                        <div class="col gridCol  my-2">
                            <h5>Package</h5>
                            <h6>{data1.Package}LPA</h6>
                        </div>
                    </div>
                    <div class="row gridRow">
                        <div class="col gridCol  my-2">
                            <h5>Branch</h5>
                            <h6>{data1.Branch}</h6>
                        </div>
                        <div class="col gridCol  my-2">
                            <h5> Batch</h5>
                            <h6>{data1.Batch}</h6>
                        </div>
                    </div>
                    <div class="row gridRow">
                        <div class="col gridCol  my-2">
                            <h5>Contact No</h5>
                            <h6>{data1.ContactNo}</h6>
                        </div>
                        <div class="col gridCol  my-2">
                            <h5>Email</h5>
                            <h6>{data1.Email}</h6>
                        </div>
                        <div class="col gridCol  my-2logo">
                            <a href={data1.Url} target='_blank'>
                                <img src={Linkedin} alt="no img" style={{width:'40px'}} />
                            </a>
                        </div>
                    </div>
                       
                </div>
                ))}    
            </div>
        </>
    )
}
