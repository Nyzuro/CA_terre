const arguments = process.argv.slice(2)

if (arguments.length !== 1 || !isNaN(arguments[0])) {
    console.error('erreur.')
    process.exit()
} else {
    for (length = 0; arguments[0][length]; length++) {
    }
    console.log(length)
}