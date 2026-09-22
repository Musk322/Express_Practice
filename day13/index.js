import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    {id:1, name:"Muskan", age:18},
    {id:2, name:"Sandhaya", age:16},
    {id:3, name:"Harshi", age:20},
    {id:4, name:"Diksha", age:19}
]

app.get('/users',(req,res)=>{
    res.json(users);
});

app.post('/users',(req,res)=>{
    const newUser = {id : Date.now(), ...req.body};
    users.push(newUser);
    res.status(201).json(newUser);
})

app.put('/users/:id', (req,res)=>{
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === userId);

    if(index === -1){
        return res.status(404).json({message:'user not found'});
    }

    users[index] = {id : userId, ...req.body};
    res.json(users[index]);
})

app.patch('/users/:id',(req,res)=>{
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === userId);

    if(index === -1){
        return res.status(404).json({message: 'user not found'});
    }
    users[index] = {...users[index],...req.body};
    res.json(users[index]);
});

app.delete('/users/:id',(req,res)=>{
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === userId);

    if(index === -1){
        return res.status(404).json({message:'user not found'});
    }
    users.splice(index,1);
    res.json({message:'user deleted successfully'});
});

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});