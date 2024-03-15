const urlParams = new URLSearchParams(window.location.search);

const limit = parseInt(urlParams.get("limit")) || 2;
let offset = parseInt(urlParams.get("offset")) || 1;

const div = document.getElementById("lista-dados");
const btnProximo = document.getElementById('proxima');
const btnAnterior = document.getElementById('anterior');

const fazerPaginacao = async () => {
    try {
        const data = {
            limit,
            offset
        };

        const response = await api.get("/massage", { params: data });

        const mensagem = response.data.data;

        mensagem.forEach(msg => {
            const divCriada = document.createElement("div");
            divCriada.innerHTML = `<p>${msg.id}</p>
            <p>${msg.title}</p> 
            <p>${msg.description}</p>`;

            div.appendChild(divCriada);

        });

        btnAnterior.disabled = offset === 1
        btnProximo.disabled = response.data.totalPages === offset;
    } catch (error) {
        console.log(error);
    }
}

fazerPaginacao()

const proximaPagina = () => {
    if (offset) {
        offset += 1
    }
    div.innerHTML = ''
    fazerPaginacao()
}

const paginaAnterior = () => {
    if (offset > 1) {
        offset -= 1
    }
    div.innerHTML = ''
    fazerPaginacao()
}