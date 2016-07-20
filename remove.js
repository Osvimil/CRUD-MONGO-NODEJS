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

    collection.remove({'nombre':'juan'},function(error,resultado){
      if(error){
        console.log(error);
      }else{
        console.log('$s',resultado);
      }
      db.close();
    });
  }

});
