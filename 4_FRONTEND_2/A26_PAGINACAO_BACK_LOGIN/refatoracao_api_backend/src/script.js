import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
const {v4 : uuidv4} = require('uuid')


let PORT = 8080

let listaProdutos = []
let listaPessoas = []

//-----

const app = express()

app.use(cors())

app.use(express.json())


//-------- CRIAR PESSOA USUÁRIA ------ 

// Async e await pois a resposta do bcrypt retorna uma promisse 

app.post('/criar-usuario', async (request, response) => {
    const{nomePessoaUsuaria, emailPessoaUsuaria,senhaPessoaUsuaria} = request.body

    console.log(nomePessoaUsuaria)

    console.log(emailPessoaUsuaria)
    console.log(senhaPessoaUsuaria)

    try {

        if (!nomePessoaUsuaria) {
            return response.status(400).json({ message: 'Nome inválido, informe o nome.' })
        }

        if (!senhaPessoaUsuaria) {
            return response.status(400).json({ message: 'Senha inválida.' })
        }

        if (!emailPessoaUsuaria) {
            return response.status(400).json({ message: 'Passe um email válido.' })
        }

        const idAutomatico = uuidv4()

        const senhaHasheada = await bcrypt.hash(senhaPessoaUsuaria, 10)

        const novaPessoaUsuaria = {
            id: idAutomatico,
            nomePessoaUsuaria,
            emailPessoaUsuaria,
            senhaPessoaUsuaria: senhaHasheada
        }

        listaPessoas.push(novaPessoaUsuaria)

        response.status(201).json({ message: 'Pessoa criada com sucesso', data: listaPessoas })

    } catch (error) {
        console.error(error)
        response.status(500).json({ message: 'Erro interno' })
    }
})

//-------- LOGAR PESSOA USUÁRIA ------ 

app.put('/login', async (request,response)=>{
    try {

        const emailPessoaUsuaria = request.body.emailPessoaUsuaria
        const senhaPessoaUsuaria = request.body.senhaPessoaUsuaria

        if (!senhaPessoaUsuaria) {
            return response.status(400).json({ message: 'Senha inválida.' })
        }

        if (!emailPessoaUsuaria) {
            return response.status(400).json({ message: 'Passe um email válido.' })
        }

        const pessoaBuscada = listaPessoas.find( pessoa => pessoa.emailPessoaUsuaria === emailPessoaUsuaria)

        if (!pessoaBuscada) {
            return response.status(404).json({message: "Pessoa usuária não encontrada no nosso banco. Verifique o e-mail passado."})
        }

        const senhaEncontrada = await bcrypt.compare(senhaPessoaUsuaria, pessoaBuscada.senhaPessoaUsuaria)

        if(!senhaEncontrada){
            return response.status(400).json({message: "Credenciais inválidas."})
        }

        response.status(200).json({
            message: "Login bem-sucedido!",
            userId: pessoaBuscada.id
        })
  
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: 'Erro interno' })
    }
})


//-------- CRIAR (POST) ------ 

app.post('/criar-produto',(request,response)=>{
    const nomeProduto = request.body.nomeProduto 
    const precoProduto = request.body.precoProduto

    try {

        if(!nomeProduto){
            return response.status(404).send({message:' Nome inválido, informe o nome '})
        }

        if(!precoProduto){
            return response.status(404).send({message:' Preço inválido, informe o preço'})
        }

        const novoProduto ={
            nomeProduto , 
            precoProduto
        }

        listaProdutos.push(novoProduto)

        response.status(201).send({message:`Produto criado com sucesso` ,data:listaProdutos})
      
    } catch (error) {
        response.status(500).send({message:'Erro interno'})
    }
})


//--------- LER (GET) --------

app.get('/produtos', (request, response) => {
    try {

        if(listaProdutos.length>0){

            return response.status(200).json({sucess: true , message: `Produtos retornados com sucesso `, data: listaProdutos})

        }else{
            response.status(400).send({message:'Lista vazia'})
        }
        
    } catch (error) {
        response.status(500).send({message:'Erro interno'})
    }
})

//-------- ATULIZAR (PUT) ---- 

app.put('/produtos/:nomeProdutoAtualizado',(request, response)=>{
    const nomeProdutoAtualizado = request.params.nomeProdutoAtualizado
    const nomeProduto= request.body.nomeProduto
    const precoProduto = request.body.precoProduto

    try {
       const indiceProdutoBuscado = listaProdutos.findIndex ((produto)=>
        produto.nomeProduto === nomeProdutoAtualizado)

        if(indiceProdutoBuscado === -1){
           return response.status(404).send({message:'Produto não encontrado'})
        }

        const novoProduto ={
            nomeProduto,
            precoProduto
        }

        listaProdutos[indiceProdutoBuscado] = novoProduto
        response.status(201).send({message:'Produto atualizado com sucesso',dat:listaProdutos})

        
    } catch (error) {
        response.status(500).send({message:'Erro interno'})
    }
})

//------- DELETAR (DELETE) -------

app.delete('/produtos/:nomeProdutoDeletado',(request, response)=>{{
    const nomeProdutoDeletado = request.params.nomeProdutoDeletado

    try {

        if(!nomeProdutoDeletado){
            return response.status(404).send({message:'Passe um nome de produto válido'})
        }

        const indiceProdutoBuscado = listaProdutos.findIndex ((produto)=>
        produto.nomeProduto === nomeProdutoDeletado)

        if(indiceProdutoBuscado === -1){
            return response.status(404).send({message:'Produto não encontrado'})
        }

        listaProdutos.splice(indiceProdutoBuscado,1)

        response.status(200).send({message:'Produto delatado com sucesso'})
        
    } catch (error) {
        response.status(500).send({message:'Erro interno'})
    }
}})


//------- PAGINACAO -------

/* 

    LOJA 11 PRODUTOS CADASTRADOS 

    LIMITE = MOSTRAR DE 5 EM 5 PRODUTOS 

    QUANTIDADE  LIMITE DE ELEMENTOS POR PÁGINA = 5

    PÁGINA 1 = 1 A 5 
    PÁGINA 2 = 6 A 10
    PÁGINA 3 = 11 
    
    DE ONDE COMECA = OFFSET
    

*/


app.get('/produtos/paginados', (request, response) => {
    try {
        if (listaProdutos.length === 0) {
            return response.status(400).send({ message: 'A lista está vazia' })
        }

        const limit = parseInt(request.query.limit)

        // O offset é da onde estamos começando . Portanto um offset de 2, inicia  apartir do segundo item.
        const offset = parseInt(request.query.offset)

        const itensPorPaginaPositivo = Math.floor(Math.random() * offset)

        const produtosPaginados = listaProdutos.slice(
            itensPorPaginaPositivo,
            itensPorPaginaPositivo + limit
        )

        response.status(200).json({
            success: true,
            message: 'Produtos retornados com sucesso',
            data: produtosPaginados,
            totalProdutos: listaProdutos.length,
            paginaAtual: Math.floor(itensPorPaginaPositivo / limit) + 1,
            totalPaginas: Math.ceil(listaProdutos.length / limit),
            quantidadePorPagina: limit,
        })

    } catch (error) {
        response.status(500).send({ message: 'Erro interno' })
    }
})





//------- VERIFICAR API  -------

app.listen(PORT, () => console.log("Servidor iniciado na porta 8080"))