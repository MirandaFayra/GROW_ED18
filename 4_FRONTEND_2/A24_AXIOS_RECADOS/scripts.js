

const messagesContainer = document.getElementById('messagesContainer');

//----------- CRIAR MENSAGEM ------------

const createMessage = async (event) => {

    event.preventDefault()

    try {

        //Pegamos o valor dos dados vindos do input com o DOM

        const email = document.getElementById("createEmail").value
        const title = document.getElementById("createTitle").value
        const description = document.getElementById("createDescription").value


        //Armazenamos esses dados em uma variável p/ a requisao  

        const data = {
            email: email, 
            title: title,
            description: description
        }

        //Guardamos os dados no Localstorage

        localStorage.setItem('dadosEnviados',JSON.stringify(data))


        //Pegar os dados 
        const dataSeved = JSON.parse(localStorage.getItem('dadosEnviados'))

        const response = await api.post('massage', dataSeved)

        console.log(` A requisição deu certo: ${response.data}`)


        const respostaElemento = document.getElementById("respostaRequisicao")

        respostaElemento.textContent = `Requisição POST realizada com sucesso ${response.data.message}`


        // Remove do localstorage
        localStorage.removeItem('dadosEnviados')

        console.log('Os dados foram apagados temporariamente')

    } catch (error) {
        console.log(`Erro durante a requisição : ${error.message}`)
    }
}




//----------- PEGAR MENSAGEM ------------


const getMessages = (event) =>{
    event.preventDefault()

    //Pegamos o valor passado no parametro
    const email = document.getElementById('emailInput').value
    console.log(email)

    // fazemos o enpoint
    api.get(`massage/${email}`)

    .then(function(response ){
        console.log('Entrei no then')
        console.log(response.data.data)

        //salvamos o array de resposta em uma variável 
        const messages = response.data.data;
        
        //Interamos o array para criar uma div com as informacoes
        messages.forEach(message => {
          const messageElement = document.createElement('div')

          messageElement.innerHTML = `
            <p> Id : ${message.id}</p>
            <p> Título: ${message.title}</p>
            <p> Descrição: ${message.description}</p>
          `
          //Adiciona um Elemento no container
          messagesContainer.appendChild(messageElement)
        })
    })
    .catch(function(error){
        console.log(`Essa é a mensagem de erro '  ${error.message}`)
    
    })
} 



//----------- ATUALIZAR MENSAGEM ------------

const atualizarMensagem = async (event) => {
    event.preventDefault()

    try {
        //Caminho feliz => oq faz quando o código dá certo 

        const id = document.getElementById("updateId").value
        const title = document.getElementById("updateTitle").value
        const description = document.getElementById("updateDescription" ).value
    
        const data ={
            title: title,
            description: description
        }
    
        localStorage.setItem('dadosAtualizados', JSON.stringify(data))
    
        const dataSaved = JSON.parse(localStorage.getItem('dadosAtualizados'))
    
    
        const response = await api.put(`massage/${id}`, dataSaved)
    
        const respostaElemento = document.getElementById("updateRequisicao")
    
        respostaElemento.textContent = `Requisição PUT realizada com sucesso ${response.data.message}`

        localStorage.removeItem('dadosAtualizados')

        console.log('Os dados foram apagados temporariamente')


    } catch (error) {
        //Caminho Triste => oq faz quando o código dá ruim
        console.log(`Erro durante a requisição : ${error.message}`)
    }
}

//----------- DELETAR  MENSAGEM ------------

const deletarMensagem = async(event) =>{
    event.preventDefault()

    try {
        const id = document.getElementById("apagarId").value

        const response = await  api.delete(`massage/${id}`)

        const respostaElemento = document.getElementById("deleteRequisicao")

        respostaElemento.innerText = `Mensagem deletada com sucesso ${response.message}`

       
    } catch (error) {
        console.log(error.message)
    }
   

}

//----------- LOGIN NA API EX ------------