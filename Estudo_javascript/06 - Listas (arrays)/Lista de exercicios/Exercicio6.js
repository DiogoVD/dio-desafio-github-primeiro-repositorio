/*

6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]

*/
function maiorNota1(notas){
   let maior;
   for (let i = 1; i < notas.length; i++){
      if(notas[i] > notas[i-1]){
         maior = notas[i];
      }else{
         maior = notas[i-1];
      }
   }
   return maior;
}


const listaNotas = [2, 7, 3, 8, 10, 4, 15];
console.log(maiorNota1(listaNotas));

