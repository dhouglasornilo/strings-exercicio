// Exercício 3

/* A partir da frase a seguir, faça o que se pede:

Jorge tem uma casa verde e com portão azul, com os dizeres:
"BOAS VINDAS, mas não deixe o gato sair" */

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo)
// \" para imprimir com aspas duplas dentro de aspas duplas OU ' e depois ".
let minhaFrase1 = "\"Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair\""
let minhaFrase2 = '"Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair"'
console.log(minhaFrase1)
console.log(minhaFrase2)

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**,
// e **azul** por **laranja**

minhaFrase1 = minhaFrase1.replace("verde","rosa").replace("azul","laranja")
console.log(minhaFrase1)

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

// Se fosse fazer apenas com uma mudança poderia usar dessa forma, porém, como é com mais de um
// o correto é fazer direto no console.log()
/*
minhaFrase1 = minhaFrase1.includes("verde")
minhaFrase1 = minhaFrase1.includes("laranja")
*/
console.log(minhaFrase1.includes("verde"))
console.log(minhaFrase1.includes("laranja"))

/* EXTRA: Tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
Para fazer o exercício abaixo precisa atribuir outra variavel para receber a mudança para
maiúscula ou seja variavel.toUpperCase() e colocar no console a variavel da frase .replace
e o trecho a ser mudado para substituir a frase minúscula pela maíuscula seguido de , e a variavel
que recebeu a frase maíuscula. */

let minhaFrase3 = "mas não deixe o gato sair"
minhaFrase3 = minhaFrase3.toUpperCase()

console.log(minhaFrase1.replace("mas não deixe o gato sair", minhaFrase3))