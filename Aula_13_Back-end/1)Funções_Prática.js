//1)Funções Pratica


//Declaração de Função

function saudacao() {
    console.log("Ola mundo ;) ")
}





// Expressões de Função

const saudacao = function() {
    console.log("Olá, mundo!");
    };





//Chamando Funções

const saudacao = function() {
    console.log("Olá, mundo!");
    };
    saudacao(); /* Chama a função 
    para exibir a saudação */
    




// Parâmetros e Retorno

function soma(a, b) {

    return a + b;
    }
    const resultado = soma(3, 5);
    console.log(resultado); 
    // Isso imprimirá 8
    /*Neste exemplo, a função soma aceita dois parâmetros, a e b, e
    retorna a soma desses valores. */





// Escopo de Funções

function minhaFuncao() {

    var x = 10;
    console.log(x); // Isso imprimirá 10
    }
    
    console.log(x); 
    // Isso resultará em um erro, pois "x" não está definido aqui




//Funções Anônimas

const dobrar = function(numero) {

    return numero * 2;
    };
    
    console.log(dobrar(5)); // Isso imprimirá 10




// Arrow Functions

const quadrado = (numero) => {
    return numero * numero;
    };
    
    console.log(quadrado(4)); 
// Isso imprimirá 16
//Arrow Functions são úteis para funções simples com uma única instrução de retorno.

