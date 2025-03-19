const readline = require('readline-sync'); 
let num;


while (true) {
    num = readline.questionInt('Digite um número maior ou igual a zero: ');

    if (num >= 0) {
        break;
    } 
}

console.log(num ** 2)