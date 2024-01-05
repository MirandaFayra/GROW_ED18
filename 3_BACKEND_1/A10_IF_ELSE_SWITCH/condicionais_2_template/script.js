//------- IF ELSE -------------------

/*

    if (CONDIÇÃO ANALISADA) {
       // se for verdadeiro entra nesse bloco
    } else {
        // se não for verdadeiro entra nesse bloco
    }

*/ 

/*

    - SE a pessoa juntou R$ 5000 reais a mais ou mais o sistema de viagem fornecerá a seguinte mensagem  "Parabéns, você pode viajar internacionalmente"

    - SE NÃO juntar R$ 5000 reais ou mais  o sistema de viagem fornecerá a seguinte mensagem  "Infelizmente você não poderá viajar internacionalmente"

*/ 

/*
let dinheiroInvestido = Number(prompt("Digite a quantidade de dinheiro que você tem investido "))

if (dinheiroInvestido >= 5000) {
    console.log("Parabéns, você pode viajar internacionalmente");
}else{
    console.log("Infelizmente você não poderá viajar internacionalmente");
}
*/


//------- IF ELSE ANINHADO ----------

/*

    if (CONDIÇÃO ANALISADA 1) {
       // se for verdadeiro entra nesse bloco
    } else if (CONDIÇÃO ANALISADA 2) {
       // se for verdadeiro entra nesse bloco
    }else if (CONDIÇÃO ANALISADA 3) {
       // se for verdadeiro entra nesse bloco
    }else {
        // se não for verdadeiro entra nesse bloco
    }

*/ 

/*

    - SE a pessoa juntou R$ 5000 o sistema irá informar "Você irá para  Argentina"

    - SE a pessoa juntou R$ 6000 o sistema irá informar "Você irá para o México"

    - SE a pessoa juntou R$ 7000 o sistema irá informar "Você irá para Costa Rica"

    - SE a pessoa juntou R$ 10000 o sistema irá informar "Você pode ir para a Europa"

    - SE NÃO juntar R$ 5000 reais ou mais  o sistema de viagem fornecerá a seguinte mensagem  "Você viajará para o Brasil"

*/ 



    //let dinheiroInvestido = Number(prompt("Digite a quantidade de dinheiro que você tem investido "))
    
    /*
        Argentina = 5000 até 5999
        México = 6000 até 6999
        Costa Rica = 7000 até 9999
        Europa = 10000 ...
        Ficar no Brasil = menor que 5000
    */ 

    /*    
    if(dinheiroInvestido === 5000){
        console.log("Você irá para  Argentina");
    }else if (dinheiroInvestido === 6000){
        console.log("Você irá para o México");
    }else if (dinheiroInvestido === 7000){
        console.log("Você irá para Costa Rica");
    }else if (dinheiroInvestido === 10000){
        console.log("Você pode ir para a Europa");
    }else{
        console.log("Você viajará para o Brasil");
    }
    */




//------------ SWITCH CASE ----------

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

/*

    - SE a pessoa juntou R$ 5000 o sistema irá informar "Você irá para  Argentina"

    - SE a pessoa juntou R$ 6000 o sistema irá informar "Você irá para o México"

    - SE a pessoa juntou R$ 7000 o sistema irá informar "Você irá para Costa Rica"

    - SE a pessoa juntou R$ 10000 o sistema irá informar "Você pode ir para a Europa"

    - SE NÃO juntar R$ 5000 reais ou mais  o sistema de viagem fornecerá a seguinte mensagem  "Você viajará para o Brasil"

*/


/*
let dinheiroInvestido = Number(prompt("Digite a quantidade de dinheiro que você tem investido "))

switch (dinheiroInvestido) {
    case 5000:
        console.log("Você irá para  Argentina");
        break;
    case 6000:
        console.log("Você irá para o México");
        break;
    case 7000:
        console.log("Você irá para Costa Rica");
        break;
    case 10000:
        console.log("Você pode ir para a Europa");
        break;
    default:
        console.log("Você viajará para o Brasil");
}
*/


//------------ AND && ---------------

// AND => OS DOIS DEVEM SER VERDADEIRO

/*

    - SE a pessoa juntou mais de  R$2000 E MENOS R$ 5000 o sistema irá informar "Você irá para  Argentina"

    - SE a pessoa juntou maior igual a R$ 6000  e E MENOS R$ 7000 o sistema irá informar "Você irá para o México"

    - SE a pessoa juntou maior igual a R$ 7000 E MENOS DE R$ 10000  o sistema irá  informar "Você irá para Costa Rica"

    - SE a pessoa juntou igual ou mais que R$ 10000 o sistema irá informar "Você pode ir para a Europa"

    - SE NÃO juntar R$ 2000 reais ou mais  o sistema de viagem fornecerá a seguinte mensagem  "Você viajará para o Brasil"

*/


/*
let dinheiroInvestido = Number(prompt("Digite a quantidade de dinheiro que você tem investido "))


if(dinheiroInvestido >= 2000 &&  dinheiroInvestido <= 5000){
    console.log("Você irá para  Argentina");
}else if (dinheiroInvestido > 5000 && dinheiroInvestido <= 7000){
    console.log("Você irá para o México");
}else if (dinheiroInvestido > 7000 && dinheiroInvestido <= 10000){
    console.log("Você irá para Costa Rica");
}else if (dinheiroInvestido >= 10000){
    console.log("Você pode ir para a Europa");
}else{
    console.log("Você viajará para o Brasil");
}

*/

//------------ OR || ---------------

// OR => PELO MENOS UM SER VERDADEIRO

/*

Escolheremos o plano de seguro viagem, de acordo com o local que vamos viajar 


 SE formos para Argentina OU Brasil , deveremos dar a seguinte mensagem "O seu seguro deverá ser Mercosul "

 SE formos para México OU Costa Rica , deveremos dar a seguinte mensagem "O seu seguro deverá ser Centro América "

 SE formos para Europa OU Estados Unidos, deveremos dar a seguinte mensagem "O seu seguro deverá ser black Europa-América "" 

 SE não for nenhuma das opções ,  deveremos dar a seguinte mensagem "Nosso seguro não cobre essa região"

*/



let paisVisitado = prompt("Digite a letra de qual dos paises você vai : Argentina (A) | Brasil (B) | México (M) | Costa Rica (C) | Europa(E) | Estados Unidos (S)").toLocaleUpperCase()


if(paisVisitado === "A" ||  paisVisitado === "B"){
    console.log("O seu seguro deverá ser Mercosul");
}else if (paisVisitado === "M" ||  paisVisitado === "C"){
    console.log("O seu seguro deverá ser Centro América");
}else if (paisVisitado === "E" ||  paisVisitado === "S"){
    console.log("O seu seguro deverá ser black Europa-América ");
}else{
    console.log("Nosso seguro não cobre essa região");
}

