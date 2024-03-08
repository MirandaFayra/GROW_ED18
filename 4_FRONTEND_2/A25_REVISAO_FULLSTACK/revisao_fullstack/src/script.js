/*

link deploy : https://api-revisao-fullstack.onrender.com

1. Cria o elemento, e armaneza os dados => POST => Passa parametro (body)

2.  Olhar os dado sarmazenados e ler esses dados => GET => recebe parametro lendo recurso especifico ou pegando um resultado filtrado de uma informacao 

3.  Olhar os dados armazenados e atualizar um dado especifico  => PUT => parametro url / parametro  

4. Olhar os dados armazenados e deletar um dado especifico  => DELETE => parametro de url 

*/ 


import express from 'express'
import cors from 'cors'

let PORT = 8080

let listaProdutos = []

//-----

const app = express()

app.use(cors())

app.use(express.json())




//-------- CRIAR (POST) ------ 

app.post('/criar-produto',(request,response)=>{
    const nomeProduto = request.body.nomeProduto 
    const precoProduto = request.body.precoProduto

    try {
        //O caminho feliz quando a requisicao deu Bom
        
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
        // O caminho triste , quando erro 
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

/* 

muda no postman e coloca o ?oparametro

app.put('/produtos',(request, response)=>{
    const nomeProdutoAtualizado = request.query.nomeProdutoAtualizado
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


*/

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


//------- VERIFICAR API  -------

app.listen(PORT, () => console.log("Servidor iniciado na porta 8080"))