//Client side server for EXPRESS REST Service
const app = require("express")();
const fs = require("fs");

const dir = __dirname;

app.get("/", (req, res)=>{
    const filename = dir + "/PlayerManagement.html";
    res.sendFile(filename);
})

app.listen(1235, ()=>{
    console.log("The Server is ready!!!")
})