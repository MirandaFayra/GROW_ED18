console.log("Olá mundo!")

//----------- ARRAY -------------- 

/*

ARRAY => LISTA DE INFORMACOES , manipulando pelo 
index (onde o o elemento está => posição)


let arrayDeNumero = [10,50,30,60]

posicao 0 = 10 
posicao 1 = 50 
posicao 2 = 30 
posicao 3 = 60 


let pessoasFilme = ["Dough", Fayra", "João", "Maria"]

posicao 0 = Dough
posicao 1 = Fayra 
posicao 2 = João
posicao 3 = Maria 

let numerosMega =[ 5, 10, 29, 6, 30,42]

posicao 0 = 5
posicao 1 = 10
posicao 3 = 6
posicao 5 = 42


Push => coloca no final 
pop => tira vc do fim 
unshift => coloca voce na posicao zero - primeiro lugar 
shift =>  retirar o primeiro elemento
POP / SHIFT  => não passa o que vc quer tirar 

ULTIMO => POP | PUSH 
PRIMEIRO => SHIFT | UNSHIFT 
RETIRAR => array.pop() | array.shift()
COLOCAR => array.push('colocar') | array.unshift('colocar')

i / j => contador variavel que permite percorrer o laço 

Como array começa do zero , inicializar o contador com 1 para não ignorar o elemento de indice 0


FOR 0F => laço de repetição não se precupar com o indice do elemento 

*/

/*

    Array é : é uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave. 

    Estrutura do Array 

    let nomeDoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    A-) Para imprimir o primeiro elemento do array (sempre será o elemento com indice zero) 

    console.log(nomeDoArray[0]) 

    -------

    B-) Para saber o tamanho do array 
    nomeDoArray.lenght()

    ------- 

    C-) Podemos imprimir o ultimo elemento, sem precisar saber a quantidade de itens . Para isso, usamos o tamanho total do array - 1 

    let nomeDoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(nomeDoArray[nomeDoArray.length - 1])


*/

// 1. Criando um array 

//let nomeDoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] 

// 2. Imprimir um elemento pelo o indice dele 

//console.log(nomeDoArray[0]) 
//console.log(nomeDoArray[1]) 
//console.log(nomeDoArray[6]) 

// 3. Imprimindo primeiro elemento do array (sempre será o elemento com indice zero) 

//console.log(nomeDoArray[0]) 


// TAmanho do array é a quantidade de elementos do array 

//let tamanhoArray = nomeDoArray.length
//console.log(tamanhoArray)

//let indexUltimoElementoDoArray = nomeDoArray.length - 1
//console.log(indexUltimoElementoDoArray)

// 4. Imprimir o último elemento sem saber o indice
//console.log(nomeDoArray[nomeDoArray.length - 1])


//------------------- MÉTODOS ---------------- 

// array.push(): adiciona um elemento ao final de um array.

//nomeDoArray.push(29)
//console.log(nomeDoArray)


// array.pop(): remove o último elemento de um array.

//nomeDoArray.pop()
//console.log(nomeDoArray)


// array.unshift():Adiciona um elemento no inicio do array 

//nomeDoArray.unshift(42)
//console.log(nomeDoArray)

// array.shift(): Retira um elemento no inicio do array 

//nomeDoArray.shift( )
//console.log(nomeDoArray)

// FOR PODEMOS PERCORRER O ARRAY 


//let nomeDoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]  

//for (let i = 0; i < nomeDoArray.length; i++) {
  //console.log(nomeDoArray[i]);
//}

// FOR  OF PODEMOS PERCORRER O ARRAY SEM SE PREOUCUPAR COM O INDICE DO ELEMENTO 

//for (const numero of nomeDoArray) {
    //console.log(numero);
//}

//----------------- EXERCICIO 1 -----------------



//Crie uma lista com 5 resoluções/metas de ano novo. E faça os exercícios a seguir . 

//let listaResolucaoAnoNovo = ['Fazer dieta certinho, e comer mais proteina', 'Terminar o curso da growdev 100%, e conseguir um emprego', 'ler 3 livros por mês ', 'Investir mais em renda variável já que taxa de juros baixou', 'Ganhar na loto']


