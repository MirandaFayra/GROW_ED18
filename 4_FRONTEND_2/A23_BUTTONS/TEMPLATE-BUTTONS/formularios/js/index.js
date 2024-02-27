window.onload = function () {
    // 1. Pego o formulario
    // 2. Pegar o valor de curriculo
    // 3. Transformar on click 
    //4. Mudar o comportamento padrao 
    // 5. Imprmir o caminho do formulario
    const formulario = document.getElementById('formulario-cadastro')
    console.log(formulario.curriculo.value)

    formulario.salvar.addEventListener('click',(event)=>{
        event.preventDefault()
        console.log(formulario.curriculo.value)
    })

   
};
