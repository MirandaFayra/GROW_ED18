import  express from 'express'
import cors from 'cors'
import bcrypt from "bcrypt"

import validateProduct from "./middlewares/validateProduct"


//-------------- CONFIG BÁSICA EXPRESS ---------- 

const app = express();
const port = 3333;

let nextId = 1
const products = []
const admins =[]

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`===>>>> Server start on PORT: ${port}`)
})

//--------- VERIFICAR SE API TÁ RODANDO ---------

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ success: true, msg: "Hello, START EXPRESS API" });
});


//------------ CRIA PRODUTO (CREATE) -------------
// app.metodo(endereco, middleware, fucao )

app.post("/products", validateProduct, (req, res) => {
  const data = req.body

  products.push({
    id: nextId,
    name: data.name,
    price: data.price,
  })

  //nextId = nextId + 1 //
  nextId++

  res
    .status(200)
    .json({ success: true, msg: "Produto cadastrado com sucesso." })
})


//------------ LÊ PRODUTO (READ) -----------------

app.get("/products", (req, res) => {
  return res.status(200).json({
    success: true,
    msg: "Lista de produtos retornado com sucesso.",
    data: products,
  })
})


//----------- ATUALIZA PRODUTO (UPDATE) -----------

app.put("/product/:productId",validateProduct,(req,res)=>{
  const data = req.body

  const productId = Number(req.params.productId)
  const name = data.name // igual = req.data.name
  const price = data.price

  const productIndex = products.findIndex(product => product.id === productId)

  if(productIndex !== -1){
    //const nomeDoMeuProduct = array[indice]
    //console.log(`Esse é o productIndex ${productIndex}`) // posicao
    //console.log(`Esse é o products[productIndex] ${products[productIndex]}`) // valor do elemento naquela posicao

    const product = products[productIndex]
    product.name = name
    product.price = price

    res.status(200).json({
      message: "Produto atualizado com sucesso!"
    })
  }else{
    return res.status(404).json({
      message: "Produto não encontrado"
    })
  }

})

//------------ DELETA PRODUTO (DELETE) ------------

app.delete("/produtos/:productId",(req,res)=>{
  const productId = Number(req.params.productId)

  const productIndex = products.findIndex(product => product.id === productId)

  if(productIndex !== -1){
    const product = products[productIndex] 
    const deletedProduct = products.splice(productIndex,1)
    res.status(200).json({
      message: "Produto deletado com sucesso!",
      deletedProduct
    })
  }else{
    return res.status(404).json({
      message: "Produto não encontrado, impossível apagar!",
  })
  }
})


//------------ CRIA ADMINISTRADOR (SIGNUP) ------------

app.post("/signup", (req, res) => {
  const data = req.body

  admins.push({
    id: nextId,
    email: data.email,
    password: data.password,
  })

  //nextId = nextId + 1 //
  nextId++

  res
    .status(200)
    .json({ success: true, msg: "Pessoa usuária cadastrada com sucesso." });
});


//------------ PEGA A PESSOA ADMINISTRADORA -------- 

app.get("/admins", (req, res) => {
  return res.status(200).json({
    success: true,
    msg: "Lista de pessoas retornada com sucesso.",
    data: admins.map(user =>({
      name: user.email,
      password: user.password
    }))
  })
})


//-------------- BCRYPT ----------------

/* 
  BCRYPT => Biblioteca que auxilia na criptografia das informações 
  "esconder senhas". 

      - Salt :Um salt é uma string aleatória que é adicionada a uma senha antes de ser criptografada. O salt é armazenado junto com o hash da senha;

      - Hash : Um hash é uma função matemática que transforma uma sequência de dados de qualquer tamanho em uma sequência de dados de tamanho fixo. 

      - saltRounds : Número de vezes que um algoritmo de hash é executado . Um número maior de saltrounds aumenta o tempo e a dificuldade de adivinhar uma senha.


  ASYNC E AWAIT => Programação Assincrona (executar tarefas que podem levar um certo tempo para ser concluída)

      - ASYNC : "cria uma função assincrona"
      - AWAIT : "pausa a execução da função assincrona para esperar o retorno"

*/

//------------ CRIA ADMINISTRADOR CRIPTOGRAFADO ----------

app.post("/signup/crypto",async(req, res) => {

  const data = req.body 
  const email = data.email 
  const password = data.password

  const emailAlreadyExists = admins.find(admin => admin.email === email)

  //Verificacao para o email se o email já existir
  if(emailAlreadyExists){
    return res.status(400).json({
      message: 'Email já cadastrado'
    })
  }

  // Constante que vai criptografar a senha 
  const hashPassword = await bcrypt.hash(password  , 10)

  console.log(hashPassword) 

  admins.push({
    id: nextId,
    email: data.email,
    password: hashPassword,
  })

  nextId ++

  res.status(201).json({
    message: 'Pessoa administradora cadastrada'
  })
});




//------------ LOGIN ADMINISTRADOR  (LOGIN) ------------

app.post("/login",async(req,res)=>{

   //const {email,password} = req.body // req.body.email | req.body.password 

   const data = req.body

   const email = data.email
   const password = data.password

   // Verificando se o usuário tá banco de dados . Pesquisar pelo email , pois só podemos ter um email no banco
   const user = admins.find(user => user.email === email )
  
   // Criptografar a senha criptografa 
   const hashPassword = await bcrypt.hash(password  , 10)

   // Comparar a senha que está criptografada com a senha que o usuário
   const passwordMath = await bcrypt.compare(password, hashPassword )

   //Verificar a senha 
   if(!passwordMath){
    return res.status(400).json({
      message: 'Credencial invalida'
    })
   }

   //Verificar o email 
   if(!user){
    return res.status(400).json({
      message: 'Usuário não encontrado'
    })
   }

   res.status(200).json({
    message: "Login bem sucedido",
    email
   })

})




