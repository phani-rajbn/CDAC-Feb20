//This app uses express and mongodb to create REST Service to store and read the data from the databae. This is the part of MEAN stack: MongoDB, Express, Angular, Nodejs. 
//Nodejs is the platform. 
//Mongodb is the database.
//Angular is the UI of the App
//Express is the framework for building the REST service. 
const app = require("express")();
const mongo = require("mongodb").MongoClient;
const parser = require("body-parser");//For handling POST operations....

app.use(parser.urlencoded({"extended" : true}));
app.use(parser.json());

//Will add few more features later.....

let db;
function getConnetion(){
    const url = "mongodb://localhost/exampledb";
    var mc = mongo.connect(url, (err, res)=>{
        if(err){
            console.log(err.message);   
        }
        else{
            db = res.db("exampledb");
        }
    });
};

getConnetion();

app.get("/Players", (req, res)=>{
    db.collection("players").find().toArray((err, result)=> {
        if(err){
            console.log(err.message);
        }else{   
            res.send(result);
        }
    });
})

app.get("/Players/:pId", (req, res)=>{
    const id = parseInt(req.params.pId);
    db.collection("players").find({playerId : id }).toArray((err, result)=>{
        res.send(result);``
    })
})

app.post("/Players", (req, res)=>{
    let data = req.body;
    console.log(data);
    db.collection("players").insert(data);
    res.send("Player added to the server");    
})

app.listen(1234, ()=> console.log("REST Server available at localhost:1234"));
