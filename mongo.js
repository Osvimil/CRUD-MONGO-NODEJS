var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/Alumnos';

MongoClient.connect(url,function(error,db){
  if(error){
    console.log(error);
  }else{
    console.log('conectado a: ',url);
    db.close();
  }
});
