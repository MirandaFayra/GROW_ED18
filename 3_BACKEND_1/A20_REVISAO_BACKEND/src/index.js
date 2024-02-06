//console.log('Teste')

import  express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json()) 
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})

// cliente pede e passa dado (parametros) => Request
// servidor responde e devolve status e resposta => Response

app.get('/',(req,res)=>{
    res.status(200).send('Salve turma')
})

/*

    Resposta 
    - Status code => Qual é o status da nossa requisiçã? Deu bom ou não ? Teve erro ao digitar ? Servidor tá funcionando

    - Corpo da Resposta => formato do conteúdo JSON , mensagem , receber um dado, sucesso 

    - Cabeçalho => autenticacao / headers / token / authorization 

    - res.status(n) - envia uma resposta com status code n
    - res.send(x) - responde a requisição com o objeto x
    - res.end() - encerra a requisição sem um body na resposta

*/


// Endpoint para criar aluno  - CREATE 

const alunos = []

app.post('/alunos',(req, res)=>{
    const nome = req.body.nome
    const email = req.body.email 

    const novoAluno = {
        nome,
        email 
    }

    //verificar email 
    //verificar nome 

    alunos.push(novoAluno)

    res.status(201).json({
        sucess : true ,
        message : "Pessoa estudante criada com sucesso!"
    })

})

// CRUD => CREATE (POST) | READ (GET) | UPODATE (PUT) | DELETE (DEL)


// Ler estudantes 
app.get('/alunos',(req, res)=>{
    res.status(200).send(alunos)
})


// ATUALIZAR  estudante 
app.put('/alunos/:nomeAluno', (req,res)=>{
    const nomeAluno = req.params.nomeAluno
    const nome = req.body.nome
    const email = req.body.email

    //console.log(nomeAluno)

    const novoAluno ={
        nome,
        email
    }

    //console.log(novoAluno)

    const indice = alunos.findIndex(aluno => aluno.nome === nomeAluno)

    //console.log(indice)
    
    if(indice !== -1){
        alunos[indice] = novoAluno
        res.status(200).send ('Pessoa estudante atualizada com sucesso')
    }else{
        res.status(400).send ('Pessoa estudante não encontrado')
    }
    
})

