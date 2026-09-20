// Application-Level middelware:

import express from "express";
const app = express();
const PORT = 3000;

const loggerMiddleware = (req,res,next)=>{
    console.log(`[${new Date().toLocaleDateString()}]) ${req.method} $ {req.url}`);
    next();
}
app.use(loggerMiddleware);

app.use('/admin',(req,res,next)=>{
    console.log('Admin section Accessed');
    next();
});

app.get('/',(req,res)=>{
    res.send('Hello Home!');
});

app.get('/about',(req,res)=>{
    res.send('Hello About Page!');
});

app.get('/admin/dashboard',(req,res)=>{
    res.send('Hello Admin Page!');
});

app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
});


