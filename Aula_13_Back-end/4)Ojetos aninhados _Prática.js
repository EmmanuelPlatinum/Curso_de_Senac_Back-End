// 4)Ojetos aninhados 


const empresa = {
    nome: "Minha Empresa",
    endereco: {
    rua: "Rua da Empresa",
    cidade: "Cidade da Empresa"
    }
    };

// Para acessar propriedades em objetos aninhados, você pode encadear as notações de ponto ou colchetes:
console.log(empresa.endereco.rua); // Rua da Empresa
