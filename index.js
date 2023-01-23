//demonstrate the use of http server and arrow function..

const http = require("http");


http.createServer((req,res)=>{
    res.write("Hello World..");
    res.end();
}).listen(400)

// function DataControl(req,res){
//     res.write("<h1>hello</h1>");
//     res.end();
// }
// http.createServer(DataControl).listen(400);
