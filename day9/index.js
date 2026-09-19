//GET AND POST API

import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello Home Page from ExpressJS!');
});

app.get('/about', (req,res)=>{
    res.send("Hello About Page from ExpressJS!");
});

app.get('/search', (req,res)=>{
    const{item} = req.query;
    res.send(`You Searched for: ${item}`);
});

app.post('/users', (req,res)=>{
    const{name,email} = req.body;
    res.send(`user ${name} with email ${email} created successfully`);
});

app.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`);
})