const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname,'files');
// fs.writeFileSync(dirpath+"/hello.txt","Hello from This side..");
// fs.unlinkSync("hello.txt");
// fs.unlinkSync("fileshello.txt");
fs.readdir(dirpath,(err,data)=>{
    
    console.log(data);
    // console.warn(data[0]);

    //or if there is an array then

    // data.forEach((item) =>{
    //     console.log("file name is : ",item);
    // });
});