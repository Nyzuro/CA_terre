const process = require('process')
const argument1 = process.argv[2]
const argument2 = process.argv[3]

if (isNaN(argument1) == true || isNaN(argument2) == true || argument2 < 0) {
    console.log('error.')
}
else {
    const result = argument1 ** argument2;
    console.log(result)
}