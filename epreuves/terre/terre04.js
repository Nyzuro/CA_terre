const process = require('process');
const argument = process.argv[2];

if (argument % 2 == 0 || argument % 2 == -0) {
    console.log("Pair");
}

else if (argument % 2 == 1 || argument % 2 == -1) {
    console.log("Impair");
}

else {
    console.log("Tu ne me la mettras pas a l'envers.")
}