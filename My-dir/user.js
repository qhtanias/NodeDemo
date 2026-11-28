var input = process.stdin;

input.setEncoding('utf-8');

console.log("Please enter the text in command line:");

input.on('data', function(data) {
    if (data === 'exit\n') {
        console.log("User input done. Exit.");
        process.exit();
    } else {
        console.log('User input data: ' + data);
    }
});