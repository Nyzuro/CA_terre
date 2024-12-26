const path = __filename
let fileName = ""

for (i = path.length; i--;) {
    if (path[i] === "/") {
        break
    } else {
        fileName = path.charAt(i).concat(fileName)
    }
}
console.log(fileName)