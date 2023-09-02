import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logonobg from './images/logonobg.png'



export default function Navbar() {
    const role = localStorage.getItem("designation");
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">

                <img src={logonobg} style={{ width: '30px' }} alt="" />
                <Link className="navbar-brand" to="/" id="mainName">
                    <span style={{ color: '#FAD744' }}>Place</span>
                    <span style={{ color: '#2B3252' }}>Mates</span>
                </Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" id='items2'>Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link " to="/about" id='items2'>About Us</Link>
                        </li>
                        { role==="Institutional User"&&
                        <li className="nav-item ">
                            <Link className="nav-link " to="/new" id='items2'>New Entry</Link>
                        </li>
                        }
                        { role &&
                        <>
                        <li className="nav-item ">
                            <Link className="nav-link " to="/recruiters" id='items2'>Recruiters</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link " to="/placements" id='items2'>Placements</Link>
                        </li>
                        </>
}
                        {/* <li className="nav-item ">
                            <Link className="nav-link " to="#" id='items2'>Contact</Link>
                        </li> */}
                    </ul>
                    { role===null ? 
                    <form className="form-inline my-2 my-lg-0 myclass">
                        <button className="btn my-2 my-sm-0 mx-1" type="submit">
                            <Link to="/login" className='registration'>Login</Link>
                        </button>
                        <button className="btn my-2 my-sm-0 mx-1" type="submit">
                            <Link to="/signup" className='registration'>Sign Up</Link>
                        </button>
                    </form> :
<form className="form-inline my-2 my-lg-0 myclass">
                    
                        <button className="btn my-2 my-sm-0 mx-1" type="submit" onClick={()=>{localStorage.removeItem("designation"); alert("Logged Out Successfully")}}>
                            <Link  className='registration'>Logout</Link>
                        </button>
                    </form>
}

                </div>
            </nav>
        </>
    )
}
