window.onload= function ( ){

//------------ DOM ------------- 

/*
    Document Object Model : interface de programação que representa a estrutura hierarquica do documento;

    - Representado no Formato de Árvore

    - Cada elemento HTML é chamado de nó 

    - Raiz da árvore : Document => Ponto para acessar os outros elementos ; 

*/

//console.log('Olá turma')

//------------ GET ELEMENT BY ID ------------- 

/* 
    Seleciona um elemento por ID 

    let elemento = document.getElementById('id DoElemento selecionado');

*/

let paragrafoModificado = document.getElementById('meu-paragrafo')


//console.log(paragrafoModificado)
//console.log(pegarSpan)

paragrafoModificado.textContent = 'Esse conteúdo foi modificado pelo DOM'

//------------ GET ELEMENT BY CLASS NAME ------------- 

/* 
    Seleciona um elemento pela classe

    let elementos = document.getElementsByClassName('classe DoElemento selecionado');

*/

let  elementoDestaque = document.getElementsByClassName('destaque')
//console.log(elementoDestaque)

for(let i =0 ;i< elementoDestaque.length;i++){
    elementoDestaque[i].style.background = 'lightgreen'
}

//------------ GET ELEMENT BY TAG NAME ------------- 

/* 
    Seleciona um elemento pela tag

    let elementos = document.getElementsByTagName('nomeDaTag');

*/


let spanComDom = document.getElementsByTagName('span')
//console.log(spanComDom)

for(let i =0 ;i< spanComDom.length ;i++){
    spanComDom[i].style.color= 'crimson'
}

//------------ ONCLICK ------------- 

/* 
    Evento chamado quando a pessoa usuária clica  em algo 

*/

/* 
function addEstudante (){

}
*/

let contadorElemento = document.getElementById('contador')

const addEstudante = ()=>{
    //console.log('Cliquei aqui')
    let valorAtual = parseInt(contadorElemento.textContent)
    valorAtual ++ 
    contadorElemento.textContent = valorAtual
}

const removeEstudante =() =>{
    let valorAtual = parseInt(contadorElemento.textContent) 
    valorAtual -- 
    contadorElemento.textContent = valorAtual
}




//------------ QUERY SELECTOR  ------------- 

/* 
    Seleciona o primeiro elemento que corresponde um seletor CSS especificado 

   let elemento = document.querySelector('seletorCSS');


*/

let paragrafoDestacado = document.querySelector('.destacado')

paragrafoDestacado.style.color='blue'
paragrafoDestacado.style.fontWeight = 'bold'


//------------ GET ATRIBUTE  ------------- 

/* 
    Pega um valor de atributo, especifico de um elemento DOM . 

   let valorDoAtributo = elemento.getAttribute('nomeDoAtributo');

*/

let minhaDiv = document.getElementById("minhaDiv")
let  valorInfo = minhaDiv.getAttribute('data-info')
console.log(valorInfo)
let informacaoExibida = document.getElementById("infoExibida")

informacaoExibida.textContent = 'Informação Exibida - ' +  valorInfo 


//------------ INNER TEXT  ------------- 

/* 
    Obtem ou define o conteúdo de texto de um elemento , retorna apenas o 
    texto visivel ao usuário dentro do elemento.

   let textoObtido= elemento.innerText
    elemento.innerText = 'Novo texto';

*/


let pegandoTextoFooter = document.getElementById("ifo-footer")

let conteudoTexto = pegandoTextoFooter.innerText

console.log('Esse é um conteúdo com Inner Text',conteudoTexto)

//------------ INNER HTML  ------------- 

/* 
   Obtem ou definir o conteúdo HTML de um elemento. 
   
   Permite manipular todo o conteúdo HTML dentro de um elemento, incluindo tags HTML e seus atributos.

   let conteudoHTML = elemento.innerHTML
    elemento.innerHTML = '<p>Novo conteúdo HTML</p>'

*/

let conteudoHTML = pegandoTextoFooter.innerHTML
console.log('Esse é um conteúdo com Inner HTML',conteudoHTML)


//------------ SET ATTRIBUTE  ------------- 

/* 
    Usado para modificar dinamicamente o atributo .

    let conteudoHTML = elemento.innerHTML
    elemento.innerHTML = '<p>Novo conteúdo HTML</p>';

*/

let  elemento = document.getElementById("usando-set")
let elementoSetado = elemento.setAttribute('class', 'classe-setada')


//------------ CREATE ELEMENT ------------- 

/* 
    Criar um novo elemento dinamicamente

    let novoElemento = document.createElement('nomeDaTag')

*/

let novoParagrafo = document.createElement('p')
novoParagrafo.textContent = 'Este é um patragrafo criado pelo DOM'


//------------ APPEND CHILD ------------- 

/* 
    Adiciona um elemento, como filho de outro elemento 

    document.ELEMENTO_PAI.appendChild(NOVO_ELEMENTO)

*/

document.body.appendChild(novoParagrafo)

//------------ REMOVE CHILD ------------- 

/* 
    Retira um elemento, que é filho de outro elemento 

    document.ELEMENTO_PAI.removeChild(NOVO_ELEMENTO)

*/

document.body.removeChild(novoParagrafo)



}
