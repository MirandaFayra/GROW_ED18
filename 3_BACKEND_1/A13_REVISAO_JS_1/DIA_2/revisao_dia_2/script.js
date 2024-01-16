console.log('Olá turma !')


/* WHILE 

- WHILE: Usado quando não sabemos quantas vezes um determinado bloco de instrução prcisa ser repetido.

- Só executa se a condição for verdadeira 


while (condição verificada){
    //comandos que serão executados enquanto condição verificada for igual a verdadeiro (true)
}

*/


//------------------  EXERCICIO 1 WHILE --------------------

// Imprimir um número de 1 a 10 

/*

let contador = 1

while(contador <= 10){
    //bloco de código que roda se a condicao for verdadeira
    console.log(contador)
    contador ++
}

*/

//------------------  EXERCICIO 2 WHILE --------------------

// Pergutar um número para pessoa usuária e imprimir do zero ao número perguntado 
/*
let numeroPerguntado = Number(prompt('Digite o número que você deseja verificar'))

let contador = 0

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

while(contador <= numeroPerguntado){
    console.log(contador)
    contador ++
}
*/


//------------------  EXERCICIO 3 WHILE --------------------

/* Faça um programa que pergunte para a pessoa usuário um número desejado , e pergunte sim ou não se deseja imprimir o número. Caso a resposta escolhida seja sim, imprimir o número de zero até o número. Se a resposta escolhida for não dar a seguinte mensagem : "Você não digitou nenhum número"

*/ 

/*
let numeroDesejado = Number(prompt('Digite o número que você deseja imprimir '))

let desejaImprimir = confirm(`Deseja imprimir de zero ao ${numeroDesejado}`)


let contador = 0 

console.log(desejaImprimir) // funcionamento do confirm 

if (desejaImprimir === true) {
    while(contador <= numeroDesejado){
        console.log(contador)
        contador ++
    }
} else {
    console.log("Você não digitou nenhum número")
}

*/
/*

- To lower case  e To upper Case

let desejaImprimir = prompt(`Deseja imprimir de zero ao ${numeroDesejado} ? Sim ou Não`).toLowerCase()


if (desejaImprimir === 'sim') {
    while(contador <= numeroDesejado){
        console.log(contador)
        contador ++
    }
} else {
    console.log("Você não digitou nenhum número")
}
*/

/*

- Verificar o número 
- If aninhado 
- typeof e passar letaras 

if(numeroDesejado > 0 && numeroDesejado<=50){
    if (numeroDesejado && numeroDesejado !==2) {
        while(contador <= numeroDesejado){
            console.log(contador)
            contador ++
        }
    } else if(numeroDesejado === 2) {
       console.log('Caiu aqui no caso do 2')
    } else {
        console.log("Você não digitou nenhum número")
    }
}else{
    console.log(typeof(numeroDesejado))
    alert('O número deve estar entre 0 e 50')
}
*/



//------------------------------------------------------

/* DO WHILE 

- DO WHILE:Parecido com o while, porém quando utilizamos eles desejamos executar o comando executado ao menos uma vez


do{

    //condição ser executado pelo menos uma vez

} while (condicao);

*/

//------------------  EXERCICIO 1 DO WHILE -----------------

// Pergutar um número para pessoa usuária e imprimir do zero ao número perguntado 

/*
let numeroPerguntado = Number(prompt('Digite o número que você deseja imprimir '))

let contador = 0 

do{
    console.log(contador)
    contador ++

}while (contador <= numeroPerguntado)
*/

//------------------  EXERCICIO 2 DO WHILE -----------------



//------------------------------------------------------

/* FOR 

- FOR: Laço utilizado para repetir uma instrução por um número definido de vezes. 

for (inicialização; condição; expressãoFinal) {
  // instruções a serem executadas repetidamente
}

- Inicialização : Expressão executada antes da execução do primeiro laço (geralmente o contador)

- Condição : Verificada a cada interação antes da execução do laço. Se for verdadeira as instruções o trecho de código será executado . 

- Expressão Final : Executado a cada interação do laco (geralmente usado para incrementar o contador)


*/

//------------------  EXERCICIO 1 FOR -----------------

// Pedir um número para a pessoa usuária e imprimir a somatória dos números (do zero ao número em si)

/*
let soma = 0 
let numeroParaSoma = Number(prompt('Digite um número que você deseja somar'))

for(let i = 0 ; i <= numeroParaSoma ; i++){
    soma += i
}
console.log(soma)
*/


//------------------  EXERCICIO 2 FOR -----------------

// Peça um número para pessoa usuária  e imprima de zero a esse número 


let numeroPedido = Number(prompt('Digite um número  a ser impresso'))

let contador = 0

for (contador ;contador <= numeroPedido;contador ++ ){
    console.log(contador)
}