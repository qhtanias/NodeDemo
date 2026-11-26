var http = require('http');
var url = require('url')

http.createServer(function (req, res){
    var queryString = url.parse(req.url, true)
    ;
    queryString.href = "www.customway.com/abc.html";

console.log("Complete href is - " + queryString.href);


}).listen(5000);
