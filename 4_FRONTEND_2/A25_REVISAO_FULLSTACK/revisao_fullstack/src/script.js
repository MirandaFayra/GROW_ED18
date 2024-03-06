/*

1. Cria o elemento, e armaneza os dados => POST => Passa parametro (body)

2.  Olhar os dado sarmazenados e ler esses dados => GET => recebe parametro lendo recurso especifico ou pegando um resultado filtrado de uma informacao 

3.  Olhar os dados armazenados e atualizar um dado especifico  => PUT => parametro url / parametro  

4. Olhar os dados armazenados e deletar um dado especifico  => DELETE => parametro de url 

*/ 


import express from 'express'
import cors from 'cors'

let PORT = 8080

const app = express()

app.use(cors())

app.use(express.json())




//-------- CRIAR (POST) ------ 


//--------- LER (GET) --------

//-------- ATULIZAR (PUT) ---- 

//------- DELETAR (DELETE) -------


app.listen(PORT, () => console.log("Servidor iniciado na porta 8080"))