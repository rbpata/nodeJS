// const MongoClient = require('mongodb').MongoClient; old mathod
const {MongoClient} = require('mongodb'); //new mathod
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url); 

async function getData()
{
    let result = await client.connect();
    let db = result.db('e-com');
    let collection = db.collection('product');
    let res = await collection.find({}).toArray();
    console.log(res);
}
getData();
