const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world! ExpressJs tutorial');
})
app.get ('/about', (req, res) => {
    res.send('Hello about ExpressJs!');
})
app.get ('/profile', (req, res) => { 
    res.send('Hello profile ExpressJs!');
})

app.listen (port,()=> {
    console.log(`server is listening on port http://localhost:${port}`);

})