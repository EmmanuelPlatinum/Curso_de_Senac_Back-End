/*Escreva um código em JavaScript
que leia um número inteiro positivo N e calcule
o fatorial desse número. */


// Definindo a variável N
let N = 10;

// Inicializando a variável fatorial
let fatorial = 1;

// Imprime 0
console.log(0);

// Loop de 1 até N
for (let i = 1; i <= N; i++) {
    fatorial *= i;
    console.log(`${i}! = ${fatorial}`);
}
