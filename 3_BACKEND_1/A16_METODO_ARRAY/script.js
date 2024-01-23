//----------- REVISAO -----

//----- ARRAY

//[array]/ {objetos}/ (funcao)

let nomeArray = [1, 'fayra', true]

//console.log(nomeArray.length) // qtd
//console.log(nomeArray[1]) //acessar 
// inicia do 0

//console.log(nomeArray[0])
//console.log(nomeArray[1])

/* INSERIR */

nomeArray.push('Coloquei no final essa frase')
//console.log(nomeArray) // Inserir no final

nomeArray.unshift('Coloquei no inicio do array')
//console.log(nomeArray) // Inserir no inicio

//-----

/* RETIRAR */

nomeArray.pop() // Retira no final
//console.log(nomeArray)

nomeArray.shift() // Retira do inicio
//console.log(nomeArray)


//------ OBJETO

let nomeObjeto ={
    nome: 'Mesa',
    comodo: 'Sala',
    cor : 'Branca'
}

//console.log(nomeObjeto.nome) // Acessar os dados 

//nomeObjeto.nome = 'Cadeira' //reatribuir valor

//console.log(nomeObjeto) 

//nomeObjeto.preco = 45000 // Adicionando uma nova propriedade 
//console.log(nomeObjeto)

let novoMovel = {... nomeObjeto}

//console.log(novoMovel)

novoMovel.nome = 'Luminaria'
//console.log(novoMovel)


//------ FUNCAO 

/* Reutilizarmos o código */

/*
    function nomeDaFuncao (parametros){
        //corpo da funcao
    }

    argumento = chama funcao 
    parametros = varivael ao definir a funcao
*/ 

/*
function dizerOi (parametro){
    //corpo da funcao
    console.log(`Oi  ${parametro}`)
}

dizerOi(prompt('Digite o seu nome'))
*/


//------ ARROW FUNCTION 

/*
const funcaoNormal  = function(nome){
    console.log(`Seja bem vinde! ${nome} `)
}

funcaoNormal('Fayra')
*/


/*
    arrow function 

    const nomeDafuncao = parametro => corpo da funcao
*/ 

// const funcaoSeta = nome => console.log(`Seja bem vinde! ${nome}`) 

// funcaoSeta('Fayra')

//------ FIND 

/* Retorna o valor primeiro elemento que é condizente*/ 

let novoArray = [6, 5, 'fayra', true]

 

let numerosMaioresQueQuatro = novoArray.find((numero)=> numero > 4)

//console.log(numerosMaioresQueQuatro)



//------ FIND INDEX 

/* Retorna o indice (posicao do elemento) do primeiro elemento que é condizente*/ 

let indiceElementoMaiorQueQuatro = novoArray.findIndex((numero)=> numero > 4)

//console.log(indiceElementoMaiorQueQuatro)

//------ FILTER 

/* Retorna o valor de todos os elementos que são condizentes 

    - Não modifica o array original , cria um novo  igual ou menor que original  

*/ 

let filtroDoElementoMaiorQueQuatro = novoArray.filter((numero)=> numero > 4)

//console.log(filtroDoElementoMaiorQueQuatro)


//------- 

let arrayDeNumeros = [-29, 12, 45, 67, 89, 2]

/*
    primeiro elemento = posicao 0
    segundo elemento = posicao 1
    terceiro elemento = posicao 2
    quarto elemento =  posicao 3
    quinto elemento =  posicao 4
    sexto elemento =  posicao 5
*/ 

let elementoMenorQueTres = arrayDeNumeros.findIndex((elemento)=> elemento < 3 )

//console.log(elementoMenorQueTres)

//------ MAP

/* 
    - Mapear  o array e aplicar as alteracoes item por item do array 

    - Nao modifica o array original 

    - Retorna um array de mesmo comprimento do arary original 
*/

let numerosDuplicados = arrayDeNumeros.map((numero)=> numero * 2)

//console.log(numerosDuplicados)


//------ SORT 
/*
    Ordenacao do array
*/

let arrayDesordenado = [-30, 60, 49]

//let arrayOrdenado = arrayDeNumeros.sort(a, b)

/*let numbers = [-29, 13, 45, 67, 89, 1]

numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers)
*/
//------ SOME 

/* VErifica a condicao , e retorna verdadeiro ou falso */
/*
const temNumeroPar = numbers.some((numero)=> numero %2 ===0 )
console.log(temNumeroPar)
*/

//------ SPLICE 

/*
    Alterar o conteudo do array
    - modifica o array original 
    

    array.splice(posicaoInicial, qtdElementos,.. Itens Inseridos)
*/

let numbers = [-29, 13, 45, 67, 89, 1]

//let numerosRemovido= numbers.splice(0,2)
//console.log(numbers) // retirar 

//let numerosSubtituido = numbers.splice(1,1,100, 400,30) //substituir
//console.log(numbers) 

numbers.splice(1,0, 'Bananinha', 'Moranguinho')

numbers.splice(1,0, 'Bananinha', 'Moranguinho')

console.log(numbers)

