

function imprime(dado){
    console.log(dado);
}


//Estudo Objetos e classes

const vitor = {
    nome: 'Vitor J Guerra',
    idade: 25,

}


//imprime(vitor);
//imprime(vitor.idade);

//adiciona atributo dinamicamente
//vitor.altura = 1.70;
//imprime(vitor);

//Remove atributo
//delete vitor.nome;
//imprime(vitor);


const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

pessoa.nome = 'Diogo';
pessoa.idade = 35;

pessoa.descrever();

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();

const atributo = 'idade';
console.log(pessoa[atributo]);


