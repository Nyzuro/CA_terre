const process = require('process');
const argument = process.argv[2];
let codeAscii = argument.charCodeAt(0); //on prend le code ascii du premier caractere du deuxieme argument
let result = '';

if (codeAscii >= 97 && codeAscii <= 122) { //si ce code correspond a une lettre minuscule
    while (codeAscii <= 122) {
        result = result + String.fromCharCode(codeAscii); //on marque la lettre correspondant au code Ascii dans result
        codeAscii++; // on passse a la lettre suivante
    }
    console.log(result);
}