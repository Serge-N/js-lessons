// how to capture user input in node js

console.log("This is printing to the print screen stream");


console.log("Non in-built alternatives include: prompt-sync");

console.log("This uses the basic readline module.");

const readInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readInput.question("What is your name player? ", name => {
    console.log(`How are you doing, ${name}`);
    readInput.close();
});


