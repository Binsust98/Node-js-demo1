var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end("THIS IS BINSU SUSAN THOMAS");


}).listen(8080);