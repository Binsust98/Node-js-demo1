var http = require('http');
var mydate = require('./mymodule');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("The date &time is "+mydate.myDteTime());
    res.write("HELLO BINSU!!!"+mydate.myprintfunction());
    res.end();

}).listen(8080);