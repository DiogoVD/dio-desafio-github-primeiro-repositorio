/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

formaPagamento1 - debito 
formaPagamento2 - pix ou dinheiro
formaPagamento3 - dividido em duas vezes
formaPagamento4 - dividido em mais de duas vezes

*/


//Resolução 1
//função do calculo do preço final
function calculaPrecoFinal(formaPagamento,precoEtiqueta){
    if(formaPagamento === 1){
        return precoEtiqueta - (precoEtiqueta*0.1);

    }else if(formaPagamento === 2){
        return precoEtiqueta - (precoEtiqueta*0.15);

    }else if(formaPagamento === 3){
        return precoEtiqueta;

    }else{
        return precoEtiqueta + (precoEtiqueta*0.1);

    }
}
//Resolução 2
function calculaDesconto(formaPagamento,precoEtiqueta){
    if(formaPagamento === 1){
        return (precoEtiqueta*0.1)*(-1);

    }else if(formaPagamento === 2){
        return (precoEtiqueta*0.15)*(-1);

    }else if(formaPagamento === 3){
        return 0;

    }else{
        return (precoEtiqueta*0.1);

    }
}

//Resolução 3
function aplicaDesconto(valor,desconto){
    return (valor - (valor * ( desconto / 100)));
}
function aplicaJuros(valor,juros){
    return (valor + (valor * ( juros / 100)));
}

function main1(){
    //Variaveis

    const precoEtiqueta = 100;
    const formaPagamento = 2;
    console.log(calculaPrecoFinal(formaPagamento,precoEtiqueta).toFixed(2));

}

function main2(){
    const precoEtiqueta = 100;
    const formaPagamento = 4;
    console.log((precoEtiqueta+calculaDesconto(formaPagamento,precoEtiqueta)).toFixed(2));
}

function main3(){

    const precoEtiqueta = 100;
    const formaPagamento = 4;


    if(formaPagamento === 1){
        console.log(aplicaDesconto(precoEtiqueta, 10));

    }else if(formaPagamento === 2){
        console.log(aplicaDesconto(precoEtiqueta, 15));

    }else if(formaPagamento === 3){
        console.log(precoEtiqueta);

    }else{
        console.log(aplicaJuros(precoEtiqueta, 10));

    }
}

main3();