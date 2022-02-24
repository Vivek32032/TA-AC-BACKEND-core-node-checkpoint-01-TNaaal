 var http = require('http');

 var server = http.createServer(handleRequest);

 function handleRequest(req,res){

    var store = "";

    req.on('data',(chunk) =>{
        store += chunk;
    })

    req.on('end',()=>{
     if(req.method === "GET" && req.url === "/" ){

     }     
    })
   
 }

 server.listen(5000,()=>{
     console.log('Server is listening on 5k')
 })