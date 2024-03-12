const logarUsuario = async (event) => {
    event.preventDefault()

    const mensagemResposta = document.getElementById('resposta-mensagem')

    try {
        const emailPessoaUsuaria = document.getElementById('emailPessoaUsuaria-id').value
        const senhaPessoaUsuaria = document.getElementById('senhaPessoaUsuaria-id').value

        const dadosUsuario ={
            emailPessoaUsuaria,
             senhaPessoaUsuaria
        }

        //localStorage.setItem('CHAVE', DADO CONVERTIDO P/ STRING(DADO))

        localStorage.setItem('usuarioLogado', JSON.stringify(dadosUsuario))

        const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioLogado'))

        const response = await api.put('login', usuarioSalvo )

        console.log(` A requisicao deu certo ${response.data.message}`)

        mensagemResposta.innerHTML = `
            <p> A requisicao deu certo 

            <br>
            ${response.data.message} </p>
        `

        window.location.href= "/atv_login/home.html"

        localStorage.removeItem('usuarioLogado')

        
    } catch (error) {

        mensagemResposta.innerHTML = `
            <p> A requisicao deu ruim

            <br>
            ${error.message} </p>
        `
    }
}
