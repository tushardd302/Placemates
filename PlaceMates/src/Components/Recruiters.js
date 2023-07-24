import React from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Recruiters() {

//    const data=0;
    
    
        const [dataa,setData]  = useState([])

        useEffect(() =>{
            const fetchAllCompany = async () => {
                try{
                    const res = await axios.get("http://localhost:8700/co/")
                    setData(res.data);
                }
                catch(err){
                    console.log(err)
                }
            }
            // axios.get("http://localhost:8700/co/").then(res => {
            //     setColumns(Object.keys(res.data[0]))
            //     setRecords[res.data]
            // })

            fetchAllCompany()
        }, [])
    

    

        
    // const displayCompany=async e=>{
    //     e.preventDefault()
    //     try{

    //         var data1 = await axios.get("http://localhost:8700/co/");
    //         alert("hello");
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    // displayCompany();
    // // const data1 = axios.get("http://localhost:8700/co/");
    // // console.log(data1);

    return (
        <>
            <Navbar></Navbar>
            <div className='box'>
                {dataa.map(data1=>(
                    <div class="gridContainer">
                    <div class="row gridRow">
                        <div class="col gridCol  my-2">
                            <h2 style={{color:'red'}}><strong>{data1.companyname}</strong></h2>  
                        </div>
                    </div>
                    <div class="row gridRow">
                        <div class="col gridCol  my-2">
                            <h5>Designation</h5>
                            <h6>{data1.role}</h6>
                        </div>
                        <div class="col gridCol  my-2">
                            <h5>Package</h5>
                            <h6>{data1.package}</h6>
                        </div>
                        <div class="col gridCol  my-2">
                            <h5>Branch</h5>
                            <h6>{data1.branch}</h6>
                        </div>
                    </div>
                    <div class="row gridRow">
                        <div class="col gridCol  my-2">
                            <h5>Criteria*</h5>
                        </div>
                    </div>
                    <div class="row gridRow">
                        <div class="col gridCol  my-2">
                            <h5>SSC Marks</h5>
                            <h6>{data1.ssc}</h6>
                        </div>
                        <div class="col gridCol  my-2 ">
                            <h5>HSC Marks</h5>
                            <h6>{data1.hsc}</h6>
                        </div>
                        <div class="col gridCol  my-2">
                            <h5>Graduation Marks</h5>
                            <h6>{data1.graduation}</h6>
                        </div>
                    </div>
                    <div class="row gridRow">
                        <div class="col gridCol  my-2">
                            <h5>Required Skills</h5>
                            <h6>{data1.skills}</h6>
                        </div>
                        <div class="col gridCol  my-2">
                            <h5> Location</h5>
                            <h6>{data1.location}</h6>
                        </div>
                    </div>
                    <div class="row gridRow">
                        <div class="col gridCol  my-2">
                            <h5>Job Description</h5>
                            <h6>{data1.jobdescription}</h6>
                        </div>
                    </div>
                </div>
                ))}                
            </div>

        </>
    )
}
