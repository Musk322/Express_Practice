//DYNAMIC ROUTES + CONDITIONS:
import express from "express";
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

//dummy data
const users = [
    {name:"Muskan", id:1, role:"Admin"},
    {name:"Harshi", id:2, role:"Editior"},
    {name:"Diksha", id:3, role:"viewer"}
]

//DYNAMIC ROUTE
app.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find(u => u.id === parseInt(id));
    res.render('user',{user});
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});