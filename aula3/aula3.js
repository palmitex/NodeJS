
const readline = require('readline-sync');

const idade = Number(readline.question('Digite sua idade: '));

// if (isNaN(idade)) {
//     console.log('Idade inválida');
// } else {
//     if (idade < 18) {
//         console.log('Menor de idade');
//     } else {
//         console.log('Maior de idade');
//     }
// }

(idade>=18) ? console.log('Maior de idade') : console.log('Menor de idade');