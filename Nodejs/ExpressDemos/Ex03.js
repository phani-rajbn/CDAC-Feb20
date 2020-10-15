const app = require("express")();

app.get("/Interface", (req, res)=>{
    res.sendFile(__dirname + "/EmployeeManagement.html");
})

app.listen("1235", ()=>{
    console.log("Server at 1235");
})