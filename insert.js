var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/Alumnos';

MongoClient.connect(url,function(error,db){
  if(error){
    console.log(error);
  }else{
    console.log('conectado a: ',url);

    var collection = db.collection("manzanas");
    var documento1 = {nombre:"oswaldo",edad:23};
    var documento2 = {nombre:"paps",edad:12};
    var documento3 = {nombre:"juan",edad:29};

    collection.insert([documento1,documento2,documento3],function(error,resultado){
      if(error){
        console.log(error);

      }else{
        console.log("%d documentos insertados",resultado.insertedCount);
      }
      db.close();
    });



  }

});
