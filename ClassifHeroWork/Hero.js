// configuração para ser capaz de ler valores fornecidas pelo usuario 
const prompt = require("prompt-sync")();

console.log(" BEM VINDO - VAMOS CRIAR SEU HEROI!!! ");

// criando variaveis
var heroName = prompt("Nome do heroi: ");

// casting de string para numero
var XPTotal = Number(prompt("Insira seu xp acumulado: "));

var ranque

if( XPTotal <= 1000){
    ranque = "Ferro"
} else if (XPTotal > 1000 && XPTotal <= 2000){
    ranque = "Bronze"
} else if (XPTotal > 2000 && XPTotal <= 5000){
    ranque ="Prata"
} else if (XPTotal > 5000 && XPTotal <= 7000){
    ranque = "Ouro"
} else if (XPTotal > 7000 && XPTotal <= 8000){
    ranque = "Platina"
} else if (XPTotal > 8000 && XPTotal <= 9000){
    ranque = "Ascendente"
} else if (XPTotal > 8000 && XPTotal <= 10000){
    ranque = "Imortal"
} else {
    ranque = "Radiante"
}

heroInfo = `\t O Héroi de nome ${heroName} está no nível de ${ranque} \n`;

console.log("\n\n\t#############################\n")
console.log(heroInfo);
console.log("\n\t#############################\n")