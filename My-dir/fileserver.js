var http = require('http');
var url = require ('url');
var fs = require('fs');

http.createServer(function(req,res){
    var a = url.parse(req.url,true);
    var file = "." + a.pathname;
    fs.readFile(__filename, function (err , data){
        if(err){
            res.writeHead(404, 
                {'C'}
            )
        }
    })
})