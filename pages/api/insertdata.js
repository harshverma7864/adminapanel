import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'
import { MongoClient } from "mongodb";

var mv = require('mv');


// export const config = {
//     api: {
//        bodyParser: false,
//     }
// };


export default async function handler(req, res) {
  if (req.method === "POST") {
  const data2 = req.body;
  // console.log(data2)
  const client = await 
  MongoClient.connect(
    "mongodb://localhost:27017/HomelyVirtual");
  const db = client.db();
  const yourCollection = db.collection("Products");
  const result = await yourCollection.insertOne(data2);
  
  // console.log(data2);
  
  client.close();
  res.status(201).json({message : "hello sr" , id : result.insertedId});
 
  }
}




 





