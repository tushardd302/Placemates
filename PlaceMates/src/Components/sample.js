import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
import { Link ,NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";


//import { useNavigate } from "react-router-dom";

// function clickMe(){
//     window.location='./location';
// }
//global.detail={"suyash":"dighe"};
const Main = () =>{
    const[address,setaddress]=useState({
        ID:"",
        FirstName:"",
        LastName:"",
        Designation:"",
        CollegeName:"",
        Branch:"",
        Email:"",
        Password:"",

      })

   
      
      const handleChange = (e)=>{
        setaddress(prev=>({...prev,[e.target.name]:e.target.value}))
      };

      
    //   const navigate= useNavigate();
      //const[data,setdata]=useState([]);
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
    
             axios.post('https://localhost:8700/placemates',setData);
            // .then((result)=>{
            //     if(result.data.Status === 'Invalid'){
            //         alert('Invalid User')
            //     }
            //     else{
            //         history('/signup');
            //     }
            // }); 
        }catch(err){

        }
    }
      

//       const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchAllBooks = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/books");
//         setBooks(res.data);
        
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllBooks();
//   }, []);

//   console.log(books);


      

    return(
    
        // <!-- wrapper -->
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
                        <input type="text" name="ID"className="form-control" id="inputID" placeholder="ID" 
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
                        <input type="email" name="Email" className="form-control" id="inputEmail4" placeholder="Email" 
                        onChange={handleChange}  />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" name="Password" className="form-control" id="inputPassword4" placeholder="Password" 
                            onChange={handleChange} />
                    </div>
                    <button type="reset" className="btn btn-danger mx-1">Reset</button>
                    <button type="submit" className="btn btn-danger mx-1" onClick={handlClick}>Sign Up</button>
                </div>
            </form>
        </div>

        </>

    );
}

export default Main;