const http = require('http');

const options = {
    host: '127.0.0.1',
    port: 8000,
    path: '/length_request'
};
//make a request 
const req = http.request(options);

req.on('information', (info) => {
    console.log(`Got the information to
    main response: ${info.statusCode}`)
});

req.end();

