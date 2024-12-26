const argument = process.argv.slice(2)
const numberArgument = Number(argument[0])

if (argument.length !== 1 || isNaN(numberArgument)) {
    process.exit()
} if (numberArgument % 2 === 0 || numberArgument % 2 === -0) {
    console.log("Pair");
} else if (numberArgument % 2 === 1 || numberArgument % 2 === -1) {
    console.log("Impair");
} else {
    console.error("Tu ne me la mettras pas a l'envers.")
}