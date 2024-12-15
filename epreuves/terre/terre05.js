const process = require('process');
const argument1 = process.argv[2];
const argument2 = process.argv[3];

if (argument1 >= argument2 && argument2 != 0) {
    const result = Math.floor(argument1 / argument2);
    const rest = argument1 % argument2;
    console.log(`resultat: ${result}`);
    console.log(`reste: ${rest}`);
}

else {
    console.log("erreur.")
}