
//define as entradas para o teste

const numeros = [4,100,150,90,200];
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