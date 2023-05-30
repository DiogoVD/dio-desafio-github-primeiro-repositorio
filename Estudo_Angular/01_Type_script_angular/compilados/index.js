"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printaObjeto(pessoa) {
    console.log(pessoa);
}
printaObjeto({
    name: "Bruce Wayne",
    vulgo: "Batman"
});
let ligado = false;
let nome = "Diogo";
let idade = 36;
let altura = 1.79;
let nulo = null;
let indefinido = undefined;
let retorno;
let retornoView = false;
let produto = {
    name: "Diogo",
    cidade: "Recife",
    idade: 36
};
let MeuProduto = {
    nome: "Tenis",
    preco: 89.90,
    unidades: 5
};
let dados = ["Diogo", "Vieira", "Damascena"];
let dados2 = ["Diogo", "Vieira", "Damascena"];
let infos = ["Diogo", 36, 47, "Vieira"];
let boleto = ["conta de agua", 200, 2222111144443333];
let aniversario = new Date("2023-05-08 17:30");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
function addHello(name) {
    return `Hello ${name}`;
}
let soma = addNumber(3, 7);
console.log(soma);
console.log(addHello("Diogo"));
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone("82828288282"));
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Diogo";
    });
}
;
const bot1 = {
    id: "1",
    name: "Megaman"
};
const bot2 = {
    id: "1",
    name: "Megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Diogo");
console.log(p.sayHello());
class Character {
    constructor(name, stretch, skill) {
        this.name = name;
        this.stretch = stretch;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stretch} points`);
    }
}
const p1 = new Character("Ryu", 10, 98);
p1.attack();
class Magician extends Character {
    constructor(name, stretch, skill, magicPoints) {
        super(name, stretch, skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magician("Mago", 9, 30, 100);
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 3], [7]);
const stgArray = concatArray(["Diogo", "Diego"], ["rambo"]);
console.log(numArray);
console.log(stgArray);
