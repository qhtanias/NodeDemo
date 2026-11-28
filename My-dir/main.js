var fs = require('fs');

// Async read (first attempt - has a bug)
fs.readFile('input.txt', function(err, data) {
    if (err)
        return console.error(err);
    // ❌ Missing: what happens with `data` if no error?
});

// Async read (correct version)
fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log("Async read : " + data.toString());
});
var data = fs.readFileSync();
