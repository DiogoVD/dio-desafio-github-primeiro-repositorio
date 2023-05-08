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