const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "e-com";
const collection = "product";

async function connect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection(collection);
}

// connect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });
// });


// modern technique
const main = async () =>{
    let data = await connect();
    data =await data.find().toArray();
    console.log(data);
}



// main();
module.exports = connect;