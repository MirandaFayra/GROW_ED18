//Pegar usuários 

/*
{
    dado => response.data 
    status da requisicao => response.status 
    texto do status => response.statusText
    headers =>  response.headers
    configs => response.config
}

axios.get('/user?ID=12345')
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  })
  .finally(function () {
    // sempre será executado
  });

*/ 
const userContainer = document.querySelector('.user-list')

/*
const getUsers =()=>{
   //console.log('Olá esse é meu primeiro consumo de API')
   api.get('/users')
    .then(function(response){
        //console.log('Deu bom a requisação')
        //console.log(response.data.DADO_QUE_VC_VAI_ACESSA)
        console.log(response.data.data)
        const users = response.data.data

        users.forEach(user => {
            const userCard = document.createElement('div')
            userCard.classList.add('user-card')

            userCard.innerHTML = `
                <img src='${user.avatar}'alt=''>
                <p> ${user.first_name} ${user.last_name} </p>
                <p>${user.email} </p>

            `
            userContainer.appendChild(userCard)
        });


    })
    .catch(function(error){
        console.log('Entrei no erro')
        console.log('Essa é a mensagem de erro ' + error)
    })
        
}
*/ 

async function getUsers(){
    try {
       //caso posotivo 
       const response = await api.get('/users')
      
           //console.log('Deu bom a requisação')
           //console.log(response.data.DADO_QUE_VC_VAI_ACESSA)
           console.log(response.data.data)
           const users = response.data.data
   
           users.forEach(user => {
               const userCard = document.createElement('div')
               userCard.classList.add('user-card')
   
               userCard.innerHTML = `
                   <img src='${user.avatar}'alt=''>
                   <p> ${user.first_name} ${user.last_name} </p>
                   <p>${user.email} </p>
   
               `
               userContainer.appendChild(userCard)
           })

    } catch (error) {
        //caso negativo
        console.log('Entrei no erro')
        console.log('Essa é a mensagem de erro ' + error)
    }
}

getUsers()
