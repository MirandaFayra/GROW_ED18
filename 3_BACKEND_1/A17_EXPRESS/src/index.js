import express from 'express'

const app = express()

app.use(express.json())

//app.METHOD(PATH, HANDLER)

// GET
app.get('/', (request, response) => {
    return response.json('Okay');
})


// GET PASSANDO O SATUS CODE

app.get('/fruta', (request, response) => {
    let fruta = {
        nome: 'Banana'
    }

    response.status(200).json({
        message :  `O usuário vai comer a fruta  : ${fruta.nome}`
    })
})


// POST => Criar uma nova pessoa usuaria

/*
app.post('/',(request, response)=>{
    // Pegar front : nome | email |senha 

    const data = request.body //data => dados que vem do corpo req

    let pessoaUsuaria ={
        nome: data.nome, 
        email: data.email, 
        senha: data.senha
    }

    response.status(201).json({
        message: `Pessoa usuária criada com sucesso! O nome é :${pessoaUsuaria.nome}, o e-mail é ${pessoaUsuaria.email}`
    })

})
*/

// POST => Criar uma nova pessoa usuaria

app.post('/',(req, res)=>{
    // Pegar front : nome | email |senha 

    const data = req.body //data => dados que vem do corpo req

    let pessoaUsuaria ={
        nome: data.nome, 
        email: data.email, 
        senha: data.senha
    }

    res.status(201).json({
        message: `Pessoa usuária criada com sucesso! O nome é :${pessoaUsuaria.nome}, o e-mail é ${pessoaUsuaria.email}`
    })
})


app.listen(8080,()=>console.log('Servidor iniciado'))

// http://localhost:8080



