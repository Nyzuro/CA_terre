const process = require('process');
let i = 0;

while (process.argv.slice(2)[i]) {
    console.log(process.argv.slice(2)[i]);
    i++;
}