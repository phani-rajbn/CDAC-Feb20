const express = require("express");
const parser = require("body-parser");//This is required if U R processing the POST method for an http request...
const path = require("path");
const root = __dirname;

const app = express();
app.use(parser.urlencoded({extended:false}));
app.use(express.static(path.join(root, "public")));

app.get("/", (req, res)=> res.send("Testing Express"));
app.get("/FirstExample", (req, res)=>res.sendFile(root + "/public/SimpleDemo.html"));
app.get("/Home", (req, res)=> res.send("<h1>HomePage</h1><hr>"));
app.get("/About", (req, res)=> res.send("<h1>About Page</h1><hr>"));
app.get("/Works", (req, res)=> res.send("<h1>Works Page</h1><hr>"));

app.get("/Registration", (req, res)=> res.sendFile(root + "/UserRegistration.html"));


app.get("/register", (req, res)=>{
    const name = req.query.txtname;
    const address = req.query.txtaddr;
    res.send(`<h1> ${name} has been registered with us from the URL and ${address} has also been stored</h1><hr>`);
});

app.post("/register", (req, res)=>{
    if(req.body == null){
        console.log("No body available");
    }else{
        const name = req.body.txtname;
        const address = req.body.txtaddr;
        res.send(`<h1> ${name} has been registered with us by POST method and ${address} has also been stored</h1><hr>`);
    }
    
})

app.listen(1234, ()=> console.log("Server is running at 1234"));