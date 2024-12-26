const arguments = process.argv.slice(2)
let reverseArgument = ""

if (arguments.length != 1) {
    console.error("1 argument svp")
    process.exit()
}
for (i = arguments[0].length; i--;) {
    reverseArgument += arguments[0][i]
}
console.log(reverseArgument)