const numbers = process.argv.slice(2)

for (const i in numbers) {
    numbers[i] = Number(numbers[i])
    if (isNaN(numbers[i]) || !Number.isInteger(numbers[i])) {
        console.error("Entrez seulement des entiers")
        process.exit()
    }
}
if (numbers.length < 1) {
    console.error("Entrez au moins deux nombres")
    process.exit()
}
for (i = 1; numbers[i]; i++) {
    if (numbers[i] < numbers[i - 1]) {
        console.error("Pas triee !")
        process.exit()
    }
}
console.log("Triee !")