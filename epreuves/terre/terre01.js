const path = require('path');
const filename = path.basename(__filename); // on prend seulement le nom du dernier fichier de la route __filename
console.log(filename);