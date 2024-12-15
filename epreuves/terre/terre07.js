const process = require('process')
const argument = process.argv[2]
let i = 0

if (!argument || process.argv[3] || isNaN(argument) == false) {
    console.log('erreur.')
}
else {
    while (argument[i]) {
        i++;
    }
    console.log(i)
}