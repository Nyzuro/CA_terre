const arguments = process.argv.slice(2)
const firstArgument = Number(arguments[0])
const secondArgument = Number(arguments[1])
let power = firstArgument

if (isNaN(firstArgument) || isNaN(secondArgument)) {
    console.error("Please enter only numbers")
    process.exit()
} if (arguments.length !== 2) {
    console.error("Please enter 2 numbers")
    process.exit()
} if (secondArgument < 0) {
    console.error("Exposant can't be negative")
    process.exit()
} if (secondArgument === 0) {
    console.log(1)
    process.exit()
} else {
    for (i = 1; i < secondArgument; i++) {
        power = power * firstArgument
    }
    console.log(power)
}