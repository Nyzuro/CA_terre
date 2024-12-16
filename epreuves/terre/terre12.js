const argument = process.argv.slice(2)
if (!argument[0]) {
    console.log("Rentrez un argument")
    return
}
let hours = argument[0].slice(0, 2)
let minutes = argument[0].slice(3, 5)
let amOrpm = argument[0].slice(5, 7)

if (!/^\d{2}:\d{2}(AM|PM)$/.test(argument[0])) { //^\d{2} => deux chiffres pour les heures; :\d{2} => deux chiffres pour les minutes apres un ":"; (AM|PM) => Obligatoirement AM ou PM à la fin.
    console.log("Ecrivez comme ceci 11:40PM");
    return;
}

if (hours > 12) {
    console.log("Une journee ne peut avoir que 24h")
    return;
}
if (minutes > 59) {
    console.log("Il ne peut pas y avoir plus de 59 minutes")
    return
}
if (hours == 12 && amOrpm === "PM") {
    console.log("00h s'ecrit avec AM")
    return
}
if (hours == 12) {
    hours = "00"
}
if (amOrpm === "PM") {
    hours = hours + 12
    console.log(`${hours}:${minutes}`)
}
else {
    console.log(`${hours}:${minutes}`)
}