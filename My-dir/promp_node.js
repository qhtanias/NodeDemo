const readline = require("readline");

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout

});

rl.question("What is your name ? ", function saveInput(name){
    console.log('His name is ${name}');
    rl.close();
});

rl.on("close", function saveInput(){
    console.log("\nBYE BYE !!!");
    process.exit(0);
});