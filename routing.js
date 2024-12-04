var http =require('http')
http.createServer(function(req, res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Homepage')
            break;      
        case '/about':
            res.writeHead(300, {'Content-Type': 'text/plain'});
            res.end('about')
            break;
        
        default:
            res.writeHead(404, {'Content-type': 'text/plain'});
            res.end('not-found')
            break;

    }
}).listen(3000);
console.log('server is running on localhost:3000')