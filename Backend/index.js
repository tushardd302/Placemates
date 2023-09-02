import express from "express"
import mysql from "mysql"
import cors from "cors";
const app= express()
app.use(cors())
app.use(express.json())
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'placement_management_system'
})
app.get("/placemates",(req,res)=>{
    res.json("hello")
})

// signup page

 app.post("/signup",(req,res)=>{
    res.json("hello")
   
     const q="INSERT INTO signup (`id`,`firstName`,`lastName`,`designation`,`college_name`,`branch`,`email`,`password`) VALUES (?)";
     
     const values=[
        req.body.id,
        req.body.firstName,
        req.body.lastName,
        req.body.designation,
        req.body.college_name,
        req.body.branch,
        req.body.email,
        req.body.password,
       ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.send(err);
        return res.json(data);
    });
})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const q = "SELECT * FROM signup WHERE email = ?";
    
    db.query(q, [email], (err, results) => {
        if (err) {
            return res.send(err);
        }
        
        if (results.length === 0) {
            return res.status(401).json({ message: "Email not found" });
        }
        
        const user = results[0];
        
        if (user.password !== password) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        
        return res.json({ message: "Login successful", user: user });
    });
});
// student entry
app.post("/ll",(req,res)=>{
     
    const q="INSERT INTO studententry (`FirstName`,`LastName`,`Branch`,`Batch`,`Designation`,`Company`,`Package`,`ContactNo`,`Email`,`Url`) VALUES (?)";
    
    const values=[
       req.body.FirstName,
       req.body.LastName,
       req.body.Branch,
       req.body.Batch,
       req.body.Designation,
       req.body.Company,
       req.body.Package,
       req.body.ContactNo,
       req.body.Email,
       req.body.Url,
      ];

   db.query(q,[values],(err,data)=>{
       if(err) return res.send(err);
       return res.json(data);
   });
})

app.delete("/deleteS", (req, res) => {
    const emailToDelete = req.body.email;
    console.log(emailToDelete,"cccccccccccc")
    const q = "DELETE FROM studententry WHERE Email = ?";
    
    db.query(q, [emailToDelete], (err, result) => {
        if (err) {
            return res.send(err);
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Student not found" });
        }
        
        return res.json({ message: "Student deleted successfully" });
    });
});
// company entry

app.post("/co",(req,res)=>{
     
    const q="INSERT INTO companyentry (`companyname`,`role`,`package`,`branch`,`ssc`,`hsc`,`graduation`,`skills`,`location`,`jobdescription`) VALUES (?)";
    
    const values=[
       req.body.companyname,
       req.body.role,
       req.body.package,
       req.body.branch,
       req.body.ssc,
       req.body.hsc,
       req.body.graduation,
       req.body.skills,
       req.body.location,
       req.body.jobdescription,
      ];

   db.query(q,[values],(err,data)=>{
       if(err) return res.send(err);
       return res.json(data);
   });
})

app.get("/co",(req,res)=>{
    //const location=req.params.pickuplocation;
    const q="select * from companyentry";
    db.query(q,(err,data)=>{
        if(err) return res.json("err");
        return res.json(data);
    })
})

app.get("/co:",(req,res)=>{
    //const location=req.params.pickuplocation;
    const q="select * from companyentry";
    db.query(q,(err,data)=>{
        if(err) return res.json("err");
        return res.json(data);
    })
})

app.get("/ll",(req,res)=>{
    //const location=req.params.pickuplocation;
    const q="select * from studententry";
    db.query(q,(err,data)=>{
        if(err) return res.json("err");
        return res.json(data);
    })
})

app.listen(8700,()=>{
    console.log("Connected backend")
})