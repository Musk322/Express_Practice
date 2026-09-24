import express from "express";
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello Page!");
});

app.get('/fail',(req,res,next)=>{
    const err = new Error("Somenthing went wrong!");
    err.statusCode = 400;
    next(err);
});

//ERROR HANDLING MIDDELWARE

app.use((err,req,res,next)=>{
    console.log("Error caught by middelware:",err.message);
    res.status(err.statusCode||500).JSON({
        sucess:false,
        message:err.message||'Internal Server Error'
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});