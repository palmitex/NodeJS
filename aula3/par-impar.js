const readline = require('readline-sync');

let num = Number(readline.question('Digite um número: '));

const resutaldo = (!isNaN(num)) ? (num % 2 == 0) ? 'Par' : 'Impar' : 'Número inválido';

console.log(resutaldo);