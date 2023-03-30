/*

6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]

*/
function maiorNota(notas){
   let maior = notas[0];
   for (let i = 1; i < notas.length; i++){
      if(notas[i] > maior){
         maior = notas[i];
      }
   }
   return maior;
}


const listaNotas = [20, 7, 3, 8, 10, 4, 15];
console.log(maiorNota(listaNotas));

