var http= require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World');
}).listen(3000);
console.log('Server started at localhost:3000');