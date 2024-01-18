console.log('Olá turma')


//---------- REVISAO ------------

/*

let garrafinha ={
    cor:'roxa', 
    tamanho: 30,
    material: 'Plástico', 
    temperatura: 12
}

console.log(`O objeto tem a cor ${garrafinha.cor}, o tamanho ${garrafinha.tamanho} cm, o material  é ${garrafinha.material} e a temperatura ${garrafinha.temperatura} graus .`)

let caneca  = {...garrafinha}
caneca.cor = 'branca'
caneca.tamanho= 10
caneca.material = 'Ceramica'
caneca.temperatura = 20

console.log(`O objeto tem a cor ${caneca.cor}, o tamanho ${caneca.tamanho} cm, o material  é ${caneca.material} e a temperatura ${caneca.temperatura} graus .`)

let loucas = []

loucas.push(caneca,garrafinha)

console.log(loucas)

console.log(loucas[1].cor,loucas[0].cor)

*/


//---------- FUNCAO CONCEITOS ------

/*

function nomeDafuncao (parametro){
    //código que vai executar 
}

function comprarLeite (dinheiro,marca,boolean){
    //código que vai executar 
    console.log(`Fui comprar leite e custou R$ ${dinheiro} e é da maraca ${marca}. É leite vegetal ? ${boolean}`)
}

comprarLeite(40,'silk',true)
comprarLeite(10, 'parmalat', false)
comprarLeite(3, 'itambé', false)

*/


//------ Passando condicionais em funcao 

/*
let idade = Number(prompt('Digite a sua idade'))
let codicaoMaiorDeidade =  idade >=18 

function imprimirMensagem (condicao){
    if(condicao){
        console.log('Você é maior de idade')
    }else{
        console.log('Você é menor de idade')
    }
}

imprimirMensagem(codicaoMaiorDeidade )
*/

//---------- FUNCÃO COM RETORNO COM PARAMETRO ----------

/*
    crie uma funcao que calcule area de um quadrado , peça o lado e retorne a área do quadrado 
*/ 

/*
let lado

function calcularArea (lado){
    lado = Number(prompt('Digite o tamanho do lado'))
    let area = lado *lado
    console.log(area)
    return area // nao funciona após o return
    console.log(area)
}
const area = calcularArea(lado)
console.log(`A área do quadrado é ${area}`)
*/


/*
    Crie uma função que receba dois parâmetros sendo eles: ano de nascimento e o ano atual. Essa função deve descobrir a idade da pessoa e retornar a idade como resultado. O retorno (resultado) da função deve ser armazenada em uma variável e no final deve ser escrito  a seguinte mensagem: Com as informações passadas para mim, descobri que você tem IDADE_PESSOA.

*/


/*

function descobrirIdade(anoNascimento,anoAtual) {
    let idade = anoAtual - anoNascimento
    //console.log(idade)
    return idade
}

let idadeDaPessoa = descobrirIdade(1994, 2024)

console.log(idadeDaPesso)

*/ 

/*

let anoNascimento = Number(prompt('Digite o seu ano de nascimento'))

let anoAtual = Number(prompt('Digite o ano atual'))

function descobrirIdade(anoNascimento,anoAtual) {
    let idade = anoAtual - anoNascimento
    //console.log(idade)
    return idade
}

let idadeDaPessoa = descobrirIdade(anoNascimento,anoAtual)

console.log(idadeDaPessoa)
*/



//---------- FUNCÃO SEM RETORNO COM PARAMETRO

/*
    Crie uma função que imprima o seguinte texto : É um prazer atender você VALOR_PARAMETRO. Você é muito especial para o meu site :)
*/

/*
function imprimirTexto(nome){
    console.log(`É um prazer atender você ${nome}. Você é muito especial para o meu site :) ❤️ `)
}

imprimirTexto('Fayra')
*/

/*

let nome = prompt('Digite o seu nome')

function imprimirTexto(nome){
    console.log(`É um prazer atender você ${nome}. Você é muito especial para o meu site :) ❤️ `)
}

imprimirTexto(nome)

*/

//---------- FUNCÃO SEM RETORNO SEM PARAMETRO

/*
    Crie uma função que adicione o seguinte texto no JS: Bem-vinde ao meu site. Este texto foi inserido através de uma função.
*/

/*

function adicionarTexto (){
    console.log(' Bem-vinde ao meu site. Este texto foi inserido através de uma função.')
}


adicionarTexto ()
*/

