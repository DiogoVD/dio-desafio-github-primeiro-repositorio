
/* 
== compara os valores independente do tipo
=== compara os valores de mesmo tipo
= atribui valor a variavel
! negação inverte valor

*/
const num = 0;
const isNumeroPar = (num%2)===0;

//console.log(isNumeroPar);

if(num === 0){
    console.log("Número inválido");
}else if(isNumeroPar){
    console.log("Par");
}else {
    console.log("Ímpar");
}