let util = require('util');
let os = require('os');
let events = require("events").EventEmitter;
const http = require('http');

//using util module which is used for string formatting features.
const name = "Phaniraj";
const address = "RR nagar, Bangalore"
const age = 43;
const msg = util.format("My Name is %s from %s and my age is %d years", name, address, age);
console.log(msg);
console.log(`My Name is ${name} from ${address}\n`);//New syntax in ES6 where U could ` `
///////////////////OS related operations///////////////////
console.log("The machine's OS is " + os.type());
console.log("The OS in on since " + (os.uptime()/3600) + " hrs");
console.log("The host name of this machine is " + os.hostname());
console.log("The current version of the OS is " + os.version())

console.table([
{Name: "Phaniraj", Address:"Bangalore", State:"Karnataka"},
{Name: "Phaniraj", Address:"Bangalore", State:"Karnataka"},
{Name: "Phaniraj", Address:"Bangalore", State:"Karnataka"},
{Name: "Phaniraj", Address:"Bangalore", State:"Karnataka"},
{Name: "Phaniraj", Address:"Bangalore", State:"Karnataka"},
{Name: "Phaniraj", Address:"Bangalore", State:"Karnataka"},
{Name: "Phaniraj", Address:"Bangalore", State:"Karnataka"}]);




//////////////////////using event concept/////////////////////////////////
/*
An action performed by the user is called event.
All events are objects of the class called EventEmitter which has some methods:
on method is used to define what the object should do when such event occurs. 
emit is the method that is used to trigger that event.
*/
//create the object of the EventEmitter
let myevent = new events();
//Tell the system that when an event called someAction is invoked, U call the callback function....
myevent.on("someAction", ()=>{
    console.log("Some action has occured")
});

myevent.on('click', (arg)=>{
    console.log("The arg passed is " + arg)
    console.log("I am being clicked")
})
//this part of the program will be done by another developer...
//myevent.emit('someAction')
myevent.emit("click", "Apple");
myevent.removeAllListeners();
myevent.emit("click", "Apple");
myevent.emit("click", "Apple");
////////////////////////Using http module////////////////////////////////
/*if U want to create a Web App, U should use this module. this module has operations to handle the requests made by the user thro internet and respond to those requests. 
Requests are the address sent by the browser when an user asks for a certain page or data.
Response is what UR server sends as a response to the request made by the specific user. 
Each user will get his response and will not conflict with other users. 
*/

const server = http.createServer((req, res)=>{
    console.log("Request has come from the user");
    res.write("<h1>Hello world from Nodejs</h1>");//writing to the browser..
    res.end();//Terminates the connection b/w the server and the browser. 

});

server.listen(1234);