var http = require('http');
var url = require ('url');
var fs = require('fs');

http.createServer(function(req,res){
    var a = url.parse(req.url,true);
    var file = "." + a.pathname;
    fs.readFile(__filename, function (err , data){
        if(err){
            res.writeHead(404, 
                {'Content-Tupe':'text/html'});
                return res.end("404 not found"
            );
        }
        res.writeHead(200,
            {'Content-Type':'text/html'}
        )
        res.write(data);
        return res.end();
    });
}).listen(4200);