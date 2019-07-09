'use strict'

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');
let filename = 'my-file.txt'

try {
    let fileContent = fs.readFileSync(filename, 'utf-8');
    console.log(fileContent);
}
catch (e) {
    console.error(`Unable to read file: ${filename}`);
}