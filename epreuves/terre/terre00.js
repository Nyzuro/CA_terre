const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let result = ""; //result servira a afficher le code sur une ligne seulement

for (let i = 0; alphabet[i]; i++) { //i sert a se deplacer dans la string alphabet en changeant d'index tant que alphabet n'est pas finit(/0)
    result = result + alphabet[i]; // on ajoute la lettre de l'index a result pour faire qu'une seule string
}
console.log(result);