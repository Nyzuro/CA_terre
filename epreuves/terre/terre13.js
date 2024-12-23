const arguments = process.argv.slice(2)
const a = Number(arguments[0])
const b = Number(arguments[1])
const c = Number(arguments[2])

for (const i in arguments) {
    if (isNaN(arguments[i]) || (!Number.isInteger(arguments[i]))) {
        console.error("Entrez seulement des entiers")
        process.exit()
    }
}
if (arguments.length != 3) {
    console.error("Il faut entrer 3 nombres")
    process.exit()
} if (a === b || b === c || c === a) {
    console.error("Deux nombres sont les memes")
    process.exit()
}
if ((a < b && a > c) || (a > b && a < c)) {
    console.log(a)
} else if ((b < a && b > c) || (b > a && b < c)) {
    console.log(b)
} else {
    console.log(c)
}