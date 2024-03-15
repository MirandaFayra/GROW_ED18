const botaoAnterior = document.getElementById("anterior")
const botaoProximo = document.getElementById("proxima") 
const exibirListaDeDados = document.getElementById("lista-dados") 
const messagemDeErro = document.getElementById("erro")

let paginaAtualDoApp = 1 

let page = paginaAtualDoApp

let carregando = false

let response

const fazerPaginacao = async (page) => {
    
    try {
        carregando = true


        const urlParams = new URLSearchParams(window.location.search)

        const limit = parseInt(urlParams.get("limit")) || 5
    
        const page = parseInt(urlParams.get("page")) || 1


        const parametros ={ 
            limit,
            page
        }

        response = await api.get(`/produtos/paginados`,{parametros})

        const produtos = response.data.data

        botaoAnterior.disable = true
        botaoProximo.disable = true

        // Apagar quando fazemos a requisao e carrega novamente
        exibirListaDeDados.innerHTML = " "

        let produtosPaginados = produtos
        

        if(produtos.length > limit){
            produtosPaginados  = produtos.slice(0,limit)
        }

        produtosPaginados.forEach((produto)=>{
            const paginaAtual = response.data.paginaAtual
            

            const novaDiv = document.createElement("div")
            novaDiv.innerHTML = `

                <p> ${produto.nomeProduto}</p>
                <p> ${produto.precoProduto}</p>
            
            `
            exibirListaDeDados.appendChild(novaDiv)

            let paginaSeguinte = paginaAtual + 1
            let paginaAnterior = paginaAtual - 1


            // condicao ? fazer 1: fazer 2
            botaoAnterior.disable = paginaAnterior >= 1? false:true
            botaoProximo.disable = paginaSeguinte <= response.data.totalPaginas ?false:true
        })


    } catch (error) {

        messagemDeErro.innerHTML= `
            Ocorreu um erro : ${error.message}
        `
    }

}

fazerPaginacao()

botaoAnterior.addEventListener("click",()=>{
    if(paginaAtualDoApp>1){
        paginaAtualDoApp --
        exibirListaDeDados.innerHTML = " "
        fazerPaginacao(paginaAtualDoApp)
    }
})



botaoProximo.addEventListener("click",()=>{
    if(paginaAtualDoApp < response.data.totalPaginas){
        console.log('')
        paginaAtualDoApp ++
        exibirListaDeDados.innerHTML = " "
        fazerPaginacao(paginaAtualDoApp)
    }
})
