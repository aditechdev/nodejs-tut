const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

const database = "e-comm";

const client =new  MongoClient(url);

async function dbConnect() {
    let results = await client.connect();
    let db = results.db(database);
    return db.collection("product");
   
}

module.exports = dbConnect;