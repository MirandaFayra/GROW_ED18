console.log('Hello world')

/*

Criar um algoritmo para calcular a média de 3 notas e no final fazer as seguintes validações:

1. Se a média ficar entre 9 e 10 deve ser mostrado no html a mensagem: Aprovado com nota excelente

2. Se a média ficar entre 7 e 8 (não incluso) deve  ser mostrado no html a mensagem: Aprovado com uma nota boa

3. Se a média ficar abaixo de 7 deve ser solicitado uma outra nota que será a nota de recuperação.

4.	Se a nota de recuperação for maior que 6 deve ser mostrado a mensagem no html: Aprovado na recuperação


5.	Se a nota ficar abaixo de 6 deve ser mostrado a mensagem no html: Reprovado, estude e pratique mais.


*/

let nota1 = Number(prompt('Digite a sua primeira nota'))
let nota2 = Number(prompt('Digite a sua segunda nota'))
let nota3 = Number(prompt('Digite a sua terceira nota'))
let media = (nota1+ nota2 + nota3)/3

console.log(`A média é ${media.toFixed(2)}`)

if(media>=9 && media<=10 ){
    console.log("Aprovado com nota excelente")
}else if (media >= 7 && media < 9){
    console.log("Aprovado com uma nota boa")
}else if (media < 7 && media >=0 ){
    // Recuperação 
    let  notaRecuperacao = Number(prompt('Digite a nota da recuperação'))

    if(notaRecuperacao>=6){
        console.log("Aprovado na recuperação")
    }else{
        console.log("Reprovado, estude e pratique mais.")
    }
} else{
    alert('Digite notas de 0 a 10')
}

