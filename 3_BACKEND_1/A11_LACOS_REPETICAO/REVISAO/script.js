// ----------------- EXERCICIO 1 --------------

/*
    a-) Peça um número para a pessoa usuária , e imprima os números
    que são pares dentro do intervalo de 0 até o número inserido pela a
    pessoa usuária.

    b-) Refatore o programa, e adicione a impressão dos números
    pares que são maiores que 25 ou menores que 75
*/ 


// a-) 

/*

let numeroSolicitado = Number(prompt('Digite um número'))
let contador = 0

while(contador <= numeroSolicitado) {
    console.log(contador ++)
}

*/

// b-) 

/*

// Números pares 

let numeroSolicitado = Number(prompt('Digite um número'))
let contador = 0

while(contador < numeroSolicitad ) {
    if(contador % 2 === 0){
        console.log(contador)
    }
    contador ++
}

// Números pares entre 25 e 75 

let numeroSolicitado = Number(prompt('Digite um número'))

for(let contador = 0; contador < numeroSolicitado; contador++) {
    if(contador % 2 === 0){
        console.log(contador)
    }
}

*/ 

/*

let numeroSolicitado = Number(prompt('Digite um número'))

for(let contador = 0; contador < numeroSolicitado; contador++) {
    if(contador % 2 === 0){
        console.log(contador)
    }
}

*/ 

/*

let numeroSolicitado = Number(prompt('Digite um número'))
let contador = 0

while(contador < numeroSolicitado) {
    let numerosPares = contador % 2 === 0
    let maioresQueVinteCinco = numerosPares &&  contador > 25
    let menoresQueSetentaCinco = numerosPares && contador<75
    
    if(maioresQueVinteCinco || menoresQueSetentaCinco ){
        console.log(contador)
    }
    contador ++
}

*/

/*

let numeroSolicitado = Number(prompt('Digite um número'))

if(numeroSolicitado > 25 ){
    
    for(let contador = 0; contador < numeroSolicitado; contador++) {
        if(contador % 2 === 0 && contador > 25 && contador < 75) {
            console.log(contador)
        }
    }
}else{
    alert('O número digitado deve ser superior a 25')
}

*/ 


// ----------------- EXERCICIO 2 --------------

/*

a-) Peça para a pessoa usuária um número , e imprima todos os números de 0 até o número solicitado.

b-) Refatore o programa , para que imprima todos os números de 0 até o número solicitado exceto os que são múltiplos de 5.
c-) Reescreva o programa utilizando um laço diferente do que você
usou anteriormente.

*/ 

/*

// a-) 

let numeroSolicitado = Number(prompt('Digite um número'))
let contador = 0

while(contador <= numeroSolicitado){
    console.log(contador )
    contador ++ 
}

*/ 

/* 

b-)

let numeroSolicitado = Number(prompt('Digite um número'))
let contador = 0

while(contador <= numeroSolicitado) {
    if(contador % 5 !== 0) {
        console.log(contador)
    }
    contador ++
}

*/

/* 
let numeroSolicitado = Number(prompt('Digite um número'))
let contador = 0

do {
    if(contador % 5 !== 0) {
        console.log(contador)
    }
    contador ++
} while(contador <= numeroSolicitado)

*/ 

/*

let numeroSolicitado = Number(prompt('Digite um número'))

for(let contador = 0; contador <= numeroSolicitado; contador++) {
    if(contador % 5 !== 0) {
        console.log(contador)
    }
}

*/