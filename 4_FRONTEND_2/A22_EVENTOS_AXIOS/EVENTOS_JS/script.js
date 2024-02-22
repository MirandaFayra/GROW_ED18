
//-------- ONCLICK ---------

/*
Funcao Normal 

function nomeFuncao(){

}
 -------
Arrow Function

let escopoGlobal = true

const nomeFuncao =()=>{
    let escopoLocal = false
}

console.log(escopoLocal)

*/ 


const eventoOnclick =()=>{
    document.getElementById('meuBotao')
    alert('Botão clicado!');
}


//-------- ADD EVENT LISTER ---------

const eventoListener =()=>{

    const meuBotao = document.getElementById('botao-escutado')

    function handleClick(event) {
      console.log('Evento de clique ocorreu!')
      console.log('Tipo do evento: ', event.type)
      console.log('Coordenadas do clique: ', event.clientX, event.clientY)
    }

    meuBotao.addEventListener('click', handleClick)
}

eventoListener()


//--------------- ON MOUSE HOUVER ------

function mudarCor() {
    document.getElementById('minha-div').style.background = 'lightblue'
}

//--------------- ON MOUSE OUT ------

function voltaCor() {
    document.getElementById('minha-div').style.background = 'transparent'
}

//--------------- ON KEY UP ------


function mostrarTeclaSolta(evento) {
    document.getElementById('infoTecla').innerText = `Tecla solta: ${evento.key}`;
}

//--------------- ON KEY DOWN ------

function mostrarTeclaPressionada(evento) {
    document.getElementById('infoTecla').innerText = `Tecla pressionada: ${evento.key}`;
}




