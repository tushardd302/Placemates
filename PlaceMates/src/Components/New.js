import React from 'react'
import Navbar from './Navbar'
import student from './images/student.png'
import company from './images/company.png'
import { Link } from 'react-router-dom'
import StudentEntry from './StudentEntry'

export default function New() {
    return (
        <>
            <Navbar></Navbar>

            <div className="entry">

                <div className="row newRow" >
                    <div className="newStudent col newCol">
                        <img src={student} style={{ width: '200px', height: '200px' }} alt="no img" id='Img' />
                        <br />
                        <button className="btn my-2 my-sm-0 mx-1 entrybtn" >
                            <Link to="/StudentEntry" id='entries'>Add Student</Link>
                        </button>
                    </div>
                    <div className="newCompany col newCol ">
                        <img src={company} style={{ width: '200px', height: '200px' }} alt="no img" id='Img' />
                        <br />
                        <button className="btn my-2 my-sm-0 mx-1 entrybtn" type="submit">
                            <Link to="/CompanyEntry" id='entries'>Add Recruiter</Link>
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}
