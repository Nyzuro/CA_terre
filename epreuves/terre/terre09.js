const process = require('process')
const argument = Number(process.argv[2])
let squareTest = 1
let found = false

if (isNaN(argument)) {
    console.log("Veuillez entrer un nombre")
}

while (squareTest < argument) {
    if (squareTest ** 2 === argument) {
        console.log(squareTest)
        found = true
        return;
    }
    else {
        squareTest++;
    }
}

if (found != true) {
    console.log("Aucun carre parfait trouve pour ce nombre")
}