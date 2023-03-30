/*

3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12


    */
const { gets, print } = require('./fun_auxiliares3');

const listNum = [];
const tam = gets();
for(let i = 0; i < tam; i++){
    listNum.push(gets());
}

for(let i = 0; i < listNum.length; i++){
    if((listNum[i] % 2) === 0){
        print(listNum[i]);
    }
}
