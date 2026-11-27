var http = require('http');
const { URL } = require('url');

http.createServer(function (req, res) {

    // var queryString = url.parse(req.url, true);
    const queryString = new URL('https://www.customway.com:11/c#corner');
    // Prints the host
    console.log("Host is :-"+queryString.host);
    
    // Prints the host name
    console.log("Host name is :-"+queryString.hostname);

}).listen(4200);