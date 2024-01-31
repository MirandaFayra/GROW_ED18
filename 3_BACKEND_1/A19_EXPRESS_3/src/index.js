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





//------------ DELETA PRODUTO (DELETE) ------------



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




//------------ LOGIN ADMINISTRADOR  (LOGIN) ------------






