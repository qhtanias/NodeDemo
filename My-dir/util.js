var util = require('util');
var txt = 'Welcome in the Node.js learning %s on the $dth birthday !!!!';

var result = util.format(txt, 'NPM',12);

console.log(result);

/*
format() , inherits(), inspect()
*/