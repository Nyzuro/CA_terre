const argument = process.argv.slice(2)

if (!argument[0]) {
    console.log("Rentrez un argument")
    return
}

let hours = argument[0].slice(0, 2)
let minutes = argument[0].slice(3, 5)
if (argument[0] !== (hours + ":" + minutes)) {
    console.log("Ecrivez comme ceci 00:00")
    return
}
if (hours > 24) {
    console.log("Une journee ne peut avoir que 24h")
    return
}
if (minutes > 59) {
    console.log("Il ne peut pas y avoir plus de 59 minutes")
    return
}
if (hours == 12) {
    console.log(`${hours}:${minutes}PM`)
    return
}
if (hours > 12) {
    hours = hours - 12
    console.log(`${hours}:${minutes}PM`)
}
else {
    console.log(`${argument[0]}AM`)
}