var mylog = require('./local_module.js');

mylog.info('Node.js running');

mylog.warning('Node.js has warning');
mylog.error('Node.js is showing error');

var local = require('./Welcome.js');
local.sayHello();
console.log(local.currTime);
console.log(local.companyName);