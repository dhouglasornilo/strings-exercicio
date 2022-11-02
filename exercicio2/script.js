// Exercício 2

// Observe a string abaixo.
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;
let minhaStringSpace = "Eu não sou supersticioso, mas sou um pouco ________.      "
let minhaStringNoSpace = "Eu não sou supersticioso, mas sou um pouco ________.      "

// .trim depois da variável remove todos os espaços no final da string.
minhaStringNoSpace = minhaStringNoSpace.trim()
console.log(minhaStringNoSpace)

// b) Exiba, em um console.log() a quantidade de caracteres da string,
//antes e depois da remoção dos espaços;

console.log(minhaStringSpace.length)
console.log(minhaStringNoSpace.length)

// c) Substitua os traços `________` por “sticioso”.

minhaStringNoSpace = minhaStringNoSpace.replace(`________`,'sticioso')
console.log(minhaStringNoSpace)