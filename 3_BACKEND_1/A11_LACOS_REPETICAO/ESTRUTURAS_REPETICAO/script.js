console.log('Hello world')

//------------ IF ELSE ----------

/*

 IF SIMPLES 

    if (condição) {
        // Instruções a serem executadas se a condição for verdadeira
    } else {
        // Instruções a serem executadas se a condição for falsa
    }

-------

IF ANINHADO 

if (condição1) {
  // Instruções a serem executadas se a condição1 for verdadeira
} else if (condição2) {
  // Instruções a serem executadas se a condição2 for verdadeira
} else {
  // Instruções a serem executadas se nenhuma das condições for verdadeira
}

*/

//------------ SWITCH --------------

/* 

    switch (expressao) {
        case valor1:
            // código a ser executado se expressao for igual a valor1
         break;
        case valor2:
            // código a ser executado se expressao for igual a valor2
        break;
            // mais casos podem ser adicionados aqui
        default:
            // código a ser executado se nenhum dos casos acima for correspondido
    }

*/

//----------- OPERADORES -----------

/*

++ => Operador de incremento 

let numero = 10
numero ++ // igual a 11 

//----------------------------


-- => Operador de decremento 
let numero = 10
numero -- // igual a 9

//----------------------------

// Atribui o valor 10 à variável numero, somando 1
numero += 10;

//----------------------------

// Atribui o valor 10 à variável numero, subtraindo 1
numero -= 10;

//----------------------------

// Atribui o valor 10 à variável numero, multiplicando por 2
numero *= 2;

//----------------------------

// Atribui o valor 10 à variável numero, dividindo por 2
numero /= 2;
*/ 


//----------- WHILE ----------------

/*

CONTADOR : Variável que é usada para manter o controle da sequência de eventos, muito usado em laços para controlar a quantidade de vezes que o laço será executado. 

    - Geralmente, o contador é chamado de i 

    while (condição) {
        // Instruções a serem executadas enquanto a condição for verdadeira
    }
*/  

/*
    let contador = 1
    let numeroDegrau= Number(prompt('Digite a quantidade de degraus'))

    while (contador <= numeroDegrau) {
        console.log("Subi o degrau de número : ", contador)
    contador++
    }
*/

//------------ DO WHILE -----------

/*
    do {
        // Instruções a serem executadas
    } while (condição);

*/ 


/*
    let contador = 1
    let quantidadeDeBoletos = Number(prompt('Quantos boletos você terá que pagar '))

    do {
      console.log(`O boleto ${contador}, foi pago! Um a menos`)
        contador++;
    } while (contador <= 10);
*/


//------------ FOR ----------------

/*

    for (inicialização; condição; iteração) {
        // Instruções a serem executadas
    }

*/ 

/*

let contador = 1
let numeroAbdominal = Number(prompt('Qual a quantidade de abdominal que você fará ?'))


for (contador = 1; contador <= numeroAbdominal; contador++) {
  console.log("Abdominal número", contador)
}

console.log("De hoje tá pago!")

*/

//------------ EXERCICIO 1 - WHILE  -----------

//------------ EXERCICIO 2 - FOR -----------