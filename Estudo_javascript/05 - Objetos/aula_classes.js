
class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }
}

const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const diogo = new Pessoa();
diogo.nome = 'Diogo V Damascena';
diogo.idade = 35;

const diana = new Pessoa('Diana',9);

vitor.descrever();
diogo.descrever();
console.log(diana);