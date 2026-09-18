import express from "express";
import path from "path";
const app = express();
const PORT = 3000;

app.get("/", (req,res) =>{
    console.log(path.resolve("index.html"));
    const filePath = path.resolve("index.html");
    res.sendFile(filePath);
})
app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});