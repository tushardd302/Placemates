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

 app.post("/placemates",(req,res)=>{
     
     const q="INSERT INTO signup (`id`,`FirstName`,`LastName`,`Designation`,`CollegeName`,`Branch`,`Email`,`Password`) VALUES (?)";
     
     const values=[
        req.body.id,
        req.body.FirstName,
        req.body.LastName,
        req.body.Designation,
        req.body.CollegeName,
        req.body.Branch,
        req.body.Email,
        req.body.Password,
       ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.send(err);
        return res.json(data);
    });
})

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