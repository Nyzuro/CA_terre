const argument = process.argv.slice(2)
let charAscii = argument[0].charCodeAt(0)
let alphabet = ""

for (; charAscii <= 122; charAscii++) {
    if (charAscii < 97) {
        process.exit()
    }
    alphabet += String.fromCharCode(charAscii)
}
console.log(alphabet)