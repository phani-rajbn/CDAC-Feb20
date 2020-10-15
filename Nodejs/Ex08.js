//This example provides a webserver that processes web requests made by the user....
const http = require('http');
const fs = require('fs');//Reading and writing a file.....
const parse = require("url").parse;//Function used to parse the urls posted or sent by the user...
const root = __dirname;//This gives the path of the root directory....

function displayPage(res, url){
    const file = root + url + '.html';
    fs.createReadStream(file).pipe(res);
}

function errorPage(res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("<h1>Error page</h1><hr/>")
    res.write("<h2>OOPS! The Page U R requested is not with us!!!!</h2>");
    res.end();
}

http.createServer((req, res)=>{
    if(req.method == "GET"){
        // if(req.url.match('\.css')){
        //     console.log(req.url);
        //     let path = __dirname + req.url;
        //     let stream = fs.createReadStream(path);
        //     res.writeHead(200, {'Content-Type': "text/css"});
        //     stream.pipe(res);
        // }
    
        //console.log("This page is requested thro GET");
        //console.log(req.url);
        const query = parse(req.url).query;//Contain the querystring info.....
        //console.log(query);
        if(query != null){
            let obj = parse(req.url,true).query;//converts the Qstring to an object
            const answer = `Thanks!!! Mr.${obj.txtname}.\nUR address ${obj.txtaddr} and other details are stored with us`;
            res.write(answer);
            res.end();
            return;
        }
        // switch(req.url){
        //     case "/UserRegistration":
        //         res.write("<h1>User registration Form</h1><hr/>");
        //         res.end();
        //         break;
        //     default:
        //         res.write("<h1>Error page</h1><hr/>")
        //         res.end();
        //         break;
        // }
        
        switch(req.url){
            case "/favicon.ico":
                res.end();
                break;
            case "/UserRegistration":
                displayPage(res, req.url);
                //read the contents of the file and store it in a variable.
                //write the variable to the browser using res....
//                let file = root + req.url + ".html";
  //              fs.createReadStream(file).pipe(res);//writes to the response and ends the response...  
                //pipe is a function of the Stream object which delegates the output of the current stream into the object passed as arg....              
                break;
            case "/HomePage":
                displayPage(res, req.url);
                break;
                  
            case "/AboutUs":
                displayPage(res, req.url);
                break;
            case "/OurWork":
                displayPage(res, req.url);
                break;
            default:
                errorPage(res);
                break;
        }

    }else if(req.method == 'POST'){
        //console.log("This page is posted!!!!")
        req.on('data', (inputs)=>{
            let body = '';
            body += inputs;
            res.end(body);
        })
    }
}).listen(1234);

/*When the page is sent to the server thro HTTP GET*/