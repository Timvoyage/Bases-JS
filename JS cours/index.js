// alert("Hi JS");
// Camel case = c'est une soltuion pour écrire des phrases sans espace ou la 1er lettre de chaque mot est en majuscule

let maSuperVariable = "Hello";

// Variable = espace de stockage
// Les variables
var unTexte = "voici un texte";

// const = constante qui ne bouge jamais
const prenom = "Juliette";

// Let = déclaration de la variable et la variable peut évoluer
let unChiffre = 24;

unChiffre = 22;

let chaine = "Je suis l'une des chaines de caractères";

let nouvelleChaine = 
"Chaine précédente : " + chaine + ". voila c'était le contenu";

// Concaténation avec guillement altgr+7
let autreConcatenation = "Chaine précédente : ${chaine}. Voila c'était le contenu";

// Types de données
let string ="Je suis une chiane de caractère";
let number = 24
let boolean = false;

// Tableau : il y a des crochets
let array = ["je", "suis", 47, true];

// Objet : accolades {}
let object = {
    prenom: "Juile",
    age: 31,
    ville: "montpellier",
};

let arbre;

// Les opérateurs
console.log(4 + 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 * 5);
// Les puissances
console.log(4 ** 5);

// Opérateurs d'affectations
let total = 0;

total = total + 1;
total ++;

total += 5;
total -= 4;
total *= 2;

console.log(total);

// Structures de controle
let x = 2;
let y = 2;

if (x > y) {
    alert("YES x plus gros que y");
    } else if (y > x) {
        alert("Y plus grand");
        }else {
            alert("ILS SONT EGAUX");
        }

// On test si la variable est vrai 
if (x) {
    console.log("x existe !");
}

// === test de l'égalité en type de valeur
if (x === y) {
    // console.log ("ils sont égaux");
} else {
    // console.log("pas égaux !");

}

// test l'égalité de valeur sans prednre en compte le type
if (x === y) {
    console.log ("ils sont égaux");
} else {
     console.log("pas égaux !");
}


     







