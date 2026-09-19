import express from "express";
import path from "path";
const app = express();
const PORT = 3000;
const filePath = path.resolve();

app.use(express.static('public'));

app.get('/', (req,res) =>{
    console.log(filePath);
    res.sendFile(filePath + "/index.html");
});

app.get("/about", (req,res) =>{
    res.send('<h1>About Page</h1><p>This is about page. </p>');
});

app.use((req,res) =>{
    res.status(404).sendFile(filePath + "/pages/404.html");
});

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});