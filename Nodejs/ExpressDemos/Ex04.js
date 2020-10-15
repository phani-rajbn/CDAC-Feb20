//This example shows the demo on how to connect to mongodb and extract the data from the database and also handle errors.

const mongo = require("mongodb").MongoClient;//Object that is the client for the mongodb server.
const url = "mongodb://localhost/exampledb";
let database;
//This is a custom function that is created to display error message using lambda expression....
errorHandler = (err) => {
    if(err)
        console.log(err.message);
}


mongo.connect(url, (err, mongoClient)=>{
    //This callback fun will be called by mongo after the connection is made to the url....
    errorHandler(err);
    //console.log(mongoClient);
    database = mongoClient.db("exampledb");//This function returns the reference of the databaes U have connected
    database.collection("players").find().toArray((e, r)=>{
        //console.log(r);//Result obtained from toArray that returns an array....
        r.forEach((value, index)=>console.log(`${value.name} plays for ${value.sport}`));
    })
})
