import { conectarApi } from "./conectarApi.js"

function criarCard(src, titulo, imagem, descricao) {
    const listaContainer = document.querySelector(".videos__container")
    const lista = document.createElement("li")
    lista.classList.add("videos__item")
    lista.innerHTML = `<iframe width="100%" height="72%" 
    src="${src}"
    title="${titulo}" 
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`
    listaContainer.appendChild(lista)
}

async function receberDadosApi() {
    const listaApi = await conectarApi.montarLista()
    listaApi.forEach(element => {
        criarCard(element.url,element.titulo,element.imagem,element.descricao);
    });
}

receberDadosApi()

export const carregarVideos = {
    criarCard
}