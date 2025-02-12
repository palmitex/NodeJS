// calcular e exibir media entre duas notas
let nota1 = 10;
let nota2 = 8;

let media = (nota1 + nota2) / 2;

console.log(`Média das notas: ${media}`);



//calulcar e exibir IMC
let altura = 1.77;
let peso  = 78;

let imc = peso / (altura ** 2);

console.log(`Calculo do IMC: ${imc.toFixed(2)}kg/m2`);



//calcular e exibir a temperatura de celsius para fahrenheit
let celsius = 25;
let fahrenheit = (celsius * 1.8) + 32;

console.log(`Celsius para Fahrenheit: ${fahrenheit} °F`);



//calcular e exibir preço com desconto
let preco = 200;
let desconto = 10;

let precoComDesconto = (preco * desconto) / 100;

let precoFinal = preco - precoComDesconto;

console.log(`Preço com desconto: ${precoFinal} R$`);

