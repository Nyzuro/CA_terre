const arguments = process.argv.slice(2)
const numberArgument = Number(arguments[0])

if (isNaN(numberArgument)) {
    console.error("Ecrivez un nombre")
    process.exit()
} if (arguments.length !== 1) {
    console.error("Rentrez 1 argument")
    process.exit()
} if (numberArgument < 2) {
    console.error(`Non, ${numberArgument} n'est pas un nombre premier.`)
    process.exit()
}

let counter = 0
for (divader = 1; divader <= numberArgument; divader++) {
    let modulo = numberArgument % divader
    if (modulo === 0) {
        counter++
    }
}
if (counter === 2) {
    console.log(`Oui, ${numberArgument} c'est un nombre premier.`)
} else {
    console.error(`Non, ${numberArgument} n'est pas un nombre premier.`)
}