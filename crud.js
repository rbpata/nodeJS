//CRUD stand for Create,Read,update,delete


const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname,"CRUD");
const filepath = `${dirpath}/apple.txt`;

// fs.writeFileSync(filepath,"It is a Fruit.");

// fs.readFile(filepath,'utf-8',(err,data)=>{
//     console.log(data);
// });

// fs.appendFile(filepath,"it is a king of fruits.",(err)=>{
//     if(!err){
//         console.log("Done");
//     }
// })

// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
//     console.log("Done");
// });

// fs.unlinkSync(`${dirpath}/fruit.txt`);


// <!-- Buffer is temporary mamory location