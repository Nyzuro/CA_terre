const otherArguments = process.argv.slice(3)
const firstArgument = process.argv.slice(2, 3)

for (const i in otherArguments) {
    if (firstArgument > otherArguments[i]) {
        console.log("Pas triee !")
        return
    }
    else {
        console.log("Triee")
        return
    }
}
