console.log ('Salve Turma!')

//------------ REVISÃO --------------- 



/*
let arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12]

for (let i = 0; i < arrayNumeros.length; i++) {
    console.log(arrayNumeros[i])
}


const arrayNomes = ["João", "Maria", "Pedro", "Ana"]

for (let i = 0; i < arrayNomes.length; i++) {
    console.log(arrayNomes[i]);
}

console.log(arrayNumeros[1])
console.log(arrayNumeros.length)
console.log(arrayNumeros[arrayNumeros.length-1])
*/



//------------ OBJETOS ---------------

//inicializando 
/*
let computador ={}
let pessoa ={}
let carro ={}
*/


// criando um novo objeto
let computador ={
    //chave : valor
    memoria:8,
    armazenamento:250,
    modelo:'Positivo',
    processador: "Celeron"
}

let pessoa ={
    nome : "Fayra",
    cpf: 12345678910,
    altura: 1.65,
    peso: 65,
    genero: 'feminino'
}

let carro ={
    modelo :"Gol Bolinha",
    marca : "Volkswagen",
    potencia : 450,
    cor : "preto",
    quantidade_portas: 2
}


// lendo os dados do objeto nome_obeto.propriedade 

//console.log(`O nome da pessoa é ${pessoa.nome}`)
//console.log(`O modelo do computador é : ${computador.modelo}`)
//console.log( `A quantidade de portas é : ${carro.quantidade_portas}`)


//------------ MANIPULAR OBJETOS ---------------

//Inserir uma nova propriedade no objeto

pessoa.orgao = 'coração'
pessoa.curso = 'Web full-stack'
computador.cor = 'preto'
carro.roda = 'liga leve'

//console.log(computador)
//console.log(pessoa)
//console.log(carro)


// Mudar o valor da propriedade 

pessoa.peso = 62
computador.memoria = 10
carro.potencia = 1200
carro.modelo = 'Uno'

//console.log(pessoa)
//console.log(computador)
//console.log(carro)


// Criar um novo objeto baseado em outro

/*

    carro criar => 

    CARRO 2
        modelo :"911",
        marca : "Porshe",
        potencia : 450,
        cor : "preto",
        quantidade_portas: 2

    CARRO 3
        modelo :"Fusca",
        marca : "Volkswagen",
        potencia : 2,
        cor : "azul",
        quantidade_portas: 2

    CARRO 4
        modelo :"c4",
        marca : "Citroen",
        potencia : 12,
        cor : "vermelho",
        quantidade_portas: 3
    
*/

console.log ('Esse é o carro 1',carro)

let carro2 = {...carro}

//console.log('Esse é o carro 2 ',carro2)

carro2.modelo ="911"
carro2.marca = "Porshe"
carro2.potencia = 450
carro2.cor = "preto"
carro2.quantidade_portas= 2

console.log('Esse é o novo carro 2 ',carro2)

//----------

let carro3 = {...carro}

//console.log('Esse é o carro 3 ',carro3)

carro3.modelo = "Fusca"
carro3.marca = "Volkswagen",
carro3.potencia =  12,
carro3.cor = "azul",
carro3.quantidade_portas= 2

console.log('Esse é o novo carro 3 ',carro3)


//----------

let carro4 = {...carro}

//console.log('Esse é o carro 4 ',carro4)

carro4.modelo = "c4"
carro4.marca = "Citroen",
carro4.potencia =  2,
carro4.cor = "veremlho",
carro4.quantidade_portas = 3

console.log('Esse é o novo carro 4 ',carro4)


//------------ MANIPULAR OBJETOS EM ARRAYS ---------------

//inserir um objeto no array 

let listaDecarros = [] 
console.log(listaDecarros)

listaDecarros.push(carro)
console.log(listaDecarros)

listaDecarros.push(carro2, carro3,carro4)

console.log(listaDecarros)

// Imprimir itens do array 

console.log(listaDecarros[1])


//----------------------- FOR  -----------------------

//- Quantidade de iteracoes 
// Foca no indice e nao no próprio elemento em si

/*
for(let i = 0; i<listaDecarros.length; i++){
    let item = listaDecarros[i]
    console.log('Essa é a variável carro',item)
    console.log(`Os carros que temos em nosso sistem são ${item.modelo}`)
}
*/


//----------------------- FOR OF -----------------------

/*

for(const ITEM of ARRAY){
    //TRECHO CÓDIGO QUE QUEREMOS QUE SE REPITA.
}
*/ 

/*
for(const item of listaDecarros){
    console.log(`Os carros que temos em nosso sistem são ${item.modelo}`)
}
*/

//----------------------- FOR  EACH  -----------------------

/*
array.forEach((item)=>{
    // o que queremos que faça o nosso código
})
*/

listaDecarros.forEach((item)=>{
    console.log(`Os carros que temos em nosso sistem são ${item.modelo}`)
})


//----------------------- EX PRÁTICO  -----------------------

/* 


Vamos criar um programa para gerenciar os animais de zoologico. Para isso considere os itens a baixo : 

a-) Crie uma lista para armazenar os animais 
b-) Crie um novo animal com as seguintes propriedades : nome, cor, peso, pais_origem, alimentacao, idade
c-) Crie 5 animais a partir de uma cópia do animal do item anterior ; 
d-) Guarde esses animais na lista de animais ;
e-) Mude o nome do terceiro animal e do quarto;
f-) Imprima as informacoes do segundo animal da lista.
g-) Imprima os dados atualizados do terceiro animal da lista




*/
