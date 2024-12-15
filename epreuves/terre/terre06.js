const process = require('process')
const argument = process.argv[2]
const splitArgument = argument.split(""); // on separe chaque caractere de la chaine dans un tableau
let reverseArgument = ""
let i = 0
let j = 0;

while (splitArgument[i]) {
    i++;
}
i-- // pour revenir au dernier caractere et pas a undefined

while (i >= 0) {
    reverseArgument = reverseArgument + splitArgument[i]
    i--
    j++
}
console.log(reverseArgument)