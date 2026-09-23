//Build in Middelware:
import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.post('/api/user', (req,res)=>{
    console.log('JSON Body:', req.body);
    res.json({msg:'JSON Data Recieved',data:req.body});
});

app.post('/register', (req,res)=>{
    console.log('Form Body:', req.body);
    res.send(`Thanks,${req.body.username}! Your Registration is OfflineAudioCompletionEvent.`)
});
app.get('/hello', (req,res)=>{
    res.send('Hello from the Express Server!');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});