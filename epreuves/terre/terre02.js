const process = require('process');
let i = 0;

while (process.argv.slice(2)[i]) { // on ne prend pas les deux premiers arguments
    console.log(process.argv.slice(2)[i]);
    i++;
}