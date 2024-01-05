console.log("Hello world!")

//-------- REVISÃO -----

/*
    while(condicao ){
        // instrucao que deve seguir caso a cond for verdadeira
    }

    do{
         // instrucao que deve seguir 
    }while(condicao a ser verificada){
        // instrucao que deve seguir caso a cond for verdadeira
    }

    for (incialização (contador) ; condicao; expressa final (increment | dec) ){
        // o que você deseja executar
    }


    numero ++ => adicionar - incremento
    numero -- => subtrair - decremento

    === / ==
*/

// ------- IGUALDADE ESTRITA ----- 

let comparacao1 = ('2'=== 2)
let comparacao2 = ( 2 === 2)
let comparacao3 = ('2'!== 2)
let comparacao4 = ( 2 !== 2)

//-------- COMPARANDO LÓGICA ------

//let resultadoComparacao1 = comparacao1
let resultadoComparacao2 = comparacao2
let resultadoComparacao3 = comparacao3

//console.log(resultadoComparacao1)
//console.log(resultadoComparacao2)
//console.log(resultadoComparacao3)

let comparacao8 = (comparacao2 || comparacao3)

let comparacao5 = (comparacao1 && comparacao2)

let comparacao6 = (comparacao1 || comparacao2)

let comparacao7 = (comparacao2 && comparacao3)



//console.log(`Esse é o resultado da comparacao 1: ${comparacao1}`)

//console.log(`Esse é o resultado da comparacao 2: ${comparacao2}`)

//console.log(`Esse é o resultado da comparacao 3: ${comparacao3}`)

//console.log(`Esse é o resultado da comparacao 4: ${comparacao4}`)

//console.log(`Esse é o resultado da comparacao 5: ${comparacao5}`)

//console.log(`Esse é o resultado da comparacao 6: ${comparacao6}`)

//console.log(`Esse é o resultado da comparacao 7: ${comparacao7}`)

//console.log(`Esse é o resultado da comparacao 8: ${comparacao8}`)


// ------- IGUALDADE NÃO ESTRITA ----- 

let comparacao9 = ('2'== 2)
let comparacao10 = ( 2 == 2)
let comparacao11 = ('2'!= 2)
let comparacao12 = ( 2 != 2)


//console.log(`Esse é o resultado da comparacao 9: ${comparacao9}`)

//console.log(`Esse é o resultado da comparacao 10: ${comparacao10}`)

//console.log(`Esse é o resultado da comparacao 11: ${comparacao11}`)

//console.log(`Esse é o resultado da comparacao 12: ${comparacao12}`)


// ------- DIVIDINDO VALORES E RETORNANDO NÚMEROS INTEIROS ----- 

// A função Math.floor(x) retorna o menor número inteiro dentre o número "x".

// Math.floor(x)


let numero = Number(prompt("Insira um número: "));


let numeroArredondado = Math.floor(numero);


console.log("O número arredondado é: " + numeroArredondado);

