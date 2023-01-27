const connect = require('./mongo_promises');
const dbConnect = require('./mongo_promises');

const update =async () =>{

    let db = await connect();
    let result = db.updateOne(
        {name:"13 pro max"},{$set :{name : "14 pro max",price : 880}} 
    );
    if((await result).acknowledged)
    {
        console.log(result);
        console.log("Updated SuccessFully..");
    }
    }

update();