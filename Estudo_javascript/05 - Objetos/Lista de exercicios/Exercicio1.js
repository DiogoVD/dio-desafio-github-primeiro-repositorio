/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    consumo;

    constructor(marca,cor,consumo){
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
    }

    calculaGasto(precoCombustivel,KmPercorrido){
        return (KmPercorrido/this.consumo) * precoCombustivel;

    }
}

const fusca = new Carro('Volkswagen','Branco',5);
console.log(fusca.calculaGasto(8,100));

const uno = new Carro('Fiat','Prata',12);
console.log(uno.calculaGasto(5,70));