import express from 'express';
import {add, sub} from './math.js';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world! ExpressJs!');
    console.log('Addition:', add(5, 3));
    console.log('Subtraction:', sub(5, 3));
})

app.listen (port, () => {
    console.log(`server is  listening on http://localhost:${port}`);
});