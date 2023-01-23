const express = require("express");
const path = require("path");

const app = express();

const dirpath = path.join(__dirname,"Public");

app.get('/',(req,res)=>
{
    res.sendFile(`${dirpath}/home.html`);
});

app.get('/about',(req,res)=>
{
    res.sendFile(`${dirpath}/about.html`);
});

app.get('*',(req,res)=>
{
    res.sendFile(`${dirpath}/404.html`);
});

app.listen(2000);
