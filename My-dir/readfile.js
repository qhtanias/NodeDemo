var fs = require('fs');

fs.open('input.txt', 'r', function (err, fd) {
    if (err) {
        return console.error(err);
    }

    var buffr = Buffer.alloc(1024);

    fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {
        if (err) throw err;

        // print only read bytes
        if (bytes > 0) {
            console.log(buffr.slice(0, bytes).toString());
        }

        // close file
        fs.close(fd, function (err) {
            if (err) throw err;
        });
    });
});