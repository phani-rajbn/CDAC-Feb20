//For File reading and writing in Nodejs...
//We can use the Nodjs available modules to develop ur applications...
let fs = require('fs');//filesystem.
//all std modules of nodejs are available without using ./ in ur require paranthesis, that is how U differenciate b/w the user defined modules and the std modules provided by the Nodejs.

/*******************Reading a file synchronously************* */
// const data = fs.readFileSync('./Ex02.js', 'utf8');//read the file synchronously 
// console.log(data);

/*Reading the file asynchronously*/
// fs.readFile('./Ex03234.js', 'utf8', (err, data)=>{
//     if(err != null) console.log(err.message)
//     else{
//         console.log("First line of the program!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//         console.log(data);
//         console.log("Last line of the program!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//     }
// })

const filename = "MyDemo.txt";
//fs.writeFileSync(filename, "Some text to write to the file", 'utf8');

// fs.writeFile(filename, "MyFilecontents into the file",(err)=>{
//     if(err) console.log(err.message);
// })
//////////////////Example to append the file///////////////////
fs.open(filename, 'a+', function(err, fd){
    if(err) throw err;
    let buf = "Some Content\n";
    fs.write(fd, buf, (err, written, buffer)=>{
        fs.close(fd, ()=>{
            console.log("Completed!!!");
        })
    })
})

appendContent = function(filename, content){
    fs.open(filename, 'a', (err, fd)=>{
        fs.write(fd, content, (err, written, buffer)=>{
            fs.close(fd, ()=>console.log("Completed!!!"));
        })
    })
}

appendContent("Ex04.js", "//Added at last");

//To create an App that stores employees in the file as CSV(Comma Seperated value files)
//1,Phaniraj,Bangalore, 45000=>.csv file