//a-) Imprima a primeira resolução de ano novo da lista.

//console.log(listaResolucaoAnoNovo[0])

//b-) Imprima a última resolução de ano novo da lista. 

//console.log(listaResolucaoAnoNovo[4])

//c-) Agora imagine que você deseja fazer uma lista com várias resoluções, crie um código que possa imprimir o último elemento sem ser pelo o indice. 

//listaResolucao = [ primeira, segunda, terceira, quarta, quinta]

// primeira = tá posicao 0 
// segunda = tá posicao 1
// terceira = tá posicao 2
// quarta = tá posicao 3
// quinta = tá posicao 4

// imprimir o elemento em uma determinada posicao 

// console.log(nomeDoArray[indice_do_elemento_a_ser_impresso])

// Quando você não sabe o tamanho do array , -1 pq começa do indice zero 
// console.log(nomeDoArray[tamanho_do_array - 1])
// Refatorando  console.log(nomeDoArray[nomeDoArray.lenght - 1])

//console.log(listaResolucaoAnoNovo[listaResolucaoAnoNovo.length -1])


//d-) Imprima cada uma das resoluções juntamente com o seguinte texto " Você consiguirá : resolução "
/*

for(inicializando;condicao;expressao finalizacao ) {
  console.log()
}
*/

/*

for(let i = 0;i <listaResolucaoAnoNovo.length;i++) {
  console.log(listaResolucaoAnoNovo[i])
}

*/ 

// O que é a lista resolucao ? => Junção de resoluções => 

// lista resolucao = [resolucao 1, resolucao 2, resolucao 3, resolucao 4, resolucao 5]

/*
for(let resolucao of listaResolucaoAnoNovo){
  console.log(resolucao)
}

*/ 

/*

for(let item of listaResolucaoAnoNovo){
  console.log(item)
}


for(let i = 0;i <listaResolucaoAnoNovo.length;i++) {
  console.log(listaResolucaoAnoNovo[i])
}

*/ 


//----------------- EXERCICIO 2 -----------------

/*

Crie uma lista de conteúdos que serão aprendidos na formação. 


a-) Adicione um novo conteúdo no final dessa lista . E imprima o array alterado . 

b-) Adicione um novo conteúdo no inicio dessa lista . E imprima o array alterado . 

c-) Retire o conteúdo no final dessa lista . E imprima o array alterado . 

d-) Retire o conteúdo no inicio dessa lista . E imprima o array alterado .  

*/

let listaConteudos = ['Js', 'HTML', 'CSS', 'React', 'Node']

// a
listaConteudos.push('TS')
//console.log(listaConteudos)

// b
listaConteudos.unshift('Node')
//console.log(listaConteudos)

// c

listaConteudos.pop()
//console.log(listaConteudos)

// d

listaConteudos.shift()
//console.log(listaConteudos)



//----------------- EXERCICIO 3 -----------------

/*


Crie um array de idades, com 8 idades e faça as seguintes operações : 

a-) O ano mudou e todas as pessoas envelheceram um ano. Imprima as novas idades 

b-) Fomos para outo planeta e a idade lá ao invés de acrescentar um ano, ela dobra. Imprima as novas idades . 

c-) Queremos saber a soma das idades . Imprima a somatória 

*/

let idades = [20, 30, 45, 50, 60, 1, 26, 32, 42]

// a

/*

a-) O ano mudou e todas as pessoas envelheceram um ano. Imprima as novas idades 

for(let idadeAtual of  idades) {
  console.log(idadeAtual + 1)
}

*/ 


/*

for(let i =0; i< idades.length; i++){ 
  console.log(idades[i] + 1)
}

*/

//b-) Fomos para outo planeta e a idade lá ao invés de acrescentar um ano, ela dobra. Imprima as novas idades .

/*

for(let i = 0; i < idades.length; i++) {
  console.log(idades[i] * 2)
}

*/

//c-) Queremos saber a soma das idades . Imprima a somatória  

let soma = 0 

/*
for(let i = 0; i < idades.length; i++) {
  soma += idades[i]
}

console.log(soma)

*/

/*

let somaTotal = 0

for(somaTotal of idades){
  soma += somaTotal
}
console.log(soma)
*/ 



