/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variaveis, sendo elas:
|1 - Preço do etanol;
|2 - Preço da gasolina;
|3 - O tipo de combustivel que esta no seu carro;
|4 - Consumo médio do combustivel do carropor KM;
|5 - Distancia em KM da viagem;

Imprima no console o valor que será gasto para realizar a viagem?
*/

const precoEtanolReais = 5.79;
const precoGasolinaReais = 6.66;
let tipoCombustivel = 'gasolina';
let gastoViagemReais;
let distPercorridaKm = 100;
const consumoCarroKmEtanol = 10;
const consumoCarroKmGasolina = 10;

if(tipoCombustivel==='etanol'){
    gastoViagemReais = (distPercorridaKm/consumoCarroKmEtanol)*precoEtanolReais;
    console.log(gastoViagemReais.toFixed(2));
}else if(tipoCombustivel==='gasolina'){
    gastoViagemReais = (distPercorridaKm/consumoCarroKmGasolina)*precoGasolinaReais;
    console.log(gastoViagemReais.toFixed(2));
}else{
    console.log("Tipo de combustivel inválido");
}
