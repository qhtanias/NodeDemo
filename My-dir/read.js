var read = require('fs');
var data = read.readFileSync('input.txt', 'utf8'); // Added 'utf8' for cleaner reading
console.log(data.toString());
console.log(" done");