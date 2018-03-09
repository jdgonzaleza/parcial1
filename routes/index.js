var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://admin:admin@ds259778.mlab.com:59778/mydb';
//const url = "mongodb://localhost:27017/newDataBase"
// Database Name
const dbName = 'mydb';

// Use connect method to connect to the server


/* GET home page. */


router.get("/stats", (req,res)=>{
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    db = client.db(dbName);
    const collection = db.collection("parcial");
    collection.find().toArray((err,result)=>{
      res.json(result);
    });
    client.close();
  });

})

router.post("/stats",(req,res)=>{
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    db = client.db(dbName);
    const collection = db.collection("parcial");
    var date = new Date();
    console.log(req.body.name1, req.body.name2);
    collection.insert({
      name1:req.body.name1,
      name2:req.body.name2,
      ganador: req.body.ganador,
      date:date
    }).then((result)=>{
      res.json(result);
    }).catch(err=>{
      res.json({
        error:err
      });
    });
    client.close();
  });
});

router.get("/random", (req, res)=>{
   MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    db = client.db(dbName);
    const collection = db.collection("parcial");
        collection.find().toArray((err,result)=>{
      res.json(result);
    });
    client.close();
  });
})


module.exports = router;
