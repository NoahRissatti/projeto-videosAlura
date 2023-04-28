import { carregarVideos } from "./carregarVideos.js";
import { conectarApi } from "./conectarApi.js";

const botaoDePesquisa = document.querySelector("[data-botao__pesquisa]")
const lista = document.querySelector(".videos__container")


botaoDePesquisa.addEventListener("click", async evento => {
    const barraDePesquisa = document.querySelector("[data-pesquisa]")
    evento.preventDefault()
    const listaFiltrada = await conectarApi.buscarDados(barraDePesquisa.value)
    barraDePesquisa.value = ''
    carregarVideosPesquisa(listaFiltrada)
})



function carregarVideosPesquisa(videos) {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    if(videos.length == 0){
        lista.innerHTML = `<h2 class='mensagem__titulo'> Video não encontrado</h2>`
    }
    videos.forEach(element => {
        carregarVideos.criarCard(element.url, element.titulo, element.imagem, element.descricao)
    });
}



