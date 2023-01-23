//use of middleware..   

const express = require("express");
const app = express();


const reqFilter=(req,res,next)=>{
    if(!req.query.age)
    {
        res.send("Under Age..");
    }
    else{
        next();
    }
}

app.use(reqFilter);

    
app.get('/',(req,res)=>{
    res.send("hello from home page");
});

app.get('/about',(req,res)=>{
    res.send("hello from about page");
});

app.get('/contact',(req,res)=>{
    res.send("hello from contact page");
});

app.listen(8000);