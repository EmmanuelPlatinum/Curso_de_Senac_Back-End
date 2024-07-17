// Esse codigo abaixo esta errado porque ele usa o terminal por causa do node.js por causa da função prompt()= input()

let n1 = Number(prompt("Digite um numero: "))
let n2 = Number(prompt("Digite outro numero: "))

if (n1 > n2) {
    console.log(n1 + "é maior que " + n2);
} 

else if (n1 < n2) {
    console.log(n1 + "é menor que " + n2);
} 

else {
    console.log("Os numeros são iguais")
}
























// Esse codigo abaixo tambem esta errado(tentativa de correção que deu errado)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function(answer1) {
    let n1 = Number(answer1);

    rl.question("Digite outro número: ", function(answer2) {
        let n2 = Number(answer2);

        if (n1 > n2) {
            console.log(n1 + " é maior que " + n2);
        } else if (n1 < n2) {
            console.log(n1 + " é menor que " + n2);
        } else {
            console.log("Os números são iguais");
        }

        rl.close();
    });
});
