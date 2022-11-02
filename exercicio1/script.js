// Exercício 1
// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas.
const nome = prompt('Qual o seu nome?')
const favFood1= prompt('Qual sua comida favorita?')
const favFood2= prompt('Diga outra comida favorita?')
const favFood3= prompt('Diga uma última comida favorita?')

/* Em seguida, Imprima no console a seguinte mensagem:
Estas são as comidas favoritas de nomeDoUsuario
- Comida1
- Comida2
- Comida3 */
// ${variavel} usa para selecionar uma variavel dentro de uma string
// \n quebrar linha dentro de uma string
console.log(`Estas são as comidas favoritas de ${nome}: \n ${favFood1} \n ${favFood2} \n ${favFood3}`)