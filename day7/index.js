import express from "express";
import path from "path";
const app = express();
const PORT = 3000;

const filePath = path.resolve();

app.get("/", (req,res) =>{
    console.log(filePath);
    res.sendFile(filePath + "/pages/home.html");
});

app.get("/about", (req,res)=>{
    res.send("<h1> About Page</h1> <p>This is the About Page.</p>");
});

app.use((req,res)=>{
    res.status(404).sendFile(filePath + "/pages/404.html");
})

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});