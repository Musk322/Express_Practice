//Router level middelware:

import express from "express";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 3000;

// const customeMiddelwareQuery = (req,res,next)=>{
//     console.log("Query:" ,req.query.age);
//     if(!req.query.age || req.query.age<18){
//         res.send('<h1> You are not allowed</h1>');
//     }else{
//         next();
//     }
// }

// const customeMiddelwareURL = (req,res,next) =>{
//     console.log('URL:', req.url);
//     next();
// }

app.use((req,res,next)=>{
    console.log('Request URL:', req.url);
})

app.use('/users', userRoutes);

app.get('/', (req,res)=>{
    res.send('<h1> Hello, home!</h1>');
});

// app.get('/login',customeMiddelwareQuery, customeMiddelwareURL, (req,res)=>{
//     res.send('<h1>Hello!, Login</h1>');
// });

// app.get('/users',customeMiddelwareQuery, (req,res)=>{
//     res.send('<h1>Hello!, Users</h1>');
// });


// app.get('/products',customeMiddelwareURL, (req,res)=>{
//     res.send('<h1>Hello!, products</h1>');
// });

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});