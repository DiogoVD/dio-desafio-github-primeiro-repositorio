/*

2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

*/

const numeros = [2,5,3,6,8,7,10];

for (let i = 0; i < numeros.length; i++) {
    if((numeros[i] % 2) === 0){
        console.log(numeros[i]);
    }
    
}


