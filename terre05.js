const arguments = process.argv.slice(2)
const dividend = Number(arguments[0])
const divider = Number(arguments[1])

if (isNaN(dividend) || isNaN(divider)) {
    console.error("Entrez seulement des chiffres")
    process.exit()
}
if (arguments.length !== 2) {
    console.error("Entrez 2 nombres")
    process.exit()
}
if (dividend >= divider && divider !== 0) {
    const result = Math.floor(dividend / divider);
    const rest = dividend % divider;
    console.log(`resultat: ${result}`);
    console.log(`reste: ${rest}`);
} else {
    console.error("erreur.")
}