const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    console.log("request given by user is : ",req.query.name)
    res.send(req.query.name);
});
app.get('/about',(req,res)=>{
    res.send("hello this About page");
});
app.get('/help',(req,res)=>{
    res.send("hello this help page");
});

app.listen(2000);