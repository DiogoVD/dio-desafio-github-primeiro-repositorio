/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis, sendo elas:
|1 - Preço do combustivel;
|2 - Consumo médio do combustivel do carropor KM;
|3 - Distancia em KM da viagem;

Imprima no console o valor que será gasto para realizar a viagem?
*/

const precoCombustivelReais = 5.79;
let gastoViagemReais;
let distPercorridaKm = 1500;
const consumoCarroKm = 10;

gastoViagem = (distPercorridaKm/consumoCarroKm)*precoCombustivelReais;

console.log(gastoViagem.toFixed(2));
