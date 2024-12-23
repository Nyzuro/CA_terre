const arguments = process.argv.slice(2)

if (arguments.length !== 1) {
    console.error("Entrez 1 argument")
    process.exit()
}

let hours = Number(arguments[0].slice(0, 2))
let minutes = Number(arguments[0].slice(3, 5))
let amOrpm = arguments[0].slice(5, 7)

if (isNaN(hours) || isNaN(minutes)) {
    console.error("Entrez des chiffres")
    process.exit()
}

if (!/^(1[0-2]|0[0-9]):([0-5][0-9])(AM|PM|am|pm)$/.test(arguments[0])) {
    console.error("Ecrivez comme ceci 00:00AM")
    process.exit()
}

if (hours === 12 && amOrpm === "AM") {
    console.error("12AM n'existe pas")
    process.exit()
} if (hours === 0 && amOrpm === "PM") {
    console.error("00PM n'existe pas")
    process.exit()
} if (hours === 12) {
    console.log(`${hours}:${minutes.toString().padStart(2, "0")}`)
    process.exit()
} if (hours === 0) {
    console.log(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`);
    process.exit();
} if (amOrpm === "PM") {
    hours = hours + 12
    console.log(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`)
} else {
    console.log(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`)
}