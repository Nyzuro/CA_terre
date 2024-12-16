const process = require('process')
const argument = process.argv[2]
let divasor = 1
let counter = 0

if (argument === 0 || argument === 1 || argument < 0) {
    console.log(`Non, ${argument} n'est pas un nombre premier.`)
    return
}

if (isNaN(argument) == true) {
    console.log("ecrivez un nombre")
    return
}

while (divasor <= argument) {
    let modulo = argument % divasor
    if (modulo === 0) {
        counter++
    }
    divasor++
}

if (counter === 2) {
    console.log(`Oui, ${argument} c'est un nombre premier.`)
}
else {
    console.log(`Non, ${argument} n'est pas un nombre premier.`)
}