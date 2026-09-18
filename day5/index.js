import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req,res) =>{
    res.send("<h1>Welcome to Home page </h1>");
})

app.get("/login", (req,res) => {
    res.send(
        `<form action = "/submit" method = "post">
            <input type = "text" name = "username" placeholder = "Username">
            <input type = "password" name = "password" placeholder = "Password">
            <button>Login</button>
        </form>`
    );
})

app.post("/Submit", (req,res) =>{
    res.send("<h1> Submit Page </h1>");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});