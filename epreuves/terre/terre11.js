const arguments = process.argv.slice(2)

if (arguments.length !== 1) {
    console.error("Entrez 1 argument")
    process.exit()
}

let hours = Number(arguments[0].slice(0, 2))
let minutes = Number(arguments[0].slice(3, 5))

if (isNaN(hours) || isNaN(minutes)) {
    console.error("Entrez des chiffres")
    process.exit()
}
if (!/^(2[0-4]|1[0-9]|0[0-9]):([0-5][0-9])$/.test(arguments[0])) {
    console.error("Ecrivez comme ceci 00:00")
    process.exit()
}
if (hours === 12) {
    console.log(`${hours}:${minutes}PM`)
    process.exit()
} if (hours === 0) {
    console.log(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}AM`)
    process.exit()
} if (hours > 12) {
    hours = hours - 12
    console.log(`${hours}:${minutes}PM`)
} else {
    console.log(`${arguments[0]}AM`)
}