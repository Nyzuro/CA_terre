let otherArguments = process.argv.slice(3)
let firstArgument = process.argv.slice(2, 3)

firstArgument[0] = Number(firstArgument[0]) // Pour passer les arguments en chiffre
for (const i in otherArguments) {
    otherArguments[i] = Number(otherArguments[i])
}

if (!Number.isInteger(firstArgument[0])) { // Verifie si c'est un integer
    console.log("erreur.")
    return
}

if (!otherArguments[0]) { // pas assez d'arguments
    console.log("Entrez au moins deux arguments")
    return
}

for (const i in otherArguments) {
    if (!Number.isInteger(otherArguments[i])) { // Verifie si c'est un integer
        console.log("erreur.")
        return
    }
    if (firstArgument > otherArguments[i]) {
        console.log("Pas triee !")
        return
    }
    else {
        console.log("Triee !")
        return
    }
}
