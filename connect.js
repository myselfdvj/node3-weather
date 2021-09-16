var express = require('express')
var path = require('path');

var mongoc = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
mongoc.connect(url,function(err,db){
    if(err) throw err
    else
    {
        console.log("connected databse")
        
    }
})