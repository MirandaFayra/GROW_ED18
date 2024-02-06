//console.log('Salve turma')

//console.log('Vou explicar agora um pouco sobre script e pacjage.json')

/*
    Crie um novo package.json e um arquivo somaNumeros.js .
    Crie um script personalizado chamado soma. Passe os
    números 5 e 10 como argumentos e imprima a somatória
    desses dois números no terminal.
*/ 

const somarNumeros =(numero1,numero2)=>{
    let soma = ( numero1 + numero2 )
    console.log(`A somatória dos números é : ${soma}`)
}

somarNumeros(5,10)