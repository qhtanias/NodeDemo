// 1. Rename the variable to readlineSync to avoid conflicts
const readline = require('readline');
createInterface({
    input: process.stdin,
    output: process.stdout
});
    readline.question('Who are you? ', (name) => {
        console.log(`Hello, ${name}!`);
        readline.close();
    });    

    function DisplayMessage(x) {
            
    }    
    
// // 1. Rename the variable to readlineSync to avoid conflicts
// const readlineSync = require('readline-sync');

// // 2. Ask the question (readline-sync is synchronous, so no callbacks are needed)
// const name = readlineSync.question('What is your name? ');

// // 3. Print the result
// console.log(`Hello, ${name}`);

// // 4. Define the function
// function DisplayMessage(x) {
//     console.log(x);
// }