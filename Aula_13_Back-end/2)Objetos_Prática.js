// 2)Objetos e Propriedades



// Criando objetos em JavaScript

const Pessoa = {
    nome: "Alice",
    idade: 30,
    cidade: "Cuiabrasa"
    
    };




// Acessando propriedades de objetos.

const pessoa = {
    nome: "Alice",
    idade: 30,
    cidade: "Cuiabrasa"
    };
    console.log(pessoa.nome); // Alice
    console.log(pessoa["idade"]); // 30
    


// Deletando propriedades de objeto

const pEssoa = {
    nome: "Alice",
    idade: 30,
    cidade: "Cuiabrasa"
    };
    delete pessoa.nome;
    console.log(pessoa.nome); // undefined

    