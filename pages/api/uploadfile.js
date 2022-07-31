import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'
import { MongoClient } from "mongodb";

var mv = require('mv');


export const config = {
    api: {
       bodyParser: false,
    }
};


export default async function handler(req, res) {
  if (req.method === "POST") {
//   const data2 = req.body;
//   console.log(data2)
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()
    var ObjectID = require('mongodb').ObjectID; 

   form.parse(req, async (err, fields, files) =>  {
         if (err) return reject(err)
         console.log(fields, files)
         console.log(files.file.filepath)
         var oldPath = files.file.filepath;
         var id = fields.id
         console.log(id)
         
         var newPath = `./public/${files.file.originalFilename}`;
         mv(oldPath, newPath, function(err) {
     });
        

     

     const client = await 
     MongoClient.connect(
       "mongodb://localhost:27017/HomelyVirtual");
     const db = client.db();
     const yourCollection = db.collection("Products");
     const result = await yourCollection.updateOne( { '_id': ObjectID(id) },
     {
       $set: {
         image : newPath
       }
     });
     console.log(result)
     client.close()
     console.log("inserted successfully")

        res.status(200).json({message : "inserted Succefully"})
    })
 })


}

}