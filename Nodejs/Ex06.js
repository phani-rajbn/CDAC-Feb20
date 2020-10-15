//Demo of using http in nodejs. http is the protocol to handle web requests made by the user. UR app will process the requests made the user thr browser.
const http = require('http');
let fruits = [];
const server = http.createServer((req,res)=>{
   if(req.url != "/favicon.ico")
   {
        fruits.push(req.url);
   }
    res.write(fruits.toString());//string:http is string based....
    res.end();
})

server.listen(2500);