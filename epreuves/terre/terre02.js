const procecess = require('process');
let i = 0;

while (procecess.argv.slice(2)[i]) {
    console.log(procecess.argv.slice(2)[i]);
    i++;
}