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
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/pre", (req, res)=>{
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    
})

router.get("/:nombre", (req,res)=>{
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    db = client.db(dbName);
    const collection = db.collection("pre");
    collection.find({name: req.params.nombre}).toArray((err,result)=>{
      res.json(result);
    });
    client.close();
  });

})

router.post("/pre",(req,res)=>{
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    db = client.db(dbName);
    const collection = db.collection("pre");
    collection.insert({
      name:req.body.name,
      hobbies:req.body.hobbies,
      age:req.body.age,
      sex: req.body.sex,
      weight: req.body.weight
    }).then((result)=>{
      res.json(result);
    }).catch(err=>{
      res.json({
        error:err
      });
    });
    client.close();
  });
})

module.exports = router;
