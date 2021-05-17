const express = require('express');
const app = express();

//give the server something to display
//first parameter is the location of the get request
//second parameter is a callback function with request and response
app.get("/", (req, res) => {
    res.send('<h1>Hello, Cleaveland</h1>')
});

app.listen(3000);
/// ^bare bones of an express server


