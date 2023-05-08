// comando para instalar typescript localmente no projeto
// npm install typescript -D        instala apenas em modo desenvolvedor
// npm install typescript -G        instala globalmente

// consultar site https://www.typescriptlang.org/download em caso de duvidas

// comando para rodar TYPESCRIPT
// npx tsc caminho do arquivo 
// exemplo: npx tsc src\index.ts


type heroi = {
    name: string;
    vulgo: string;
};

function printaObjeto(pessoa: heroi){
    console.log(pessoa);
}

printaObjeto({
    name: "Bruce Wayne",
    vulgo: "Batman"
})


//tipos primitivos: boolean, string, number

let ligado: boolean = false;
let nome: string = "Diogo";
let idade: number = 36;
let altura: number = 1.79;

//tipos especiais: null, undefined

let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void

let retorno: void
let retornoView: any = false;    //usado quando ha algum retorno de função ou variavel

// tipo objeto
//sem previsibidade
let produto: object = {
    name: "Diogo",
    cidade:"Recife",
    idade: 36
};

//objeto tipado com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let MeuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 89.90,
    unidades: 5
};

// Arrays

let dados: string[] = ["Diogo", "Vieira", "Damascena"];
let dados2: Array<string> = ["Diogo", "Vieira", "Damascena"];

// Arrays multiplos tipos

let infos: (string | number)[] = ["Diogo", 36, 47, "Vieira"];

// Tuplas  - deve-se respeitar a ordem dos tipos das tuplas.

let boleto: [string, number, number] = ["conta de agua", 200, 2222111144443333];

// todos os metodos aplicados no array em javascript é usado em typescript

//Datas

let aniversario: Date = new Date("2023-05-08 17:30");
console.log(aniversario.toString());


//--------------------------------------------------------------------------------
// Funçoes

function addNumber(x: number, y: number): number{
    return x + y;
}

function addHello(name: string){
    return `Hello ${name}`;
}

let soma: number = addNumber(3, 7);

console.log(soma);
console.log(addHello("Diogo"));

// FUnçoes multiplos tipos

function CallToPhone(phone: number | string): number | string{
    return phone;
}

console.log(CallToPhone("82828288282"));

// funçoes assincrona

async function getDataBase(id: number): Promise<string | number>{
    return "Diogo"
}

//-------------------------------------------------------------------------

// Interfaces (Type X Interfaces)

type robot = {
    readonly id: number | string;
    name: string;
}

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
};

const bot1: robot = {
    id: "1",
    name: "Megaman"
}

const bot2: robot2 = {
    id: "1",
    name: "Megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

console.log(bot1);
console.log(bot2);

// interfaces

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }

    sayHello(): string{
        return `hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "Diogo");
console.log(p.sayHello());

