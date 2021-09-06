// const lista = [];

// const outraLista = [5, 9, 10, 12];

// for (let i = 0; i < outraLista.length; i++) {
//     const numeroOutraLista = outraLista[i];
//     lista.push(numeroOutraLista * 2);
// }

const outraLista = [5, 9, 10, 12];

// function minhaFuncao(value, index, array) {
//     console.log({ value, index, array });

//     return "Alguma informação";
// }

// const resultadoDaMinhaFuncao = minhaFuncao(2, 0, [1, 2, 3]);

// console.log(minhaFuncao, typeof minhaFuncao);
// console.log(resultadoDaMinhaFuncao, typeof resultadoDaMinhaFuncao);
// console.log({ resultadoDaMinhaFuncao });

// const resultadoDoMap = outraLista.map(minhaFuncao);

// const resultadoDoMap = outraLista.map(function (value, index, array) {
//     console.log({ value, index, array });

//     return 5;
// });

// console.log(resultadoDoMap);

////////////////////

// function minhaFuncao(parametro1, parametro2) {
//     function novaFuncao() {
//         return "Retorno da nova função";
//     }

//     return novaFuncao;
// }

// const novaFuncaoRetornadaAPartirDaMinhaFuncao = minhaFuncao();

// const resultado = novaFuncaoRetornadaAPartirDaMinhaFuncao();

// console.log(resultado);

/////////////////////////

// Declaração
function testarComoOThisFunciona() {
    /*
    this ->
        global: [Circular *1],
        clearInterval: [Function: clearInterval],
        clearTimeout: [Function: clearTimeout],
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        queueMicrotask: [Function: queueMicrotask],
        clearImmediate: [Function: clearImmediate],
        setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
        }
    */
    console.log(this);
}

// Executar
// testarComoOThisFunciona();

// this -> {}
// console.log(this);

// class Pessoa {
//     constructor(nome) {
//         // console.log(this, typeof this);
//         // this.teste = "Informação de teste";

//         this.nome = nome;

//         // console.log(this, typeof this);
//     }

//     exibirNome() {
//         console.log(this);
//     }
// }

// const paulo = new Pessoa("Paulo");
// const joao = new Pessoa("João");

// paulo.exibirNome();

// console.log(typeof paulo.exibirNome);

// console.log(paulo, typeof paulo);
// console.log(joao, typeof joao);

// const objeto = {
//     nome: "Paulo",
// };

// console.log(objeto, typeof objeto);

// console.log(this);

const funcaoComoConst = function () {
    console.log("funcaoComoConst", this);
};

function funcaoNomeada() {
    console.log("funcaoNomeada", this);
}

// funcaoComoConst();
// funcaoNomeada();

const funcaoComoArrow = () => {
    console.log("funcaoComoArrow", this);
};

const resultadoDaOperacaoBind = funcaoComoConst.bind(funcaoComoArrow);

// console.log(resultadoDaOperacaoBind, typeof resultadoDaOperacaoBind);

funcaoComoConst();
funcaoComoArrow();
resultadoDaOperacaoBind();
