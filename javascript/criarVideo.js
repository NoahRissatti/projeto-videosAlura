import { conectarApi } from "./conectarApi.js"

const formulario = document.querySelector("[data-formulario]")
formulario.addEventListener("submit",evento =>{
    evento.preventDefault()
    criarVideo()
})

function criarVideo(){
    const titulo = document.querySelector("[data-titulo]").value
    const imagem = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url]").value
    const numeroDescricao = Math.floor(Math.random() * 100).toString() 
    const descricao = `${numeroDescricao} mil visualizações`

    conectarApi.receberDados(titulo,imagem,url,descricao);

    window.location.href = "../pages/envio-concluido.html"
}

