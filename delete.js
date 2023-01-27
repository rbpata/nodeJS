const connect = require('./mongo_promises');

const del =async () =>{

    const db = await connect();
    const result = db.deleteOne({
        brand : "motog2"
    })

    if((await result).acknowledged)
    {
        console.log(result);
        console.log("Deleted..");
    }    
}

del();