import express from "express";
import morgan from "morgan";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(cors());

const limiter = rateLimit({
    windowMs : 15 * 60 * 1000,
    max : 5,
    message : 'Too many requests from this IP, Please try again after 15 minutes',
    standardHeaders : true,
    legacyHeaders : false
})

app.use('/',limiter);
app.get('/', (req,res)=>{
    res.send('Hello 3rd party middelware');
});

app.get('/api/data', (req,res)=>{
    res.json({msg:'Sample API Response'});
});

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT http://localhost:${PORT}`);
});