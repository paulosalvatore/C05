// number

const numero = 2;
const numero2 = 2.5;

console.log(numero, typeof numero);
console.log(numero2, typeof numero2);

// funções

// Usamos a declaração 'function' e damo um nome
// Função nomeada

// Declaro uma nova informação e armazeno na memória
// Essa informação é do tipo function
function nomeDaFuncao() {
    console.log("Nome da Função");
}

console.log(nomeDaFuncao, typeof nomeDaFuncao);

// Executei a função que havia sido declarada antes
const resultadoDaFuncao = nomeDaFuncao();

// void na prática equivale a algo 'vazio', ou seja, que não tem uma informação definida
// Por tanto, o retorno de uma função 'void' é sempre undefined;

console.log(resultadoDaFuncao, typeof resultadoDaFuncao);

// Arrow Function

const funcaoArrow = () => {
    console.log("Função Arrow");
};

console.log(funcaoArrow, typeof funcaoArrow);

// Funções anônimas, ou seja, que não possuem nome

// app.get("", function () {});
// app.get("", () => {});

// Classes

console.log("\n\n\n");

class Pessoa {
    constructor() {
        console.log("Classe pessoa está sendo contruída.");
    }
}

const objeto = {};

const paulo = new Pessoa();
const ivo = new Pessoa();

console.log(Pessoa, typeof Pessoa);
console.log(objeto, typeof objeto);
console.log(paulo, typeof paulo);
console.log(ivo, typeof ivo);

const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.listen(3000);
