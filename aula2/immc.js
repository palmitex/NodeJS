
const readline = require('readline-sync');
let altura = Number(readline.question('Digite sua altura: '));
let peso = Number(readline.question('Digite seu peso: '));

let imc = peso / (altura ** 2);

if (imc < 17 && imc > 0) {
    console.log(`Muito abaixo do peso, IMC: ${imc}`);
} else if (imc > 17 && imc < 18.5) {
    console.log(`Abaixo do peso, IMC: ${imc}`);
}else if ( imc > 18.5 && imc < 25) {
    console.log(`Peso normal, IMC: ${imc}`);
}else if (imc > 25 && imc < 30) {
    console.log(`Acima do peso, IMC: ${imc}`);
}else if (imc > 30 && imc < 35) {
    console.log(`Obesidade I, IMC: ${imc}`);
}else if (imc > 35 && imc < 40) {
    console.log(`Obesidade II, IMC: ${imc}`);
}else {
    console.log(`Obesidade III, IMC: ${imc}`);
}