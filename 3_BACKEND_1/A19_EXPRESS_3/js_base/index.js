console.log('Salve')

const arrayNomes =['Dough', 'Dionata','Dioni', 'Luh']


console.log(arrayNomes[2]) // valor Dioni => valor
console.log(arrayNomes[0]) // valor Dough


function isOdd (elemento) {
    return (elemento% 2 == 1)
}
  
console.log([4, 3, 8, 12] .findIndex(isOdd))// => posicao 


function pegarPosicaoNome (nome){
    return nome === 'fayra' 
}
console.log(['Dough', 'Dionata','Dioni', 'Luh'].findIndex(pegarPosicaoNome))