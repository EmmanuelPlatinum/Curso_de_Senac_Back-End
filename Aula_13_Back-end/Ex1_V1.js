// Calculadora
/*

Opções: 
-Soma
-Subtração
-Multiplicação
-Dividir
-Potencia
-Radiciação
-Porcentagem

*/
 
const calculadora = {
    somar: function(a, b) {                                            // 1) Soma
        return a + b;
    },

    subtrair: function(a, b) {                                         // 2) Subtração
        return a - b;
    },

    multiplicar: function(a, b) {                                      // 3)Multiplicação
        return a * b;
    },

    dividir: function(a, b) {                                          // 4)Dividir
        return a / b;
    },
    
    potenciacao: function(a, b) {                                      // 5)Potencia
        let resultado = 1;
        for (let i = 0; i < b; i++) {
            resultado *= a;
        }
        return resultado;
    },

    radiciacao: function(a) {                                           // 6)Radiciação
        let precisao = 0.0001; // Precisão desejada
        let inicio = 0.0;
        let fim = a;
        let meio = (inicio + fim) / 2;
        while (Math.abs(meio * meio - a) > precisao) {
            if (meio * meio > a) {
                fim = meio;
            } else {
                inicio = meio;
            }
            meio = (inicio + fim) / 2;
        }
        return meio;
    },

    porcentagem: function(a, b) {   // a é o número total e b é a porcentagem desejada
        let resultado = a * (b / 100);
        return `${b}% de ${a} é igual a ${resultado}`;
    }
}

// Execução de Métodos do Objeto Calculadora

console.log(calculadora.somar(5, 3)); // 8                 // 1) Soma
console.log(calculadora.subtrair(10, 4)); // 6             // 2) Subtração
console.log(calculadora.multiplicar(10, 4));               // 3)Multiplicação
console.log(calculadora.dividir(10, 4));                   // 4)Dividir 
console.log(calculadora.potenciacao(10, 4));               // 5)Potencia
console.log(calculadora.radiciacao(4));                    // 6)Radiciação
console.log(calculadora.porcentagem(100, 10));             // 7)Porcentagem




// cd Aula_13_Back-End

// node Ex1_V1.js