/*
function adicionarTexto (){
    document.write(' Bem-vinde ao meu site. Este texto foi inserido através de uma função.')
}


adicionarTexto ()
*/


//----------- ESCOPO GLOBAL X LOCAL ----------

//--- GLOBAL 

/*
let novoCurso = prompt('Digite um curso novo para adicionar no banco de dados')

function adicionarCursoNoBanco(){
    console.log(novoCurso )
}

adicionarCursoNoBanco()
*/



//--- LOCAL = Vegas "O que acotece em vegas fica em vegas"

/*
function treinar (){
    let mensagem = 'Negativa Bambam negativa. Vamo monstro!'
    console.log(mensagem)
}

treinar ()
*/

//console.log(`Essa é a mensagem ${mensagem}`)



//----------- EX EXTRA------------

/*

    Crie uma função para cada item que peça para pessoa usuária um número e imprima de acordo com os tópicos  :  

    a-) O numero pedido 
    b-) Os numeros pares maiores que 10
    c-) Todos os números de zero ao número passado 
    d-) Insira 5 vezes em uma lista os 5 numeros passados
    e-) armazena na lista 5 números e retorne o número cujo o indice é 3 
    f-) Armazene uma lista de 5 números e multiplique todos os números por 3
    


*/






// ---------------- FIND INDEX ----------------

// Pegar o indice do primeiro elemento que corresponder a condicao determinada 

/*
Array.findIndex(function(elemnto){
    //condicao que estou analisando 
})
*/

/*

const fruteira =['Cereja', 'Bananinha', 'Ameixa', 'Goiaba', 'Abacaxi', 'Melao', 'Melancia', 'Mamao']

let indiceDaFruta = fruteira.findIndex((fruta)=> fruta == 'Bananinha')

console.log(` O indice da fruta é ${indiceDaFruta}`)


DESAFIO : Transforme o código em uma função
*/ 

/*

const fruteira =['Cereja', 'Bananinha', 'Ameixa', 'Goiaba', 'Abacaxi', 'Melao', 'Melancia', 'Mamao']

let frutaSelecionada = prompt('Digite a fruta deseja para saber a posicao da fruta em nossa fruteira')


let indiceDaFruta = fruteira.findIndex((fruta)=> fruta == frutaSelecionada)

if(indiceDaFruta == -1){
    alert('Não temos essa fruta na fruteira, vamos adicionar')

    console.log(frutaSelecionada)

    let novaFruta = fruteira.push(frutaSelecionada)
    console.log(` O indice da fruta é ${novaFruta}`)
}

console.log(` O indice da fruta é ${indiceDaFruta}`)

*/

// ---------------- FIND  ----------------

/*
array.find(function(elemento){
    // condicao da busca 
})
*/


/*
let presencas =['Adriano Fernandes', 'Luciano','Dionata', 'Mateus', {nome:azul , idade :40 , nascimento: 1984}, 'Hugo','Eduardo', 'Adriano Santos','cristiane', 'Fayra','Wilson', 'Yuri', 'Rafael', 'Talia Lamper', 'Gabriel', 'H E N R I Q U E', 'Gabriel' ]

let buscapresenca = presencas.find((nome)=> nome == 'Fayra')

console.log(buscapresenca)
*/


let presencas =['Adriano Fernandes', 'Luciano','Dionata', 'Mateus', 'Hugo', 'Hugo Luiz','Eduardo', 'Adriano Santos','cristiane', 'Fayra','Wilson', 'Yuri', 'Rafael', 'Hugo Henrique', 'Talia Lamper', 'Pedro Hugo','Gabriel', 'H E N R I Q U E', 'Gabriel' ]

// find => Pega só o primeiro que atende a condicao

// findIndex => Pegar o indice (posicao) do elemento que atende a condicao 

// filter => Olhar o array e retornar um array menor ou igual o inicial  => Pegar vários que atende a condicao 

/*
const nomePesquisado = presencas.filter((nomePessoa)=> nomePessoa === 'Hugo')

console.log(nomePesquisado)
*/

// map => Mapear e aplicar a alteracao para todos os elementos do array ,. Portanto, retorna um array com a mesma de elemento do array inicial 


/*

let numeros = [2,3,4,5,6,7,8,9,10]

let numeroMapeado  = numeros.map((numero)=> numero *2)

console.log(numeroMapeado)

*/












