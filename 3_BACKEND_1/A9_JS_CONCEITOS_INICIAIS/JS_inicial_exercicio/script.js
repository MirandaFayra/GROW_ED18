console.log('Olá mundo');


let nota1 = 7
let nota2 = 6 
let nota3 = 8 

const peso1 = 2 
const peso2 = 3 
const peso3 = 5 

let notaTotal = nota1*peso1 + nota2*peso2 + nota3*peso3 

let mediaPonderada = (notaTotal) / (peso1 + peso2 + peso3)


if(mediaPonderada >= 7){
    console.log(mediaPonderada)
    console.log('Parabéns pela aprovação');
}else{
    console.log(mediaPonderada)
    console.log('Não foi dessa vez, estude mais ');
}


//------------- EXERCICIO 2 -----------------

// 1 ano = 365 dias 
// 1 ano = 12 meses 
// Pegar uma pessoa com 24 anos, 3 meses e 24 dias de idade 

let idadeDeAnos = 24 * 365 // Converte anos para dia 

let idadeDeMeses = 3*30 

let idadeDeDias = 24

let idadeEmDiasTotal = idadeDeMeses + idadeDeAnos + idadeDeDias

console.log(idadeEmDiasTotal);








