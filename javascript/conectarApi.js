async function montarLista(){
    const lista = await fetch("http://localhost:3000/videos")
    const listaConvertida = await lista.json()
    return listaConvertida;
}

async function buscarDados(pesquisa){
    const lista = await fetch(`http://localhost:3000/videos?q=${pesquisa}`)
    const listaConvertida = await lista.json()
    return listaConvertida;
}

async function receberDados(titulo,imagem,url,descricao){
    const conexao = await fetch('http://localhost:3000/videos',{
        method: "POST",
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            imagem: imagem,
            url:url,
            descricao: descricao,
        }),
    }
    )
}

export const conectarApi = {
    montarLista,
    receberDados,
    buscarDados
}