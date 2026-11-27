var fs = require('fs');

// Read file synchronously
var data = fs.readFileSync('input.txt', 'utf8');
console.log(data);

// Write (overwrite) file
fs.writeFile('input.txt', 'This is the new data feeding into file. Hello everyone !!!!', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Write operation done');

        // Append only after write completes (to avoid race condition)
        fs.appendFile('input.txt', '\nAppend the data in the Input.txt file', function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Append operation Completed');
            }
        });
    }
});