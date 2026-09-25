import express from "express";
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.set("view engine",'ejs');

app.get('/posts',async(req,res)=>{
    try{
        const response = await fetch ('http://jsonplaceholder.typicode.com/posts')
        const posts = await response.json();
        console.log(posts);
        res.render('posts', {posts});
    }catch(error){
        res.status(500).send('Error fetching posts');
    }
});

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});