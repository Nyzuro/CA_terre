const arguments = process.argv.slice(2)
const a = Number(arguments[0])
const b = Number(arguments[1])
const c = Number(arguments[2])

if (arguments.length != 3) {
    console.log("Il faut entrer 3 arguments et differents")
    return
}
if (a === b || b == c || c == a) {
    console.log("erreur.")
    return
}
if (isNaN(arguments)) {
    console.log("Seul les chiffres fonctionnent")
    return
}
if ((a < b || a < c) && (a > b || a > c)) {
    console.log(a)
}
else if ((b < a || b < c) && (b > a || b > c)) {
    console.log(b)
}
else {
    console.log(c)
}