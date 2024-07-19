/*Escreva um código em JavaScript
que leia um número inteiro positivo N e calcule
a soma dos números de 1 até N. */


// Definindo a variável N
let N = 10;

// Inicializando a variável soma
let soma = 0;

// Loop de 0 até N
/*for (let i = 0; i <= N; i++) {
    soma += i;
    if (i === 0) {
        console.log(i);
    } else {
        console.log(`${i} = ${soma}`);
    }
}
*/

// Loop de 0 até N
for (let i = 0; i <= N; i++) {
    soma += i;

    console.log(`${i} = ${soma}`);
}



