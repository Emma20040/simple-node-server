var http= require('http')
   fs= require('fs')
function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) responseCode=200;
    fs.readFile(__dirname + path, function(err, data){
        if(err){
            res.writeHead(500, { 'Content-Type': 'text/plain'});
            res.end('500-internal error')
        }else{
            res.writeHead(responseCode, {'Content-Type': 'text/plain'});
            res.end(data);
        }
    });
}

http.createServer(function(req,res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '')
     .toLowerCase();
     switch(path){
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;
        
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/image':
            serveStaticFile(res, '/public/image/1727497822143.jpg', 'image/jpeg');
            break;
        default:
            serveStaticFile(res, '/public/not_found.html', 'text/html', 404);
            break;
     }

}).listen(3000);
console.log('server is running on localhost 3000: press ctr+c to stop server')