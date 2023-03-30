//define as entradas para o teste

const numeros = [5,1,3,9,10,12];
let i = 0;

function gets(){
    const valor = numeros[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };