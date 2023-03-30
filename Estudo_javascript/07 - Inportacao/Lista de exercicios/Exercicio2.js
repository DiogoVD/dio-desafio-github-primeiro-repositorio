/*

2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90

*/

const { gets, print } = require('./fun_auxiliares2');

const listNum = [];
/*
let j = true;
while (j) {
    const num = gets();
    listNum.push(num);
    if(typeof num == "undefined"){
        j = false;
        listNum.pop();
    }
}
*/
const tam = gets();
for(let i = 0; i < tam; i++){
    listNum.push(gets());
}

let maior = listNum[0];
let menor = listNum[0];

for(let i = 1; i < listNum.length; i++){
    if(listNum[i] > maior){
        maior = listNum[i];
    }
    if(listNum[i] < menor){
        menor = listNum[i];
    }
}

print(maior);
print(menor);