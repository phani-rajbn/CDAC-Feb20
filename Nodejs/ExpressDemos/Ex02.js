//Demo on writing to JSON file and using it.....
const app = require("express")();//Server management
const parser = require("body-parser");//To process the POSTED Data...
const fs = require("fs");//Filesystem....

/*
 data is stored inside a JS Array...
 contents of the array will be stored in a JSOn file...
 We will read and write to the JSON file. 
 data is given to the user thro HTTP.
 HTTP has 4 verbs: GET(from server), POST(to Server), PUT(To server), DELETE(To server).
 Using these verbs we can determine the direction of data transfer...
 Users will get the data, and they can use the data for what ever reasons they want!!!!
*/

const dir = __dirname;
//GET,  POST, PUT DELETE: These are the HTTP methods used to perform CRUD operations...
let data = [];

function saveData(){
    const filename = dir + "/myData.json";
    const jsonContent = JSON.stringify(data);//converts UR Array to a JSON object....
    //console.log(jsonContent);
    fs.writeFileSync(filename, jsonContent, 'utf8');
    console.log("Data is saved");
}

function readData(){
    const filename = dir + "/myData.json";
    const jsonContent = fs.readFileSync(filename, "utf8");
    data = JSON.parse(jsonContent);//converts the JSON object back to array.....    
   
}


app.use(parser.urlencoded({extended:true}));
app.use(parser.json());//Data posted by the user will be in the form of JSON object....

//When the user wants to add a data to the datasource....
app.post("/AddNew", (req, res)=>{
    if(data.length == 0)
    readData();//this will fill our data from the file we have saved...    

    let newRec = req.body;//body is of JSON.....
    //console.log(newRec);
    data.push(newRec);
    saveData();//Save the records to the file...
    res.send("Inserted Successfully");//message to the user....
})

//Whe the User wants to extract the data from the datasource.....
app.get("/All", (req, res)=>{
    readData();//extract all the records from the file....
    res.send(JSON.stringify(data));//convert the array to JSON and send to the user....
})

//When the user wants to extract a specific data from the datasource...
app.get("/All/:id", (req, res)=>{
    const empid = req.params.id;
    if(data.length == 0)
        readData();//this will fill our data from the file we have saved....
    let foundEmp = data.find((e)=>e.empId == empid);
    if(foundEmp == null)
        throw "Employee not found";
    res.send(JSON.stringify(foundEmp));//What the user sees in the browser...UR data should be string....    
})

//When the User wants to update the record
app.put('/All', (req, res)=>{
    if(data.length == 0)
        readData()//Extract the data from the file...
    const updatingRec = req.body;
    for(let i =0; i < data.length; i++){
        if(data[i].empId == updatingRec.empId){
            data[i].name = updatingRec.name;
            data[i].address = updatingRec.address;
            saveData();
            res.send("Updated successfully");
        }
    }
    throw ("Employee not found to update");     
})


app.delete("/All", (req, res)=>{
    res.send("Do it URSELF as Assignment!!!!")
})

app.listen(1234, ()=>{
    console.log("Server is running");
})