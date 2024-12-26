const arguments = process.argv.slice(2)
const numberArgument = Number(arguments[0])

if (isNaN(numberArgument)) {
    console.error("Entrez un nombre")
    process.exit()
} if (arguments.length !== 1) {
    console.error("Entrez 1 argument")
    process.exit()
}
let squareTest = 0
let found = false
for (; squareTest <= numberArgument; squareTest++) {
    if (squareTest ** 2 === numberArgument) {
        console.log(squareTest)
        found = true
        break
    }
} if (found != true) {
    console.error("Aucun carre parfait trouve pour ce nombre")
}