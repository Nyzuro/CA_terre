const arguments = process.argv.slice(2, 5)
const a = arguments[0]
const b = arguments[1]
const c = arguments[2]

if (arguments.length != 3 || process.argv[5]) {
    console.log("Il faut entrer 3 arguments et differents")
    return
}
if (a === b || b == c || c == a || c == b) {
    console.log("erreur.")
    return
}
if (isNaN(arguments[0]) == true || isNaN(arguments[1]) == true || isNaN(arguments[2]) == true) {
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